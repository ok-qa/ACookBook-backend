import { CategoriesCollection } from "../db/models/category.js";

const getAllCategories = async () => {
  const categories = await CategoriesCollection.find();
  console.log(categories);
  return categories;
};

export default getAllCategories;
