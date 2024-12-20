"use server";

import axios from "axios";
import qs from "qs";
import { DEFAULT_ERROR_MSG, TIME } from "@/constants";
import { cookies } from "next/headers";

export const axiosDashboard = axios.create({});
export const axiosPublic = axios.create({});

// Add a request interceptor to include the token for dashboard API calls
axiosDashboard.interceptors.request.use(
  (config) => {
    const token = cookies().get("access_token")?.value;
    const hasCookie = cookies().has("access_token");
    console.log(hasCookie, config.headers.Authorization);
    // const token = getCookie("access_token"); // Adjust this based on your auth storage strategy
    if (hasCookie) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAuthCookies = (token) => {
  const expiresAt = new Date(Date.now() + TIME.ACCESS_TOKEN_EXPIRY);

  cookies().set("access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
  axiosDashboard.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const handleApiResponse = (data, successMsg) => {
  const { error } = data;
  if (error) {
    return { variant: "error", msg: error.message || DEFAULT_ERROR_MSG };
  }
  return { variant: "success", msg: successMsg, data: data };
};

export const handleApiError = (err) => {
  console.log("api error response >>>>> ", err?.response ?? err);
  return {
    variant: "error",
    msg:
      err?.response?.data?.error?.message || err?.message || DEFAULT_ERROR_MSG,
    data: err?.response?.data ?? err?.message,
  };
};

export async function getURL(url, filterObj) {
  const query = qs.stringify(filterObj, {
    encodeValuesOnly: true, // prettify URL
  });
  const fullUrl = `${url}${query ? `?${query}` : ""}`;
  return fullUrl;
}

export async function clearCookies() {
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll(); // Get all cookies

  allCookies.forEach((cookie) => {
    cookieStore.delete(cookie.name); // Remove each cookie
  });
  delete axiosDashboard.defaults.headers.common.Authorization;
}
