interface signupSchema {
    username: string;
    password: string;
}

export const signup = async ({ username, password }: signupSchema) => {
    return {
        "created_user": {
            "user": username,
        },
    }
}