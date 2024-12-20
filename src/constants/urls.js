export const BASE_URL = "http://localhost:3000";

export const DASHOBARD_URL =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000"
    : "http://localhost:3000";

export const API_URLS = {
  // website
  CONTACTS: `${BASE_URL}/api/contacts`,
  SUBSCRIBES: `${BASE_URL}/api/subscribes`,

  // auth
  LOGIN: `${BASE_URL}/api/auth/local/`,
  SIGNUP: `${BASE_URL}/api/auth/local/register`,
  FORGOT_PASSWORD: `${BASE_URL}/api/auth/forgot-password`,
  CHANGE_PASSWORD: `${BASE_URL}/api/auth/change-password`,
  RESET_PASSWORD: `${BASE_URL}/api/auth//api/auth/reset-password`,

  // users get, put
  USERS: `${BASE_URL}/api/users/`,
  GET_USER_DETAILS: `${BASE_URL}/api/users/me`,

  // home
  HOME: `${BASE_URL}/api/home/`,

  // media
  UPLOAD_IMAGE: `${BASE_URL}/api/media/upload`,
};

export const PAGE_URLS = {
  HOME: "/",
  // auth
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOTPASSWORD: "/forgot-password",
  CHANGEPASSWORD: "/change-password",
  VERIFY_INVITATION: "/verify-invitation",

  // website
  CONTACT: "/contact",
  ABOUT: "/about",

  // dashboard
  DASHBOARD: "/",
  PROFILE: "/profile",
  EDIT_PROFILE: "/profile/edit",
};
