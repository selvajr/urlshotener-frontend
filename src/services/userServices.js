import { protectedInstance, instance } from "./instance";

const userServices = {
  register: async (firstName, lastName, email, password) => {
    return await instance.post(`/users`, {
      firstName,
      lastName,
      email,
      password,
    });
  },
  Activate: async (key) => {
    return await instance.put(`/users/activate/${key}`);
  },
  login: async (email, password) => {
    return await instance.post(
      "/users/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
  },
  logout: async () => {
    return protectedInstance.post("/users/logout");
  },
  checkAuth: async () => {
    const user = await protectedInstance.get("/users/profile");
    return user;
  },
  forgot: async (email) => {
    return await instance.put(`/users/forgot`, {
      email,
    });
  },
  verify: async (key) => {
    return await instance.get(`/users/verify/${key}`);
  },
  reset: async (key, password) => {
    return await instance.put(`/users/reset`, {
      key,
      password,
    });
  },
};

export default userServices;
