import { getAllIngredients } from "../services/ingredients.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getAllIngredientsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const ingredients = await getAllIngredients({
    page,
    perPage,
  });

  res.status(200).json({
    status: 200,
    message: "Successfully loaded all ingredients!",
    data: ingredients,
  });
};
