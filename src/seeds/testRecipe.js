import { RecipesCollection } from "../db/models/recipe.js";

export const runTwoCategoriesRecipeSeed = async () => {
  try {
    const newRecipe = {
      title: "Chocolate Mug Cake (test)",
      categoryId: ["67534f16a46243f15eba872f", "67534f16a46243f15eba8733"],
      areaId: "67534f14a46243f15eba86fd",
      description:
        "This chocolate mug cake is made in the microwave for a fudgy, chocolaty treat that is truly decadent. It's a great recipe for nights when I need a yummy dessert that's ready in less than 10 minutes!",
      cookingTime: 5,
      instructions:
        "Mix flour, sugar, cocoa powder, baking soda, and salt together in a large microwave-safe mug; stir in milk, canola oil, water, and vanilla extract. Cook in the microwave until cake is done in the middle, about 1 minute 45 seconds. Enjoy!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWipN3voyA8oUvjjTtbcxFsGTYOmo5dQoJlNIWcyMScmoFez1sk3mhTGDncJTEJvAHEJY&usqp=CAU",
      youtube: "https://www.youtube.com/watch?v=H3OhTEkNbgU",
      tags: ["Easy", "Cake"],
      ingredients: [
        { id: "67534f1aa46243f15eba88a7", measure: "1/4 cup" },
        { id: "67534f21a46243f15eba8aab", measure: "1/4 cup" },
        { id: "67534f21a46243f15eba8abb", measure: "2 tbs" },
        { id: "67534f1fa46243f15eba8a45", measure: "1/8 tsp" },
        { id: "67534f22a46243f15eba8b4b", measure: "1/8 tsp" },
        { id: "67534f17a46243f15eba87b3", measure: "3 tbs" },
        { id: "67534f19a46243f15eba8815", measure: "2 tbs" },
        { id: "67534f21a46243f15eba8aaf", measure: "1 tbs" },
        { id: "67534f19a46243f15eba8839", measure: "1/8 tsp" },
      ],
      rating: 4.9,
    };
    await RecipesCollection.create(newRecipe);
  } catch (error) {
    console.error(error);
  }
};
