import { ProductModel } from "../db/models/Product.js";

export const createProductsService = (payload) => {
  return ProductModel.create(payload);
};
