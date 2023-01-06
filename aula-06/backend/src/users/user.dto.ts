import { Roles } from '@prisma/client';

export class UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  roles: Roles[];
}
