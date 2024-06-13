import config from '../../config';
import bcrypt from 'bcrypt';
import { User } from '../user/user.model';
import { TUserLogIn, TUserSignUp } from './auth.interface';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

//* user sign up
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

//* user login
const userLoginIntoDB = async (payload: TUserLogIn) => {
  // checking if the user exists
  const isUserExists = await User.findOne({ email: payload?.email });
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // checking if the password is correct or not
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    isUserExists.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password is incorrect');
  }
};

export const AuthServices = {
  userSignUpIntoDB,
  userLoginIntoDB,
};
