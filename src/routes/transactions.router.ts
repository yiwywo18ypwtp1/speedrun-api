import { Router } from "express";
import * as transactionController from "../controllers/transactions.controller"
import { authMiddleware } from "../middlewares/JWTAuth";


const router = Router();

router.post("/", authMiddleware, transactionController.createTransaction);

export default router;