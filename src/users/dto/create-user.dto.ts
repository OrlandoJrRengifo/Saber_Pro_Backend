import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {
   @ApiProperty({
        description: "User id generado por supabase",
        example: "uuid-123"
    })
  @IsString()
  @IsNotEmpty()
  id!: string; 

  @ApiProperty({
        description: "User email",
        example: "Orlando@gmail.com"
    })
  @IsEmail()
  email!: string;

  @ApiProperty({
        description: "User first name",
        example: "Orlando"
    }   )
  @IsString()
  nombre!: string;

  @ApiProperty({
        description: "User last name",
        example: "Rengifo"
    })
  @IsString()
  apellido!: string;

  @ApiProperty({
    description: 'Career/program name',
    example: 'Ingeniería de Sistemas',
  })
  @IsString()
  @IsNotEmpty()
  carrera!: string;

  @ApiProperty({
    description: 'Número del semestre actual',
    example: 9, 
  })
  @IsInt()
  @Min(1)
  semestre!: number;
}