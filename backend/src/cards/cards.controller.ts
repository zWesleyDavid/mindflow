import { Controller, Post, Get, Patch, Delete, Param, Body, Request, UseGuards } from '@nestjs/common';
import { CardsService } from './cards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Cards')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) { }

    @Post()
    @Roles('admin', 'user')
    create(@Body() body, @Request() req) {
        return this.cardsService.create({ ...body, userId: req.user.userId });
    }

    @Get('board/:boardId')
    @Roles('admin', 'user')
    findAllByBoard(@Param('boardId') boardId: string, @Request() req) {
        return this.cardsService.findAllByBoard(boardId, req.user.userId);
    }

    @Patch(':id')
    @Roles('admin', 'user')
    update(@Param('id') id: string, @Body() body, @Request() req) {
        return this.cardsService.update(id, req.user.userId, body);
    }

    @Delete(':id')
    @Roles('admin', 'user')
    delete(@Param('id') id: string, @Request() req) {
        return this.cardsService.delete(id, req.user.userId);
    }
}
