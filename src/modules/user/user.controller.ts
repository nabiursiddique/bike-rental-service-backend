import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

//* get user profile from db
const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getUserProfileFromDB(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User profile retrieved successfully',
    data: result,
  });
});

export const UserControllers = {
  getUserProfile,
};
