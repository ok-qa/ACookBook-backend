import express from "express";
import { getAllRecipesController } from "../controllers/home.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = express.Router();

router.get("/recipes", ctrlWrapper(getAllRecipesController));

export default router;
