import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';
export class SignUpDto {
    @ApiProperty({ description: 'Correo electrónico del usuario' })
  @IsEmail()
  email!: string;

  @ApiProperty({ description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiProperty({ description: 'Nombre del usuario' })
  @IsString()
  nombre!: string;

  @ApiProperty({ description: 'Apellido del usuario' })
  @IsString()
  apellido!: string;

  @ApiProperty({ description: 'Carrera del usuario' })
  @IsString()
  carrera!: string;

  @ApiProperty({ description: 'Semestre del usuario' })
  @IsInt()
@Min(1)
  semestre!: number;
}