import { Controller, Post, Get, Delete, Body, Param, Request, UseGuards, Patch } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('boards')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Post()
    create(@Body() body: { title: string; description?: string }, @Request() req) {
        return this.boardsService.create(body.title, req.user.userId, body.description);
    }

    @Get()
    findAll(@Request() req) {
        return this.boardsService.findAllByUser(req.user.userId);
    }

    @Patch(':id/notes')
    updateNotes(@Param('id') id: string, @Body('notes') notes: string, @Request() req) {
        return this.boardsService.updateNotes(id, req.user.userId, notes);
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Request() req) {
        return this.boardsService.delete(id, req.user.userId);
    }
}
