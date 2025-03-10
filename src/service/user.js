import createHttpError from "http-errors";
import { UserModel } from "../db/models/User.js";
import bcrypt from "bcrypt";
import { SessionModel } from "../db/models/Session.js";
import { randomBytes } from "crypto";
import { FIFTEEN_MINUTES, ONE_DAY } from "../constants/index.js";
export const registerUserService = async (body) => {
  const user = await UserModel.findOne({ email: body.email });
  if (user) {
    throw createHttpError(409, "Email on use");
  }
  const encryptedPassword = await bcrypt.hash(body.password, 10);
  return await UserModel.create({
    ...body,
    password: encryptedPassword,
  });
};

export const loginUserService = async (body) => {
  const user = await UserModel.findOne({ email: body.email });
  if (!user) {
    throw createHttpError(404, "User not found");
  }
  const isPassword = await bcrypt.compare(body.password, user.password);
  if (!isPassword) {
    throw createHttpError(401);
  }
  await SessionModel.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString("base64");
  const refreshToken = randomBytes(30).toString("base64");
  return await SessionModel.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

export const refreshUserSession = async ({ sessionId, refreshToken }) => {
  const session = await SessionModel.findOne({ _id: sessionId, refreshToken });
  if (!session) {
    throw createHttpError(401, " Session not found");
  }
};
