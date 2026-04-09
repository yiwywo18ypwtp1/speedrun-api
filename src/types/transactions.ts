export type Transaction = {
    id: string;
    amount: number;
    type: "income" | "expense";
    category: string;
    userId: string;
}

export type CreateTransaction = Omit<Transaction, "id">

export type UpdateTransaction = Pick<Transaction, "amount" | "type" | "category">

export type TransactionId = string