const parseSortOrder = (sortOrder) => {
  const isKnowOrder = ["asc", "desc"].includes(sortOrder);
  if (isKnowOrder) return sortOrder;
  return "asc";
};
const parseSortBy = (sortBy) => {
  const keysOfProducts = ["name", "price", "stock", "createdAt", "updatedAt"];
  if (keysOfProducts.includes(sortBy)) return sortBy;
  return "createdAt";
};
export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;
  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);
  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
