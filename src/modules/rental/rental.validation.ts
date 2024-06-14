import { z } from 'zod';

const bookingValidationSchema = z.object({
  userId: z.string().min(1, { message: 'User Id is required' }),
  bikeId: z.string().min(1, { message: 'Bike Id is required' }),
  startTime: z.date({ required_error: 'Start time is required' }),
  returnTime: z.date({ required_error: 'Return time is required' }),
  totalCost: z.number({ required_error: 'Total cost is required' }),
  isReturned: z.boolean({ required_error: 'Is Returned is required' }),
});

export const bookingValidations = {
  bookingValidationSchema,
};
