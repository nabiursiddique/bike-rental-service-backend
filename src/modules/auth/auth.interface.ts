/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { USER_ROLE } from '../user/user.constant';

type UserRole = 'admin' | 'user';

export interface TUserSignUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

export type TUserLogIn = {
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;
