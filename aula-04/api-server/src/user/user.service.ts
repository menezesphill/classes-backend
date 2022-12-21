import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UserService {
    constructor(public readonly prismaService: PrismaService){}

    async createUser(data: CreateUserDto) {
        const user = await this.prismaService.user.create({
            data: {
                email: data.email,
                name: data.name
            }
        });

        return user;
    }

    async getAllUsers() {
        const user = await this.prismaService.user.findMany();
        return user;
    }

    // Pode fazer com o usuário passando o email na própria URL
    // http://localhost:3000/user/email@mail.com

    // Pode passar o usuário no corpo da requisição
    // Body { "email" : "email@mail.com" }
    async getByEmail(data: FindUserDto) {
        const user = await this.prismaService.user.findFirst(
            {where: { email : data.email }}
        )

        if(!user) {
            throw new NotFoundException(`User with email ${data.email} not found!`)
        }

        return user;
    }
}
