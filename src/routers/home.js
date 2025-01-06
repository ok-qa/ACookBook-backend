import express from "express";
import {
  getAllCategoriesController,
  getAllAreasController,
  getAllIngredientsController,
} from "../controllers/home.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = express.Router();

router.get("/areas", ctrlWrapper(getAllAreasController));
router.get("/categories", ctrlWrapper(getAllCategoriesController));
router.get("/ingredients", getAllIngredientsController);

export default router;
