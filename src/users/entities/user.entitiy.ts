import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({
        required: false,
        example: 1,
        description: "Identificador unico"
    })
    id?: number

    @ApiProperty({
        example: "Stephano",
        description: "Nombre del user"
    })
    nombre: string

    @ApiProperty({
        example: "Iucciolino",
        description: "Apellido paterno del user"
    })
    apellidoPaterno: string

    @ApiProperty({
        example: "Guillen",
        description: "Apellido materno del user"
    })
    apellidoMaterno: string

    @ApiProperty({
        example: "stephano@accenture.com",
        description: "Email del user"
    })
    email: string

    @ApiProperty({
        example: "20/05/1992",
        description: "Fecha de nacimiento del user"
    })
    fechaNacimiento: string

    @ApiProperty({
        example: 30,
        description: "Edad del user"
    })
    edad: number

    @ApiProperty({
        example: false,
        description: "Baja logica"
    })
    activo: boolean
}