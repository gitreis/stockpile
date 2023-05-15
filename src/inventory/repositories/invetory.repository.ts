import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';
import { InventoryEntity } from '../entities/inventory.entity';

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

  findOne(user_email: string): Promise<InventoryEntity> {
    return this.prisma.inventory.findUnique({
      where: {
        user_email,
      },
    });
  }

  async update(
    user_email: string,
    updateInventoryDto: UpdateInventoryDto,
  ): Promise<InventoryEntity> {
    return this.prisma.inventory.update({
      where: {
        user_email,
      },
      data: updateInventoryDto,
    });
  }

  async remove(user_email: string): Promise<InventoryEntity> {
    return this.prisma.inventory.delete({
      where: {
        user_email,
      },
    });
  }
}
