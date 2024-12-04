import fs from "fs";
import { RecipesCollection } from "../db/models/recipe.js";
import { CategoriesCollection } from "../db/models/category.js";
import { AreasCollection } from "../db/models/area.js";
import { IngredientsCollection } from "../db/models/ingredient.js";

const runRecipesSeed = async () => {
  try {
    await RecipesCollection.deleteMany({});
    const recipesData = JSON.parse(fs.readFileSync("allRecipes.json", "utf-8"));

    for (const recipe of recipesData) {
      const categoryId = await CategoriesCollection.findOne({
        name: recipe.category,
      });
      console.log("category Id: ", categoryId);

      const ingredients = recipe.ingredients.map(async (ingredient) => {
        const foundIngredient = await IngredientsCollection.findOne({
          oldId: ingredient.id,
        });
        console.log(" Ingredient: ", ingredient);
        console.log("found Ingredient: ", foundIngredient);
        return {
          measure: ingredient.measure,
          id: foundIngredient._id,
        };
      });
      const ingredientsData = await Promise.all(ingredients);

      const newRecipe = {
        title: recipe.title,
        categoryId: categoryId,
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
        const areaId = await AreasCollection.findOne({ name: recipe.area });
        newRecipe.areaId = areaId;

        console.log("area Id: ", areaId);
      }

      const savedRecipe = await RecipesCollection.create(newRecipe);
      console.log("saved recipe: ", savedRecipe);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runRecipesSeed;
