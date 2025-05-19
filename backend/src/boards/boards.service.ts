import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Board, BoardDocument } from './board.schema';

@Injectable()
export class BoardsService {
    constructor(@InjectModel(Board.name) private boardModel: Model<BoardDocument>) { }

    async create(title: string, userId: string): Promise<Board> {
        const board = new this.boardModel({ title, userId });
        return board.save();
    }

    async findAllByUser(userId: string): Promise<Board[]> {
        return this.boardModel.find({ userId });
    }

    async updateNotes(boardId: string, userId: string, notes: string): Promise<Board> {
        const board = await this.boardModel.findOne({ _id: boardId, userId });
        if (!board) throw new NotFoundException('Quadro não encontrado.');

        board.notes = notes;
        return board.save();
    }

    async delete(boardId: string, userId: string): Promise<void> {
        const result = await this.boardModel.deleteOne({ _id: boardId, userId });
        if (result.deletedCount === 0) throw new NotFoundException('Quadro não encontrado.');
    }
}
