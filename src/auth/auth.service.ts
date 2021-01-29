import { Injectable } from '@nestjs/common';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from './dto/accesstoken';
import { PrismaService } from 'src/prisma/prisma.service';
// import { User } from 'src/prisma-typegraphql';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prismaService: PrismaService,
    ) {}

    async validateUser(email: string, plainTextPassword: string): Promise<any> {
        const user = await this.prismaService.user.findFirst({ where: { email }});
        if (user && verify(user.password, plainTextPassword)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any): Promise<AccessToken> {
        const payload = {
            email: user.email,
            sub: user.id,
        };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
