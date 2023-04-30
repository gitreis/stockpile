import { PrismaService } from 'src/prisma/prisma.service';
import { InventoryEntity } from '../entities/inventory.entity';
import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createInventorytDto: CreateInventoryDto,
  ): Promise<InventoryEntity> {
    return this.prisma.inventory.create({
      data: createInventorytDto,
    });
  }

  async findAll(): Promise<InventoryEntity[]> {
    return await this.prisma.inventory.findMany();
  }

  findOne(id: string): Promise<InventoryEntity> {
    return this.prisma.inventory.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateInventoryDto: UpdateInventoryDto,
  ): Promise<InventoryEntity> {
    return this.prisma.inventory.update({
      where: {
        id,
      },
      data: updateInventoryDto,
    });
  }

  async remove(id: string): Promise<InventoryEntity> {
    return this.prisma.inventory.delete({
      where: {
        id,
      },
    });
  }
}
