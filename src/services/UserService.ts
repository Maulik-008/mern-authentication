import { Repository } from "typeorm";
import { RegisterUserType } from "../controllers/AuthController";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

class UserService {
    constructor(private userRepository: Repository<User>) {}

    async createUser({
        firstName,
        lastName,
        email,
        password,
    }: RegisterUserType) {
        await AppDataSource.initialize();

        return await this.userRepository.save({
            firstName,
            lastName,
            email,
            password,
        });
    }
}

export default UserService;
