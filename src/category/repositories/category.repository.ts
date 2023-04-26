import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async findAll(): Promise<CategoryEntity[]> {
    return await this.prisma.product.findMany();
  }

  findOne(id: string): Promise<CategoryEntity> {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryEntity> {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
  }

  async remove(id: string): Promise<CategoryEntity> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
