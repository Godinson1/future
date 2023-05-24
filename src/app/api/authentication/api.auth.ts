import { authApi } from "../index";

interface ILogin {
  email: string;
  passwod: string;
}

interface IRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export const login = (data: ILogin): Promise<Response> => {
  return authApi.post("/login", data);
};

export const register = (data: IRegister): Promise<Response> => {
  return authApi.post("/register", data);
};

export const logout = (): Promise<Response> => {
  return authApi.post("/logout");
};
