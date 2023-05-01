import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { InventoryEntity } from '../entities/inventory.entity';
import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class InventoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventorytDto: CreateInventoryDto): Promise<InventoryEntity> {
    const { owner_email } = createInventorytDto;
    const user = await this.prisma.user.findUnique({
      where: {
        email: owner_email
      },
    });

    if(!user) {
      throw new NotFoundError()
    }

    const data: Prisma.InventoryCreateInput {}
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
