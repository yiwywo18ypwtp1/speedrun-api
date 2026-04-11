import 'dotenv/config'

import express from "express"
import { Request, Response, NextFunction } from 'express';

import authRouter from "./routes/auth.router";
import transactionsRouter from "./routes/transactions.router"


const app = express();
const PORT = 5001;

app.use(express.json());
app.use("/auth", authRouter);
app.use("/transactions", transactionsRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.get("/", (req, res) => {
    res.status(200).json("i am working");
});

app.listen(PORT, () => {
    console.log(`Listening ${PORT}...`)
})
