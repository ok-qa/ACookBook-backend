const parseCategoryIds = (categoryIds) => {
  if (typeof categoryIds === "string") {
    return { value: categoryIds, type: "categoryId" };
  } else if (
    Array.isArray(categoryIds) &&
    categoryIds.every((el) => typeof el === "string")
  ) {
    return { value: categoryIds, type: "categoryIds" };
  }

  return;
};

export const parseFilterParams = (query) => {
  const { areaId, categoryIds, cookingTime } = query;

  const parsedCategoryIds = parseCategoryIds(categoryIds);

  return {
    areaId,
    categoryIds: parsedCategoryIds,
    cookingTime,
  };
};
