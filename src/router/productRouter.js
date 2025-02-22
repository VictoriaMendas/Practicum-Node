import { Router } from "express";
import { createProductController } from "../controller/products.js";

export const router = Router();
router.post("/", createProductController);
