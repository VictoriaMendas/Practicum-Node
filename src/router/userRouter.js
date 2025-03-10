import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middleware/validateBody.js";

import { loginUserSchema, userSchema } from "../validation/userSchema.js";
import {
  userLoginController,
  userRegisterController,
} from "../controller/user.js";

const router = Router();

router.post(
  "/register",
  validateBody(userSchema),
  ctrlWrapper(userRegisterController)
);
router.post(
  "/login",
  validateBody(loginUserSchema),
  ctrlWrapper(userLoginController)
);
router.post("/refresh", ctrlWrapper());
export default router;
