import express from "express";
import { getAllCategoriesController } from "../controllers/home.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = express.Router();

router.get("/categories", ctrlWrapper(getAllCategoriesController));

export default router;
