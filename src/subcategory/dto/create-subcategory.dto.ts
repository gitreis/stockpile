import { Category } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: Category;
}
