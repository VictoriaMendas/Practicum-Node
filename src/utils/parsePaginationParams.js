const parseNumber = (number, defaultValue) => {
  const string = typeof number === "string";
  if (!string) return defaultValue;
  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) return defaultValue;
  return parsedNumber;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;
  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);
  console.log(parsedPerPage, perPage);
  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
