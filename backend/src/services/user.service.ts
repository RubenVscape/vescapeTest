import { randomUUID } from "crypto";
import { UserModel, IUser } from "../models/user.model";
import bcrypt from 'bcryptjs'

export class UserService {
    async createUser(data: IUser) {
        const exist = await UserModel.findOne({ email: data.email});
            if(exist) throw new Error ('User already registered');
            const hashPassword = await bcrypt.hash(data.password, 10);
            const newUser = new UserModel({
                ...data,
                password:hashPassword,
                userId: randomUUID()
            });

            return await newUser.save();
    }

    async getAllUsers(skip:number, limit:number){
        return await UserModel.find().skip(skip).limit(limit).select("-password");
    }
}