import { z } from 'zod';

const createBikeValidationSchema = z.object({
  name: z.string().trim().min(1, { message: 'Bike model name is required' }),
  description: z.string().min(1, { message: 'Bike description is required' }),
  pricePerHour: z
    .number()
    .min(0, { message: 'Bike price per hour is required' }),
  isAvailable: z.boolean().optional(),
  cc: z.number().min(1, { message: 'Bike cc is required' }),
  year: z
    .number()
    .int()
    .min(1900, { message: 'Bike year is required and should be a valid year' }),
  model: z.string().min(1, { message: 'Bike model is required' }),
  brand: z.string().min(1, { message: 'Bike brand is required' }),
});

export const bikeValidations = {
  createBikeValidationSchema,
};
