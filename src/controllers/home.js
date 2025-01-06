import { getAllIngredients } from "../services/ingredients.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import getAllCategories from "../services/categories.js";
import getAllAreas from "../services/areas.js";

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
