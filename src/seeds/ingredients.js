import fs from "fs";
import { IngredientsCollection } from "../db/models/ingredient.js";

const runIngredientsSeed = async () => {
  try {
    const ingredientsData = JSON.parse(
      fs.readFileSync("./seedsData/ingredients.json", "utf-8")
    );

    for (const ingredient of ingredientsData) {
      const newIngredient = {
        name: ingredient.name,
        oldId: ingredient._id,
        description: ingredient.desc,
        img: ingredient.img,
      };

      await IngredientsCollection.create(newIngredient);
    }
  } catch (error) {
    console.error(error);
  }
};

export default runIngredientsSeed;
