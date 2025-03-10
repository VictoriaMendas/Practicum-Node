import { Router } from "express";
import {
  createProductController,
  getProductsController,
} from "../controller/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middleware/validateBody.js";
import { productSchema } from "../validation/productSchema.js";

const router = Router();
router.post(
  "/",
  validateBody(productSchema),
  ctrlWrapper(createProductController)
);
router.get("/", ctrlWrapper(getProductsController));
export default router;
