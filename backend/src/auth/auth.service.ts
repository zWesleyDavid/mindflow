import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async login(email: string, password: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Email ou senha inválidos.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Email ou senha inválidos.');
        }

        const payload = { sub: user._id, email: user.email };
        const token = this.jwtService.sign(payload);

        return { access_token: token };
    }
}
