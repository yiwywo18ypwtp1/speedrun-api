export type Transaction = {
    id: string;
    amount: number;
    type: "income" | "expence";
    category: string;
    userId: string;
}