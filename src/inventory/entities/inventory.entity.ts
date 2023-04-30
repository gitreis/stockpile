import { Inventory, Prisma } from '@prisma/client';

export class InventoryEntity implements Inventory {
  id: string;
  owner_id: string;
  product_list: Prisma.JsonValue;
}
