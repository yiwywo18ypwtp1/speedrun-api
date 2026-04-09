import { Request, Response } from "express";

import * as transactionService from "../services/transaction.service"


export const createTransaction = async (req: Request, res: Response) => {
    const { amount, type, category } = req.body
    const userId = (req as any).user.id;

    try {
        const result = await transactionService.create({ amount, type, category, userId });
        res.json(result);
    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}