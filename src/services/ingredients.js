import { IngredientsCollection } from "../db/models/ingredient.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getAllIngredients = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const ingredientsQuery = IngredientsCollection.find();
  const ingredientsCount = await IngredientsCollection.find()
    .merge(ingredientsQuery)
    .countDocuments();

  const ingredients = await ingredientsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(
    ingredientsCount,
    perPage,
    page
  );
  console.log(ingredients);
  return {
    data: ingredients,
    ...paginationData,
  };
};
