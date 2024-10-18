import { Schema, model } from "mongoose";

export const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "areas",
    },
    description: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
    },
    preview: {
      type: String,
    },
    youtube: {
      type: String,
    },
    tags: {
      type: String,
      required: false,
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "ingredients",
      },
    ],
    // rating: {
    //   type: String,
    //   required: false,
    // },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const RecipesCollection = model("recipes", recipeSchema);
