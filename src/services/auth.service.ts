import { prisma } from "../db";
import { checkPass, hashPass } from "../middlewares/hashPassword";
import { generate_token } from "../middlewares/JWTAuth";

interface signupSchema {
    username: string;
    password: string;
}

interface LoginSchema {
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

export const login = async ({ username, password }: LoginSchema) => {
    const existUser = await prisma.user.findUnique({
        where: {
            username: username,
        },
    })

    if (!existUser) throw { message: "Invalid login", status: 404 }

    await checkPass(password, existUser.password);

    return await generate_token({ username: existUser.username });
}