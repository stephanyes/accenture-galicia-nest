import { ApiProperty } from '@nestjs/swagger';
import {IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        example: "Stephano",
        description: "Nombre del user"
    })
    @IsString()
    @Length(1, 150)
    @IsNotEmpty()
    nombre: string

    @ApiProperty({
        example: "Iucciolino",
        description: "Apellido paterno del user"
    })
    @IsString()
    @Length(1, 150)
    @IsNotEmpty()
    apellidoPaterno: string

    @ApiProperty({
        example: "Guillen",
        description: "Apellido materno del user"
    })
    @IsString()
    @Length(1, 150)
    @IsNotEmpty()
    apellidoMaterno: string

    @ApiProperty({
        example: "stephano@accenture.com",
        description: "Email del user"
    })
    @IsEmail()
    @Length(10, 250)
    @IsNotEmpty()
    email: string

    @ApiProperty({
        example: "1992-05-20",
        description: "Fecha de nacimiento del user"
    })
    @IsNotEmpty()
    fechaNacimiento: string

    @ApiProperty({
        example: 30,
        description: "Edad del user"
    })
    @IsNumber()
    @IsNotEmpty()
    edad: number
}



export class UpdateUserDto {
    @ApiProperty({
        example: "Stephano",
        description: "Nombre del user"
    })
    @IsString()
    @Length(1, 150)
    @IsOptional()
    nombre?: string

    @ApiProperty({
        example: "Iucciolino",
        description: "Apellido paterno del user"
    })
    @IsString()
    @Length(1, 150)
    @IsOptional()
    apellidoPaterno?: string

    @ApiProperty({
        example: "Guillen",
        description: "Apellido materno del user"
    })
    @IsString()
    @Length(1, 150)
    @IsOptional()
    apellidoMaterno?: string

    @ApiProperty({
        example: "stephano@accenture.com",
        description: "Email del user"
    })
    @IsEmail()
    @Length(10, 250)
    @IsNotEmpty()
    @IsOptional()
    email?: string

    @ApiProperty({
        example: "0001-01-01",
        description: "Fecha de nacimiento del user"
    })
    @IsNotEmpty()
    @IsOptional()
    fechaNacimiento?: string

    @ApiProperty({
        example: 30,
        description: "Edad del user"
    })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    edad?: number
}