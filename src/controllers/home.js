import { getAllRecipes } from "../services/recipes.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getAllRecipesController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const filter = parseFilterParams(req.query);

  const recipes = await getAllRecipes({
    page,
    perPage,
    filter,
  });

  res.status(200).json({
    status: 200,
    message: "Successfully loaded all recipes!",
    data: recipes,
  });
};
