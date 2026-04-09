import bcrypt from "bcrypt"

export const hashPass = async (password: string) => {
    const salt = 10;
    const hashed = bcrypt.hash(password, salt);

    return hashed;
}