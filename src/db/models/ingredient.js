import { Schema, model } from "mongoose";

export const ingredientSchema = new Schema(
  {
    oldId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const IngredientsCollection = model("Ingredient", ingredientSchema);
