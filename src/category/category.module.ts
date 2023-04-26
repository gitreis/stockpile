import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryEntity } from './entities/category.entity';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService, CategoryEntity],
})
export class CategoryModule {}
