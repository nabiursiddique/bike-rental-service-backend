import config from '../../config';
import { TUserSignUp } from './user.interface';
import bcrypt from 'bcrypt';
import { User } from './user.model';

const userSignUpIntoDB = async (payload: TUserSignUp) => {
  // converting the plain password into hash password
  const hashPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds),
  );
  payload.password = hashPassword;
  const result = await User.create(payload);
  const resultWithoutPassword = User.removePassword(result);
  return resultWithoutPassword;
};

export const UserServices = {
  userSignUpIntoDB,
};
