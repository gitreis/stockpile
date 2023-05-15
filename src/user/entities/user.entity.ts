import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  last_name: string;
  email: string;
  admin: boolean;
  active: boolean;
  created_at: Date;
}
