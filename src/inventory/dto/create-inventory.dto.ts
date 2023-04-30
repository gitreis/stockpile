import { Prisma } from '@prisma/client';
import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  owner_id: string;

  @IsJSON()
  @IsNotEmpty()
  product_list: Prisma.JsonValue;
}
