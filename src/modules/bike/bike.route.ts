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

// get all bikes from db
router.get('/', BikeControllers.getAllBikes);

// update bike into db
router.patch(
  '/:id',
  validateRequest(bikeValidations.updateBikeValidationSchema),
  BikeControllers.updateBike,
);

export const BikeRoutes = router;
