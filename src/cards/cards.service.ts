import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Card, CardDocument } from './card.schema';

@Injectable()
export class CardsService {
    constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) { }

    async create(data: Partial<Card>): Promise<Card> {
        const card = new this.cardModel(data);
        return card.save();
    }

    async findAllByBoard(boardId: string, userId: string): Promise<Card[]> {
        return this.cardModel.find({ boardId, userId });
    }

    async update(cardId: string, userId: string, data: Partial<Card>): Promise<Card> {
        const card = await this.cardModel.findOneAndUpdate(
            { _id: cardId, userId },
            data,
            { new: true }
        );
        if (!card) throw new NotFoundException('Card não encontrado.');
        return card;
    }

    async delete(cardId: string, userId: string): Promise<void> {
        const result = await this.cardModel.deleteOne({ _id: cardId, userId });
        if (result.deletedCount === 0) throw new NotFoundException('Card não encontrado.');
    }
}
