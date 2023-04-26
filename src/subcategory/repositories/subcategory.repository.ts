import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubcategoryDto } from '../dto/create-subcategory.dto';
import { SubCategoryEntity } from '../entities/subcategory.entity';
import { UpdateSubcategoryDto } from '../dto/update-subcategory.dto';

@Injectable()
export class SubCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createSubCategoryDto: CreateSubcategoryDto,
  ): Promise<SubCategoryEntity> {
    return this.prisma.subCategory.create({
      data: createSubCategoryDto,
    });
  }

  async findAll(): Promise<SubCategoryEntity[]> {
    return await this.prisma.subCategory.findMany();
  }

  findOne(id: string): Promise<SubCategoryEntity> {
    return this.prisma.subCategory.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateProductDto: UpdateSubcategoryDto,
  ): Promise<SubCategoryEntity> {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: string): Promise<SubCategoryEntity> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
