import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { BikeServices } from './bike.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

//* create bike into db
const createBike: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike added successfully',
    data: result,
  });
});

//* get all bikes from db
const getAllBikes: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bikes retrieved successfully',
    data: result,
  });
});

export const BikeControllers = {
  createBike,
  getAllBikes,
};
