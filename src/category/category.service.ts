import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.repository.create(createCategoryDto);
  }

  findAll() {
    return this.repository.findAll;
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.repository.update(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
