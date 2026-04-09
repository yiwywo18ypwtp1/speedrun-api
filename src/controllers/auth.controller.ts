import type { Request, Response } from 'express';
import * as authService from '../services/auth.service'

interface SignupBody {
    username: string;
    password: string;
}

export const signup = async (req: Request<SignupBody>, res: Response) => {
    const { username, password } = req.body;

    try {
        const result = await authService.signup({ username, password });
        res.json(result);

    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}