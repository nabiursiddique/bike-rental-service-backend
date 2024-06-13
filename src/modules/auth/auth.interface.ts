/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from '../user/user.constant';

type UserRole = 'admin' | 'user';

export interface TUserSignUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: UserRole;
}

// extend on user model
export interface UserModel extends Model<TUserSignUp> {
  removePassword(payload: any): Partial<TUserSignUp>;
}

export type TUserRole = keyof typeof USER_ROLE;
