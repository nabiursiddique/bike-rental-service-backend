import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bikeValidations } from './bike.validation';
import { BikeControllers } from './bike.controller';

const router = express.Router();

// route for add bike into db
router.post(
  '/',
  validateRequest(bikeValidations.createBikeValidationSchema),
  BikeControllers.createBike,
);

export const BikeRoutes = router;
