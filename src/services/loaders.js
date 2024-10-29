import urlServices from "./urlServices";
import userServices from "./userServices";

export async function userLoader() {
  try {
    const user = await userServices.checkAuth();
    const urls = await urlServices.getUrls();
    return { user, urls };
  } catch (error) {
    return { user: false, urls: false };
  }
}
export async function urlLoader() {
  try {
    const urls = await urlServices.getUrls();
    return { urls };
  } catch (error) {
    return { urls: false };
  }
}
