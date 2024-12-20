import fs from "fs";
import { CategoriesCollection } from "../db/models/category.js";

const runCategoriesSeed = async () => {
  try {
    const categoriesData = JSON.parse(
      fs.readFileSync("./seedsData/categories.json", "utf-8")
    );

    for (const category of categoriesData) {
      const newCategory = {
        name: category.name,
      };

      await CategoriesCollection.create(newCategory);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runCategoriesSeed;
