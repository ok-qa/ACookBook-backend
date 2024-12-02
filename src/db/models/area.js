import { Schema, model } from "mongoose";

export const areaSchema = new Schema(
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

export const areasCollection = model("Area", areaSchema);
