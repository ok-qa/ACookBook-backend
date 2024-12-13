import { CategoriesCollection } from "../db/models/category";

const getAllCategories = async () => {
  const categories = await CategoriesCollection.find();
  console.log(categories);
  return categories;
};

export default getAllCategories;
