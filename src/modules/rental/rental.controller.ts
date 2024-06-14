import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { RentalServices } from './rental.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createRental = catchAsync(async (req: Request, res: Response) => {
  const result = await RentalServices.createRentalIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rental created successfully',
    data: result,
  });
});

export const RentalControllers = {
  createRental,
};
