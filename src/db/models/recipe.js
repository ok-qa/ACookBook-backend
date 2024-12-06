import { Schema, model } from "mongoose";

export const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    areaId: {
      type: Schema.Types.ObjectId,
      ref: "Area",
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
    img: {
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
      type: [
        {
          id: {
            type: Schema.Types.ObjectId,
            ref: "Ingredient",
            required: true,
          },
          measure: {
            type: String,
            required: true,
          },
        },
      ],
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
          return value === undefined || Number.isFinite(value);
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

export const RecipesCollection = model("Recipe", recipeSchema);
