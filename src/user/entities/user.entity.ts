import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  created_at: Date;
  name: string;
  last_name: string;
  email: string;
  admin: boolean;
  active: boolean;
}
