import { Inventory, Prisma } from '@prisma/client';

export class InventoryEntity implements Inventory {
  user_email: string;
  product_list: string[];
}
