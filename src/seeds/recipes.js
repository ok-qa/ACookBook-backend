import fs from "fs";
import { RecipesCollection } from "../db/models/recipe.js";
import { CategoriesCollection } from "../db/models/category.js";
import { AreasCollection } from "../db/models/area.js";
import { IngredientsCollection } from "../db/models/ingredient.js";

const runRecipesSeed = async () => {
  try {
    const recipesData = JSON.parse(
      fs.readFileSync("./seedsData/allRecipes.json", "utf-8")
    );

    for (const recipe of recipesData) {
      const category = await CategoriesCollection.findOne({
        name: recipe.category,
      });

      const ingredients = recipe.ingredients.map(async (ingredient) => {
        const foundIngredient = await IngredientsCollection.findOne({
          oldId: ingredient.id,
        });
        return {
          measure: ingredient.measure,
          id: foundIngredient._id,
        };
      });
      const ingredientsData = await Promise.all(ingredients);

      const newRecipe = {
        title: recipe.title,
        categoryId: category.id,
        description: recipe.description,
        cookingTime: recipe.time,
        instructions: recipe.instructions,
        img: recipe.thumb,
        youtube: recipe.youtube,
        tags: [...recipe.tags],
        ingredients: ingredientsData,
        rating: recipe.rating,
      };
      if (recipe.area) {
        const area = await AreasCollection.findOne({ name: recipe.area });
        newRecipe.areaId = area.id;
      }

      await RecipesCollection.create(newRecipe);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runRecipesSeed;
