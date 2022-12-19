import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(public readonly prismaService: PrismaService){}

    async createUser(data: CreateUser) {
        const user = await this.prismaService.user.create({
            data: {
                email: data.email,
                name: data.name
            }
        });

        return user
    }
}
