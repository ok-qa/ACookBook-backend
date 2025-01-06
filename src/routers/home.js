import express from "express";
import {
  getAllCategoriesController,
  getAllAreasController,
} from "../controllers/home.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = express.Router();

router.get("/categories", ctrlWrapper(getAllCategoriesController));
router.get("/areas", ctrlWrapper(getAllAreasController));

export default router;
