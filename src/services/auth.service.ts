import { prisma } from "../db";
import { hashPass } from "../middlewares/hashPassword";

interface signupSchema {
    username: string;
    password: string;
}

export const signup = async ({ username, password }: signupSchema) => {
    const existingUser = await prisma.user.findUnique({
        where: { username },
    });

    if (existingUser) {
        throw { message: 'User already exists', status: 409 };
    }

    const hashedPassword = await hashPass(password);

    const user = await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword,
        },
    });

    return {
        "created_user": {
            "user": user.username,
        },
    }
}