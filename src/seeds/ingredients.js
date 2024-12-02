import fs from "fs";
import { IngredientsCollection } from "../db/models/ingredient.js";

const runIngredientsSeed = async () => {
  try {
    // await IngredientsCollection.deleteMany({});
    const ingredientsData = JSON.parse(
      fs.readFileSync("ingredients.json", "utf-8")
    );

    for (const ingredient of ingredientsData) {
      const newIngredient = {
        name: ingredient.name,
        oldId: ingredient._id,
        description: ingredient.desc,
        img: ingredient.img,
      };

      const savedIngredient = await IngredientsCollection.create(newIngredient);
      console.log("saved ingredient: ", savedIngredient);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runIngredientsSeed;
