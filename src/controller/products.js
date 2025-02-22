import { createProductsService } from "../service/products.js";

export const createProductController = async (req, res) => {
  const data = await createProductsService(req.body);
  res.status(201).json({ message: "Create product successful", data });
};
