import { Router } from "express";
import {
  createProductController,
  getProductsController,
} from "../controller/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middleware/validateBody.js";
import { productSchema } from "../validation/productSchema.js";
import { authenticate } from "../middleware/authetication.js";

const router = Router();
router.use(authenticate);
router.post(
  "/",
  validateBody(productSchema),
  ctrlWrapper(createProductController)
);
router.get("/", ctrlWrapper(getProductsController));
export default router;
