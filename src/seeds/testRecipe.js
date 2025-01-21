import { AreasCollection } from "../db/models/area.js";
import { CategoriesCollection } from "../db/models/category.js";
import { IngredientsCollection } from "../db/models/ingredient.js";
import { RecipesCollection } from "../db/models/recipe.js";

export const runTwoCategoriesRecipeSeed = async () => {
  try {
    const dessertCategory = await CategoriesCollection.findOne({
      name: "Dessert",
    });
    const breakfastCategory = await CategoriesCollection.findOne({
      name: "Breakfast",
    });

    const unknownArea = await AreasCollection.findOne({ name: "Unknown" });

    const flour = await IngredientsCollection.findOne({ name: "Flour" });

    const sugar = await IngredientsCollection.findOne({
      name: "Granulated Sugar",
    });

    const baking_soda = await IngredientsCollection.findOne({
      name: "Bicarbonate Of Soda",
    });

    const cocoa_powder = await IngredientsCollection.findOne({
      name: "Cocoa",
    });

    const salt = await IngredientsCollection.findOne({
      name: "Kosher Salt",
    });

    const milk = await IngredientsCollection.findOne({
      name: "Milk",
    });

    const vegetable_oil = await IngredientsCollection.findOne({
      name: "Vegetable Oil",
    });

    const vanilla_extract = await IngredientsCollection.findOne({
      name: "Vanilla Extract",
    });

    const chocolate_chips = await IngredientsCollection.findOne({
      name: "Chocolate Chips",
    });

    const newRecipe = {
      title: "Chocolate Mug Cake (test)",
      categoryId: [dessertCategory.id, breakfastCategory.id],
      areaId: unknownArea.id,
      description:
        "This chocolate mug cake is made in the microwave for a fudgy, chocolaty treat that is truly decadent. It's a great recipe for nights when I need a yummy dessert that's ready in less than 10 minutes!",
      cookingTime: 5,
      instructions:
        "Mix flour, sugar, cocoa powder, baking soda, and salt together in a large microwave-safe mug; stir in milk, canola oil, water, and vanilla extract. Cook in the microwave until cake is done in the middle, about 1 minute 45 seconds. Enjoy!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWipN3voyA8oUvjjTtbcxFsGTYOmo5dQoJlNIWcyMScmoFez1sk3mhTGDncJTEJvAHEJY&usqp=CAU",
      youtube: "https://www.youtube.com/watch?v=H3OhTEkNbgU",
      tags: ["Easy", "Cake"],
      ingredients: [
        { id: flour.id, measure: "3 tbs" },
        { id: sugar.id, measure: "3 tbs" },
        { id: cocoa_powder.id, measure: "2 tbs" },
        { id: baking_soda.id, measure: "1/4 tsp" },
        { id: salt.id, measure: "1 pinch" },
        { id: milk.id, measure: "3 tbs" },
        { id: vegetable_oil.id, measure: "3 tbs" },
        { id: vanilla_extract.id, measure: "1/8 tsp" },
        { id: chocolate_chips.id, measure: "3 tbs" },
      ],
      rating: 4.9,
    };
    await RecipesCollection.create(newRecipe);
    console.log("Test recipe successfully created");
  } catch (error) {
    console.error(error);
  }
};
