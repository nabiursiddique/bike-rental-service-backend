import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

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

export const AuthControllers = {
  userSignUp,
};
