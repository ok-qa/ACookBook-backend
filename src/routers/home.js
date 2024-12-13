import express from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getAllAreasController } from "../controllers/home.js";

const router = express.Router();

router.get("/areas", ctrlWrapper(getAllAreasController));

export default router;
