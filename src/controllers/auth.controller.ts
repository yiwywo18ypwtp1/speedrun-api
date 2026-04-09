import type { Request, Response } from 'express';
import * as authService from '../services/auth.service'
import e from 'express';

interface SignupBody {
    username: string;
    password: string;
};

interface LoginBody {
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

export const login = async (req: Request<LoginBody>, res: Response) => {
    const { username, password } = req.body;

    try {
        const result = await authService.login({ username, password });
        res.json(result);

    } catch (err: any) {
        res.status(err.status || 500).json({
            message: err.message,
        });
    }
}

export const me = async (req: Request, res: Response) => {
    const user = (req as any).user

    res.json({
        user,
    })
}