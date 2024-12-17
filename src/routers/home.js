import { Router } from "express";
import { getAllIngredientsController } from "../controllers/home.js";

const router = Router();

router.get("/ingredients", getAllIngredientsController);

export default router;
