import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { RentalValidations } from './rental.validation';
import { RentalControllers } from './rental.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(RentalValidations.rentalValidationSchema),
  RentalControllers.createRental,
);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  RentalControllers.getAllRentalsOfUser,
);

export const RentalRoutes = router;
