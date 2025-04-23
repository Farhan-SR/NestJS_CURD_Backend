import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_MODEL, Userdocument } from 'src/schemas/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<Userdocument>,
  ) {
    console.log(this.userModel);
  }

  async create(createuserdto) {
    try {
      const user = await this.userModel.create(createuserdto);
      console.log(user); 
      return user;
    } catch (error) {
      return error;
    } 
  }

  async findAll() {
    const users = await this.userModel.find();
    console.log('get all');
    return users;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user ;
  }

  async update(id: string, updateuserdto) {
    const updateduser = await this.userModel.findByIdAndUpdate(
      id,
      updateuserdto,
      { new: true },
    );
    if (!updateduser) {
      throw new NotFoundException('user not found');
    }
    return updateduser;
  }

  async remove(id: string) {
    const deleteduser = await this.userModel.findByIdAndDelete(id);
    if (!deleteduser) {
      throw new NotFoundException('user not found');
    }
    return {
      _id: id,
    };
  }
}
