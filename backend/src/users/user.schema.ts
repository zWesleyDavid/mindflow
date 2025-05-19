import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true})
    email: string;
    
    @Prop({ required: true })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);