import { OtpSchema } from "@/validators/otp.schema";
import { ResetpasswordSchema } from "@/validators/reset-password.schema";
import { postDataAuth } from "../client";
import { ENDPOINTS } from "../endpoints";

export const signUpAdmin = async (userData: {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  role_id: string;
}) => {
  return postDataAuth(ENDPOINTS.AUTH.REGISTER, userData);
};

export const forgetPassword = async (userData: { email: string }) => {
  return postDataAuth(ENDPOINTS.AUTH.FORGET_PASSWORD, userData);
};

export const verifyToken = (verifyTokenData: OtpSchema) =>
  postDataAuth(ENDPOINTS.AUTH.VERIFY_TOKEN, verifyTokenData);

export const resetPassword = (resetPasswordData: ResetpasswordSchema) =>
  postDataAuth(ENDPOINTS.AUTH.RESET_PASSWORD, resetPasswordData);
