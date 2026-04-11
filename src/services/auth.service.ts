import { prisma } from "../db";
import { checkPass, hashPass } from "../middlewares/hashPassword";
import { generate_token } from "../middlewares/JWTAuth";

import { SignupUser, LoginUser } from "../types/auth"


export const signup = async ({ username, password, name }: SignupUser) => {
    const existingUser = await prisma.user.findUnique({
        where: { username },
    });

    if (existingUser) {
        const err = new Error('User already exists') as any;
        err.status = 409;
        throw err;
    }

    const hashedPassword = await hashPass(password);

    const user = await prisma.user.create({
        data: {
            username: username,
            password: hashedPassword,
            name: name,
        },
    });

    return {
        "created_user": {
            "id": user.id,
            "username": user.username,
            "name": user.name,
        },
    }
}

export const login = async ({ username, password }: LoginUser) => {
    const existUser = await prisma.user.findUnique({
        where: {
            username: username,
        },
    })

    if (!existUser) {
        const err = new Error("No User with this username exists") as any;
        err.status = 404;
        throw err;
    }

    await checkPass(password, existUser.password);

    return await generate_token({ id: existUser.id, username: existUser.username, name: existUser.name });
}