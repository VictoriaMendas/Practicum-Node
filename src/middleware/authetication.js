import createHttpError from "http-errors";
import { UserModel } from "../db/models/User.js";
import { SessionModel } from "../db/models/Session.js";

export const authenticate = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    next(createHttpError(401, " Please provide authorization header"));
    return;
  }

  const [bearer, token] = authHeader.split(" ");
  console.log(bearer, token);
  if (bearer !== "Bearer" || !token) {
    next(createHttpError(401, "Authorization header should be of type Bearer"));
    return;
  }
  const session = await SessionModel.findOne({ accessToken: token });
  if (!session) {
    next(createHttpError(401, "Session not found"));
    return;
  }
  const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenValidUntil);
  if (isAccessTokenExpired) {
    next(createHttpError(401, "AccessToken expired"));
    return;
  }
  const user = await UserModel.findById(session.userId);
  if (!user) {
    next(createHttpError(401));
    return;
  }
  req.user = user;
  next();
};
