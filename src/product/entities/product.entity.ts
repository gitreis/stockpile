import { Product } from '@prisma/client';

export class ProductEntity implements Product {
  id: string;
  name: string;
  bar_code: string;
  quantity: number;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}
