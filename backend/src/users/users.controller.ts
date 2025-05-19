import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('register')
    async register(@Body() body: { name: string; email: string; password: string }) {
        return this.usersService.create(body.name, body.email, body.password);
    }
}
