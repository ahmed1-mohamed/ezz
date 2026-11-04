import { fetchData, postData } from "../client";
import { ENDPOINTS } from "../endpoints";

export const fetchUserProfile = (token: string) =>
  fetchData(ENDPOINTS.COMMON.PROFILE, token);

export const updateUserProfile = (
  userData: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country: string;
    profile_picture: string;
  },
  token: string,
) => postData(ENDPOINTS.COMMON.PROFILE_UPDATE, userData, token);

export const changePassword = (
  passwordData: {
    current_password: string;
    new_password: string;
    new_password_confirmation: string;
  },
  token: string,
) => postData(ENDPOINTS.COMMON.CHANGE_PASSWORD, passwordData, token);

export const fetchTransactions = (token: string) =>
  fetchData(ENDPOINTS.COMMON.TRANSACTIONS, token);
