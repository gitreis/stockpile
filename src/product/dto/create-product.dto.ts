import { CatSub } from '@prisma/client';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  bar_code: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  category: CatSub;
}
