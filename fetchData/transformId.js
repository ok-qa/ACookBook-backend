const fs = require("fs");
const mongoose = require("mongoose");
const { Ingredient, Receipt } = require("./models"); // assuming models are in models.js

// Connect to your MongoDB database
mongoose.connect("mongodb://localhost:27017/yourDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function importData() {
  try {
    // Step 1: Read JSON files
    const ingredientsData = JSON.parse(
      fs.readFileSync("ingredients.json", "utf-8")
    );
    const receiptsData = JSON.parse(fs.readFileSync("receipts.json", "utf-8"));

    // Step 2: Insert Ingredients and create a mapping of old ID -> new MongoDB ObjectId
    const ingredientMap = {}; // Store a map of old ingredient ID -> new ObjectId

    for (const ingredient of ingredientsData) {
      const newIngredient = new Ingredient({
        name: ingredient.name,
        unit: ingredient.unit,
        price: ingredient.price,
      });
      await newIngredient.save();
      ingredientMap[ingredient.id] = newIngredient._id; // Store the new ObjectId
    }

    console.log("Ingredients imported successfully!");

    // Step 3: Insert Receipts with mapped ingredient IDs
    for (const receipt of receiptsData) {
      const ingredientIds = receipt.ingredients.map((id) => ingredientMap[id]); // Map old ingredient IDs to new ones

      const newReceipt = new Receipt({
        title: receipt.title,
        description: receipt.description,
        ingredients: ingredientIds, // Use new ObjectIds here
      });

      await newReceipt.save();
    }

    console.log("Receipts imported successfully!");

    // Close the connection
    mongoose.connection.close();
  } catch (err) {
    console.error("Error importing data:", err);
  }
}

// Execute the import script
importData();
