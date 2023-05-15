import { Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { SubCategoryRepository } from './repositories/subcategory.repository';
import { NotFoundError } from 'src/common/types/NotFoundError';
import { SubCategoryEntity } from './entities/subcategory.entity';

@Injectable()
export class SubCategoryService {
  constructor(private readonly repository: SubCategoryRepository) {}
  create(createSubCategroyDto: CreateSubcategoryDto) {
    return this.repository.create(createSubCategroyDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<SubCategoryEntity> {
    const subcat = await this.repository.findOne(id);
    if (!subcat) {
      throw new NotFoundError('Subcategoria não encontrado.');
    }
    return subcat;
  }

  update(id: string, updateSubCategroyDto: UpdateSubcategoryDto) {
    return this.repository.update(id, updateSubCategroyDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
