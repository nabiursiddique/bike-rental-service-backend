import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { BikeServices } from './bike.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createBike: RequestHandler = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike added successfully',
    data: result,
  });
});

export const BikeControllers = {
  createBike,
};
