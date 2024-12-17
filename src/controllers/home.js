import getAllCategories from "../services/categories.js";

export const getAllCategoriesController = async (req, res) => {
  const categories = await getAllCategories();

  res.status(200).json({
    status: 200,
    // message: "Successfully found all categories!",
    data: categories,
  });
};
