import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  @ApiProperty({ example: 'Apple', description: 'Name of the brand' })
  name: string;
}
