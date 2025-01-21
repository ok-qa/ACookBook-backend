import { getAllRecipes } from "../services/recipes.js";
import { getAllIngredients } from "../services/ingredients.js";
import getAllCategories from "../services/categories.js";
import getAllAreas from "../services/areas.js";
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

export const getAllAreasController = async (req, res) => {
  const areas = await getAllAreas();

  res.status(200).json({
    status: 200,
    message: "Successfully found all areas!",
    data: areas,
  });
};

export const getAllCategoriesController = async (req, res) => {
  const categories = await getAllCategories();

  res.status(200).json({
    status: 200,
    message: "Successfully found all categories!",
    data: categories,
  });
};

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
