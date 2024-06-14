import { Schema, model } from 'mongoose';
import { TBooking } from './rental.interface';

const bookingSchema = new Schema<TBooking>({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id is required'],
    unique: true,
    ref: 'User',
  },
  bikeId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'Bike',
  },
  startTime: {
    type: Date,
    required: true,
  },
  returnTime: {
    type: Date,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  isReturned: {
    type: Boolean,
    required: true,
  },
});

export const Booking = model<TBooking>('Booking', bookingSchema);
