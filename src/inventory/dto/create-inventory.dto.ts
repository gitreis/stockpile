import { Prisma } from '@prisma/client';
import { IsEmail, IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  owner_email: string;

  @IsJSON()
  @IsNotEmpty()
  product_list: Prisma.JsonValue;
}
