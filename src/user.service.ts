// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
// store
  async store(firstName: string, lastName: string, email: string, password: string): Promise<User> {
    const newUser = new this.userModel({ firstName, lastName, email, password });
    return newUser.save();
  }
// index

  async index(): Promise<User[]> {
    return this.userModel.find().exec();
    }
// show
    async show(id: string): Promise<User> {
    return this.userModel.findById(id).exec();

    
}
// destroy 

async destroy(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
    
}
// edit
async edit(id: string, updateData: any): Promise<User> {
    const updateDataUser =  this.userModel.findByIdAndUpdate(id, updateData).exec();
    return updateDataUser;
}

}