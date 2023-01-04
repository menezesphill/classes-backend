import { Injectable, NotFoundException } from '@nestjs/common';
import { PasswordService } from 'src/auth/services/password.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { isPassDto } from './dto/is-pass.dto';

@Injectable()
export class UserService {
    constructor(public readonly prismaService: PrismaService, private passwordService: PasswordService){}

    async createUser(data: CreateUserDto) {

        const encryptedPassword = await this.passwordService.hashPassword(
            data.password,
        );

        const { password , ...user } = await this.prismaService.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: encryptedPassword
            }
        });

        return user;
    }

    async checkPassword(data: isPassDto) {
        const user = await this.prismaService.user.findFirst(
            {where: { email : data.email }}
        )

        if(!user) {
            throw new NotFoundException(`User with email ${data.email} not found!`)
        }

        const isPass = await this.passwordService.comparePassword(
            data.password, // Senha que o usuário insere
            user.password  // Senha salva no nosso servidor
        )

        return isPass // Se as senhas são compativeis, retorna TRUE, do contrário retorna FALSE
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
