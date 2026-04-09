import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const ALGORITHM = "HS256"
const secretKey = process.env.JWT_SECRET_KEY || "secret"

interface User {
    username: string;
}

export const generate_token = async (data: User) => {
    const token = jwt.sign(
        data,
        secretKey,
        {
            algorithm: ALGORITHM,
            expiresIn: "1h",
        }
    )

    return token;
}

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" })
    }

    const token = authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: "Invalid token format" })
    }

    try {
        const decoded = jwt.verify(token, secretKey)

            ; (req as any).user = decoded

        next()
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" })
    }
}