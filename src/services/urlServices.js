import { protectedInstance } from "./instance";

const urlServices = {
  createUrl: async (url) => {
    return await protectedInstance.post(`/url/create`, {
      url,
    });
  },
  getUrls: async () => {
    return await protectedInstance.get(`/url`);
  },
  gotoUrl: async (endpoint) => {
    return await protectedInstance.get(`/url/${endpoint}`);
  },
  getUrlCount: async (month) => {
    return await protectedInstance.get(`/url/count/?month=${month}`);
  },
  getTodayUrlCount: async () => {
    try {
      const response = await protectedInstance.get("/url/todayCounts");
      return response.data.count;
    } catch (error) {
      return 0;
    }
  },
  deleteUrl: async (endpoint) => {
    return await protectedInstance.delete(`/url/${endpoint}`);
  },
};

export default urlServices;
