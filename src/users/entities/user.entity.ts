import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty({ example: 'uuid-123', description: 'ID único de Supabase' })
  id!: string;

  @ApiProperty({ example: 'junior@uninorte.edu.co' })
  email!: string;

  @ApiProperty({ example: 'Junior' })
  nombre!: string;

  @ApiProperty({ example: 'Sistemas', required: false })
  apellido!: string;

  @ApiProperty({ example: '2026-03-29T20:00:00Z' })
  createdAt!: Date;
}