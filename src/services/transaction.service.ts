import { prisma } from "../db"
import { CreateTransaction } from "../types/transactions"

export const create = async ({ amount, type, category, userId }: CreateTransaction) => {
    const transaction = await prisma.transaction.create({
        data: {
            amount,
            type,
            category,
            userId: userId,
        }
    })

    return {
        created_transaction: {
            transactionId: transaction.id,
            ...transaction,
        }
    }
}