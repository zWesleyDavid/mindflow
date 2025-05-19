import { Controller, Post, Get, Patch, Delete, Param, Body, Request, UseGuards } from '@nestjs/common';
import { CardsService } from './cards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Cards')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) { }

    @Post()
    create(@Body() body, @Request() req) {
        return this.cardsService.create({ ...body, userId: req.user.userId });
    }

    @Get('board/:boardId')
    findAllByBoard(@Param('boardId') boardId: string, @Request() req) {
        return this.cardsService.findAllByBoard(boardId, req.user.userId);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body, @Request() req) {
        return this.cardsService.update(id, req.user.userId, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Request() req) {
        return this.cardsService.delete(id, req.user.userId);
    }
}
