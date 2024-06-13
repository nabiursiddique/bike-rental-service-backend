import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

// controller for user signup
const userSignUp = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await AuthServices.userSignUpIntoDB(user);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'User registered successfully',
    data: result,
  });
});

// controller for user login
const userLogin = catchAsync(async (req, res) => {
  const result = await AuthServices.userLoginIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    data: result,
  });
});

export const AuthControllers = {
  userSignUp,
  userLogin,
};
