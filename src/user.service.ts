// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
// create new user
  async createUser(firstName: string, lastName: string, email: string, password: string): Promise<User> {
    const newUser = new this.userModel({ firstName, lastName, email, password });
    return newUser.save();
  }
// get all users

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
    }
// Get User By Id

    async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();

    
}
// Deleted by ID

async deleteById(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
    
}
// updated by ID
async updateById(id: string, updateData: any): Promise<User> {
    const updateDataUser =  this.userModel.findByIdAndUpdate(id, updateData).exec();
    return updateDataUser;
}

}