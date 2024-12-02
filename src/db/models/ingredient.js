import { Schema, model } from "mongoose";

export const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const IngredientsCollection = model("Ingredient", ingredientSchema);
