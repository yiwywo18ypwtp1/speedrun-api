import { prisma } from "../db"
import { CreateTransaction, TransactionId, UpdateTransaction } from "../types/transactions"

export const create = async ({ amount, type, category, userId }: CreateTransaction) => {
    const transaction = await prisma.transaction.create({
        data: {
            amount,
            type,
            category,
            userId: userId,
        }
    })

    return transaction;
}

export const findAll = async (id: TransactionId) => {
    const transactions = await prisma.transaction.findMany({
        where: { userId: id },
    })

    return transactions;
}

export const findById = async (id: TransactionId) => {
    const transaction = await prisma.transaction.findUnique({
        where: { id: id },
    })

    if (!transaction) {
        throw { message: "Transaction not found", status: 404 }
    }

    return transaction;
}

export const update = async (id: TransactionId, data: UpdateTransaction) => {
    const transaction = await prisma.transaction.update({
        where: { id: id },
        data: data,
    })

    if (!transaction) {
        throw { message: "Transaction not found", status: 404 }
    }

    return transaction;
}

export const _delete = async (id: TransactionId) => {
    const existing = await prisma.transaction.findUnique({
        where: { id },
    })

    if (!existing) {
        throw { message: "Transaction not found", status: 404 }
    }

    await prisma.transaction.delete({
        where: { id },
    })

    return { message: "Transaction deleted" }
}
