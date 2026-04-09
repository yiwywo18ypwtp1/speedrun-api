import { Router } from "express";
import * as transactionController from "../controllers/transactions.controller"
import { authMiddleware } from "../middlewares/JWTAuth";


const router = Router();

router.post("/", authMiddleware, transactionController.createTransaction);
router.get("/", authMiddleware, transactionController.readAllTransactions);
router.get("/:id", authMiddleware, transactionController.readOneTransaction);
router.put("/:id", authMiddleware, transactionController.updateTransaction);
router.delete("/:id", authMiddleware, transactionController.deleteTransaction);

export default router;