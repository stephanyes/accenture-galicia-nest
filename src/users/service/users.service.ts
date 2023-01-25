import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { User } from '../entities/user.entitiy';
@Injectable()
export class UsersService {

    private count: number = 1;
    private users: User[] = [
        {
            id: 1,
            nombre: "Stephano",
            apellidoMaterno: "Guillen",
            apellidoPaterno: "Iucciolino",
            edad: 30,
            email: "stephano.iucciolino@accenture.com",
            fechaNacimiento: "1992-05-20",
            activo: false
        }
    ];

    async findOne(id: number): Promise<User>{
        const user = this.users.find((user) => user.id === id)
        return user
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async create(data: CreateUserDto) {
        this.count++;
        const newUser = {
            id: this.count,
            activo: false,
            ...data
        }

        this.users.push(newUser);
        return newUser;
    }

    async update(id: number, changes: UpdateUserDto): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return
        }

        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = {
            ...user,
            ...changes
        };

        return this.users[index];
    }

    async remove(id: number): Promise<boolean> {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);
        return true;
    }

    async logicRemove(id: number): Promise<User> {
        let user = this.users.find((user) => user.id === id);
        if (!user) {
            return
        }
        user.activo = true;
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = {
            ...user
        }

        return user;
    }

}
