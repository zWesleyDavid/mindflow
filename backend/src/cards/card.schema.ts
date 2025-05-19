import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CardDocument = Card & Document;

@Schema({ timestamps: true })
export class Card {
    
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop({ required: true })
    category: string;

    @Prop({ enum: ['low', 'medium', 'high'], required: true })
    priority: 'low' | 'medium' | 'high';

    @Prop({ enum: ['to_study', 'studying', 'reviewed'], required: true })
    status: 'to_study' | 'studying' | 'reviewed';

    @Prop()
    deadline?: Date;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Board', required: true })
    boardId: Types.ObjectId;
}

export const CardSchema = SchemaFactory.createForClass(Card);
