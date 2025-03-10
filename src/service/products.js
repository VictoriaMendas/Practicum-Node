import { ProductModel } from "../db/models/Product.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const createProductsService = (payload) => {
  return ProductModel.create(payload);
};
export const getProductsService = async ({
  filter = {},
  page = 1,
  perPage = 10,
  sortOrder = "asc",
  sortBy = "createdAt",
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const productQuery = ProductModel.find();
  if (filter.minPrice) {
    productQuery.where("price").gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productQuery.where("price").lte(filter.maxPrice);
  }
  const productCount = await ProductModel.find()
    .merge(productQuery)
    .countDocuments();
  const products = await productQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData({
    count: productCount,
    perPage,
    page,
  });
  return {
    data: products,
    ...paginationData,
  };
};
