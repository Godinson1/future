import { userApi } from "../index";

export const getUser = async (): Promise<Response> => {
  const response = await userApi.get("/");
  return response.data;
};

export const uploadUserPhoto = (formData: FormData): Promise<Response> => {
  return userApi.put("/upload-profile-photo", formData);
};
