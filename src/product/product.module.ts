import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaClient } from '@prisma/client';
import { ProductRepository } from './repositories/product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaClient, ProductRepository],
})
export class ProductModule {}
