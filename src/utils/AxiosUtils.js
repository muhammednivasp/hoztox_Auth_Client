import axios from "axios";
import Constants from "../constants/Constants.js";
const { UserBaseURL, AdminBaseURL } = Constants

console.log(UserBaseURL, "kkkkk")

const createAxiosClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    timeoutErrorMessage: "Request timeout Please Try Again!!!",
  });
  return client;
};

const attachToken = (req, tokenName) => {
  let authToken = localStorage.getItem(tokenName);
  if (authToken) {
    req.headers.Authorization = `Bearer ${authToken}`;
  }
  return req;
};

const userAxios = createAxiosClient(UserBaseURL);
userAxios.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "user");
  return modifiedReq;
});

const adminAxios = createAxiosClient(AdminBaseURL);
adminAxios.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "admin");
  return modifiedReq;
});

export { userAxios, adminAxios };
