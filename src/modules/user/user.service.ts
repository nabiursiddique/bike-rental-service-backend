/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request } from 'express';
import { User } from './user.model';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

//* get user profile from db
const getUserProfileFromDB = async (req: Request) => {
  // getting the user from req, we have set user in req in auth from jwt payload
  const user = req.user;

  // now we will find the user in db using email
  const result = await User.findOne({ email: user.email });

  // throwing error if we don't find the user
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // removing the password,createdAt,updatedAt field in response
  const removeFields = result.toObject();
  const { password, ...remainingData } = removeFields;

  return remainingData;
};

export const userServices = {
  getUserProfileFromDB,
};
