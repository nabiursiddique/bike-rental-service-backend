import { Request } from 'express';
import { Bike } from '../bike/bike.model';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';
import { Rental } from './rental.model';
import mongoose from 'mongoose';

//* create rental
const createRentalIntoDB = async (req: Request) => {
  // getting data from the req body
  const rentalInfo = req.body;

  // checking if the bike is in db or not
  const isBikeExists = await Bike.findById(rentalInfo.bikeId);
  if (!isBikeExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Bike not found');
  }

  // checking if the bike is available or not
  const isBikeAvailable = isBikeExists.isAvailable;
  if (!isBikeAvailable) {
    throw new AppError(httpStatus.FORBIDDEN, 'Bike is already rented');
  }

  // getting the user id, email and role from auth
  const authUser = req.user;

  // setting user info into rentalInfo
  rentalInfo.userId = authUser.userId;

  // Because here more than one write operation is happening we will use session
  // start transaction
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // set bike not available (write operation)
    const setBikeNotAvailable = await Bike.findByIdAndUpdate(
      rentalInfo.bikeId,
      {
        isAvailable: false,
      },
      session,
    );
    if (!setBikeNotAvailable) {
      throw new AppError(
        httpStatus.NOT_MODIFIED,
        'Error updating bike availability',
      );
    }
    // create rental (write operation)
    const result = await Rental.create([rentalInfo], { session: session });
    if (!result) {
      throw new AppError(httpStatus.NOT_IMPLEMENTED, 'Error creating rental');
    }

    // commit transaction
    await session.commitTransaction();
    // end session
    await session.endSession();

    return result;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.NOT_IMPLEMENTED, 'Error creating rental');
  }
};

export const RentalServices = {
  createRentalIntoDB,
};
