import { JsonController, Get, Post, Body, HttpCode, Param, NotFoundError } from 'routing-controllers';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user.model';

const userService = new UserService();

@JsonController("/users")
export default class UserController {
    @HttpCode(201)
    @Post("/create")
    async createUser(@Body() body: IUser){
        const user = await userService.createUser(body);
        return { data: user.userId, message: 'User created'}
    }

    
}
