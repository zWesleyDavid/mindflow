import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(name: string, email: string, password: string): Promise<User> {
        const existing = await this.userModel.findOne({ email });
        if (existing) {
            throw new ConflictException('Email já cadastrado.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({ name, email, password: hashedPassword });
        return user.save();
    }

    async findByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email });
    }

    async findById(id: string): Promise<User> {
        const user = await this.userModel.findById(id);
        if (!user) throw new NotFoundException('Usuário não encontrado.');
        return user;
    }
}
