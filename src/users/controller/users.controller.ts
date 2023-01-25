import { Controller, Param } from '@nestjs/common';
import { Get, Post, Put, Delete, Patch } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { UsersService } from '../service/users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger/dist';
import { User } from '../entities/user.entitiy';
import { Body } from '@nestjs/common/decorators';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    @ApiOperation({
        summary: "Obtiene todos los Users registrados en memoria"
    })
    @ApiResponse({
        status: 200,
        type: User,
        description: "Retorna listado de usuarios",
        isArray: true
    })
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }


    @Get(':id')
    @ApiOperation({
        summary: "Obtiene user by id"
    })
    @ApiResponse({
        status: 200,
        type: User,
        description: "Retorna user by id",
        isArray: false
    })
    async findOne(@Param('id') id: number): Promise<User | null> {
        return this.userService.findOne(+id)
    }


    @Post()
    @ApiOperation({
        summary: 'Crea user en memoria'
    })
    @ApiBody({
        type: CreateUserDto,
        required: true
    })
    @ApiResponse({
        status: 201,
        type: User,
        description: "Retorna User creado",
        isArray: false
    })
    async create(@Body() payload: CreateUserDto): Promise<User> {
        return this.userService.create(payload);
    }

    
    @Put(':id')
    @ApiOperation({
        summary: 'Update de user by id'
    })
    @ApiBody({
        type: UpdateUserDto,
        required: true
    })
    @ApiResponse({
        status: 204,
        type: User,
        description: 'Retorna User modificado',
        isArray: false
    })
    async update(@Param('id') id: number, @Body() payload: UpdateUserDto): Promise<User> {
        return this.userService.update(+id, payload);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Elimina user by id'
    })
    @ApiResponse({
        status: 204, // 204 = 'resource deleted succesfully'
        type: User,
        description: 'Retorna booleano',
        isArray: false
    })
    async remove(@Param('id') id: number): Promise<boolean> {
        return this.userService.remove(+id);
    }


    @Patch(':id')
    @ApiOperation({
        summary: 'Modifica propiedad `activo` del user'
    })
    @ApiResponse({
        status: 204,
        type: User,
        description: 'Retorna usuario alterado',
        isArray: false
    })
    async logicRemove(@Param('id') id: number): Promise<User> {
        return this.userService.logicRemove(+id);
    }
}
