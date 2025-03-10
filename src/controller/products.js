import {
  createProductsService,
  getProductsService,
} from "../service/products.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";

export const createProductController = async (req, res) => {
  const data = await createProductsService(req.body);
  res.status(201).json({ message: "Create product successful", data });
};
export const getProductsController = async (req, res) => {
  const filter = parseFilterParams(req.query);
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortOrder, sortBy } = parseSortParams(req.query);
  const data = await getProductsService({
    filter,
    page,
    perPage,
    sortOrder,
    sortBy,
  });

  res.status(200).json({ message: "Successful request", data });
};
