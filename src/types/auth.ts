export interface User {
    id: string;
    username: string;
    password: string;
    name: string;
}

export type SignupUser = Omit<User, "id">;

export type LoginUser = Pick<User, "username" | "password">

export type PublicUser = Omit<User, "password">