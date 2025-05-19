import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BoardDocument = Board & Document;

@Schema({ timestamps: true })
export class Board {

    @Prop({ required: true })
    title: string;

    @Prop()
    notes?: string;

    @Prop()
    description?: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
