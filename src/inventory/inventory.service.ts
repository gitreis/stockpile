import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InventoryRepository } from './repositories/invetory.repository';

@Injectable()
export class InventoryService {
  constructor(private readonly repository: InventoryRepository) {}
  create(createInventoryDto: CreateInventoryDto) {
    return this.repository.create(createInventoryDto);
  }

  findAll() {
    return this;
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return this.repository.update(id, updateInventoryDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
