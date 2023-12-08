import { userAxios } from "../utils/AxiosUtils.js"

const userLogin = (value) => {
  return userAxios.post("/login", value, {
    withCredentials: true,
  });
};

const userSignup = (value) => {
  return userAxios.post("/register", value, {
    withCredentials: true,
  });
};

const verifyOtp = (value) => {
  console.log(value,'value');
  return userAxios.post("/verify", value, {
    withCredentials: true,
  });
};

const isUserAuth = () => {
  return userAxios.get("/userauth", {
    withCredentials: true,
  });
};

const userGet = () => {
  return userAxios.get("/userget", {
    withCredentials: true,
  });
};

const eventGet = () => {
  return userAxios.get("/eventget", {
    withCredentials: true,
  });
};

export {
    userLogin,userSignup,verifyOtp,isUserAuth,userGet,eventGet
}