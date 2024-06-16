import { Request, Response } from "express";
import UserService from "../services/UserService";

export interface RegisterUserType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface RegisterUser extends Request {
    body: RegisterUserType;
}

export class AuthController {
    userService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
    async register(req: RegisterUser, res: Response) {
        const { firstName, lastName, email, password } = req.body;
        await this.userService.createUser({
            firstName,
            lastName,
            email,
            password,
        });
        return res.status(201).json({ firstName, lastName, email });
    }
}
