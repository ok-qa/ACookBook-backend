import { RecipesCollection } from "../db/models/recipe.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";
import { CustomError } from "../utils/customError.js";
// import { SORT_ORDER } from "../constants/index.js";
import createHttpError from "http-errors";

export const getAllRecipes = async ({
  page,
  perPage,
  //   sortOrder = SORT_ORDER.ASC,
  // sortBy = "_id",
  filter = {},
  //   userId,
}) => {
  try {
    const limit = perPage;
    const skip = (page - 1) * perPage;

    const recipesQuery = RecipesCollection.find();

    if (filter.areaId) {
      recipesQuery.where("areaId").equals(filter.areaId);
    }

    if (filter.categoryIds?.type === "categoryId") {
      recipesQuery.where("categoryId").all(filter.categoryIds.value);
    } else if (filter.categoryIds?.type === "categoryIds") {
      recipesQuery.where("categoryId").all(filter.categoryIds.value);
    }

    if (filter.cookingTime) {
      const isValidCookingTime = /^\d+$/.test(filter.cookingTime);
      if (!isValidCookingTime) {
        throw new CustomError("Invalid cookingTime format", "cookingTime");
      }
      recipesQuery.where("cookingTime").lte(parseFloat(filter.cookingTime));
    }

    //   recipesQuery.where("userId").equals(userId);

    const recipesCount = await RecipesCollection.find()
      .merge(recipesQuery)
      .countDocuments();

    const recipes = await recipesQuery.skip(skip).limit(limit).exec();

    const paginationData = calculatePaginationData(recipesCount, perPage, page);
    return {
      data: recipes,
      ...paginationData,
    };
  } catch (error) {
    console.error("console log from catch: ", error);
    throw new createHttpError(400, `${error.path} is invalid!`);
  }
};
