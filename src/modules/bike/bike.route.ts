import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bikeValidations } from './bike.validation';
import { BikeControllers } from './bike.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

// route for add bike into db
router.post(
  '/',
  auth(USER_ROLE.admin),
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

// delete bike from db
router.delete('/:id', BikeControllers.deleteBike);

export const BikeRoutes = router;
