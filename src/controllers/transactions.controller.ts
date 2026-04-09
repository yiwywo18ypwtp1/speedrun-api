import { Request, Response } from "express";

import * as transactionService from "../services/transaction.service"
import { UpdateTransaction } from "../types/transactions";


interface Params {
    id: string;
}

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

export const readAllTransactions = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id

        const result = await transactionService.findAll(userId);
        res.json(result);
    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}

export const readOneTransaction = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        const result = await transactionService.findById(id);
        res.json(result);
    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}

export const updateTransaction = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const data = req.body;

        const result = await transactionService.update(id, data);
        res.json(result);

    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}

export const deleteTransaction = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        const result = await transactionService._delete(id);
        res.json(result);

    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}