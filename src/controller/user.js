import { ONE_DAY } from "../constants/index.js";
import { loginUserService, registerUserService } from "../service/user.js";

export const userRegisterController = async (req, res) => {
  const data = await registerUserService(req.body);
  res.status(201).json({
    status: 201,
    message: "Successfully registered user",
    data,
  });
};
export const userLoginController = async (req, res) => {
  const session = await loginUserService(req.body);
  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.json({
    status: 200,
    mesage: "Successsful login user",
    data: { accessToken: session.accessToken },
  });
};
export const refreshUserSessionController = async(req, res) => {
const session = await refreshUserSession({sessionId: req.cookies.sessionId, refreshToken: req.cookies.refreshToken})
}