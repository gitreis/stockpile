import { SubCategory } from '@prisma/client';

export class SubCategoryEntity implements SubCategory {
  id: string;
  name: string;
  cat_id: string;
}
