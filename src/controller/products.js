import {
  createProductsService,
  getProductsService,
} from "../service/products.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";

export const createProductController = async (req, res) => {
  const userId = req.user._id;
  console.log(req.user);
  const data = await createProductsService({ ...req.body, userId });
  res.status(201).json({ message: "Create product successful", data });
};
export const getProductsController = async (req, res) => {
  console.log(req.user);
  const userId = req.user._id;
  const filter = parseFilterParams(req.query);
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortOrder, sortBy } = parseSortParams(req.query);
  const data = await getProductsService({
    filter,
    page,
    perPage,
    sortOrder,
    sortBy,
    userId,
  });

  res.status(200).json({ message: "Successful request", data });
};
