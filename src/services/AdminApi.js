import { adminAxios } from '../utils/AxiosUtils.js'

const adminLogin = (value) => {
  return adminAxios.post("/login", value, {
    withCredentials: true,
  });
};

const isAdminAuth = () => {
  return adminAxios.get("/adminauth", {
    withCredentials: true,
  });
};

const usersList = () => {
  return adminAxios.get("/userslist", {
    withCredentials: true,
  });
};

const userHandle = (user) => {
  return adminAxios.patch("/userhandle", user, {
    withCredentials: true,
  });
};

const eventCreation = (values) => {
  return adminAxios.post("/eventcreation", values, {
    withCredentials: true,
  });
};


export {
  adminLogin, isAdminAuth, usersList, userHandle, eventCreation
}