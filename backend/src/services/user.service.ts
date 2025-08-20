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

    async getAllUsers(skip:number = 1, limit:number = 5){
        return await UserModel.find({}, {"_id":0, "password":0}).skip(skip).limit(limit).lean();
    }
}