import { prisma } from "../db";
import { checkPass, hashPass } from "../middlewares/hashPassword";
import { generate_token } from "../middlewares/JWTAuth";

import { SignupUser, LoginUser } from "../types/auth"


export const signup = async ({ username, password, name }: SignupUser) => {
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
            name: name,
        },
    });

    return {
        "created_user": {
            "id": user.id,
            "userame": user.username,
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

    if (!existUser) throw { message: "Invalid login", status: 404 }

    await checkPass(password, existUser.password);

    return await generate_token({ id: existUser.id, username: existUser.username, name: existUser.name });
}