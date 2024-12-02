import { Schema, model } from "mongoose";

export const categorySchema = new Schema(
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

export const categoriesCollection = model("Category", categorySchema);
