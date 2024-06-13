import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

//* get profile from db
const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getProfileFromDB(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User profile retrieved successfully',
    data: result,
  });
});

//* update profile into db
const updateUserProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.updateProfileIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Profile updated successfully',
    data: result,
  });
});

export const UserControllers = {
  getProfile,
  updateUserProfile,
};
