import { Schema, model } from "mongoose";

const recipeIngredientsSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: "ingredients",
      required: true,
    },
    measure: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

export const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "categories",
      },
    ],
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
    tags: [
      {
        type: String,
        required: false,
      },
    ],
    ingredients: {
      type: [recipeIngredientsSchema],
      required: true,
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Ingredients must contain at least one item.",
      },
    },
    rating: {
      type: Number,
      required: false,
      min: 0,
      max: 5,
      validate: {
        validator: function (value) {
          return value === undefined || Number.isFinite();
        },
        message: "Rating must be a number between 0 and 5",
      },
    },
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
