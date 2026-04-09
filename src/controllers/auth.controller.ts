import type { Request, Response } from 'express';
import * as authService from '../services/auth.service'

interface SignupBody {
    username: string;
    password: string;
}

export const signup = async (req: Request<SignupBody>, res: Response) => {
    const { username, password } = req.body;

    res.json(await authService.signup({ username, password }));
}