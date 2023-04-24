import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.prisma.product.findMany();
  }

  findOne(id: string): Promise<ProductEntity> {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: string): Promise<ProductEntity> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
