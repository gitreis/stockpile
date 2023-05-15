import { Module } from '@nestjs/common';
import { SubCategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubCategoryRepository } from './repositories/subcategory.repository';

@Module({
  controllers: [SubcategoryController],
  providers: [SubCategoryService, PrismaService, SubCategoryRepository],
})
export class SubcategoryModule {}
