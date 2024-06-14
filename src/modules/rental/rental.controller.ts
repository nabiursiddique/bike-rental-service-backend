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

const returnRental = catchAsync(async (req: Request, res: Response) => {
  const result = await RentalServices.returnRentalIntoDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike returned successfully',
    data: result,
  });
});

const getAllRentalsOfUser = catchAsync(async (req: Request, res: Response) => {
  const result = await RentalServices.getAllRentalsOfUserFromDB(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rentals retrieved successfully',
    data: result,
  });
});

export const RentalControllers = {
  createRental,
  returnRental,
  getAllRentalsOfUser,
};
