import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'orlando@gmail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'orlando123' })
  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}