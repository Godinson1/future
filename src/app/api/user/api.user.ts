import { userApi } from "../index";

export const getUser = async (): Promise<Response> => {
  const response = await userApi.get("/");
  return response.data;
};
