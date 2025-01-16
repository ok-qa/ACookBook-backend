import { AreasCollection } from "../db/models/area.js";
import { CategoriesCollection } from "../db/models/category.js";
import { IngredientsCollection } from "../db/models/ingredient.js";
import { RecipesCollection } from "../db/models/recipe.js";
import runAreasSeed from "./areas.js";
import runCategoriesSeed from "./categories.js";
import runIngredientsSeed from "./ingredients.js";
import runRecipesSeed from "./recipes.js";
import { runTwoCategoriesRecipeSeed } from "./testRecipe.js";

const runAllSeeds = async () => {
  // await RecipesCollection.deleteMany({});
  // await AreasCollection.deleteMany({});
  // await CategoriesCollection.deleteMany({});
  // await IngredientsCollection.deleteMany({});

  // await runAreasSeed();
  // await runCategoriesSeed();
  // await runIngredientsSeed();
  // await runRecipesSeed();
  await runTwoCategoriesRecipeSeed();

  console.log("All seeds planted");
};

export default runAllSeeds;
