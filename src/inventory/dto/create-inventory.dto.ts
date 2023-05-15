import { User } from '@prisma/client';
import { IsArray, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateInventoryDto {
  @IsEmail()
  @IsNotEmpty()
  user_email: string;

  @IsArray()
  product_list?: string[];
}
