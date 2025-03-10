const parseNumber = (number) => {
  if (typeof number !== "string") return;

  const num = Number(number);
  if (Number.isNaN(num)) {
    return;
  }
  return num;
};

export const parseFilterParams = (query) => {
  const { minPrice, maxPrice } = query;
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);
  return { minPrice: parsedMinPrice, maxPrice: parsedMaxPrice };
};
