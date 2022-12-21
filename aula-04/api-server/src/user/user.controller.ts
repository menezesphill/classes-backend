import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';

// Onde vamos definir os GETS POSTS PUTS DELETES
// DTO - Data Transfer Object

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService) {}

    // http://localhost:3000/user/create
    @Post('create')
    async createNewUser(@Body() data: CreateUserDto) {
        return this.userService.createUser(data)
    }

    @Get('all')
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('find')
    async findUserByEmail(@Body() data: FindUserDto){
        return this.userService.getByEmail(data)
    }

}
