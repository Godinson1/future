import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "react-query";
import { getUser } from "../api/user/api.user";
import { toast } from "react-toastify";
import { login, logout, register } from "../api/authentication/api.auth";
import { getErrorMessage } from "../lib/utils";
import Loader from "../components/ui/Loader";

const GET_USER = "get-user";
const AuthContext = createContext<any>({});
const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const { mutate: loginUser, isLoading: isLoginLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }: any) => {
      setUser(data);
      toast.success("Login Succeeded!");
      router.push("/dashboard");
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const { mutate: registerUser, isLoading: isRegistrationLoading } = useMutation({
    mutationFn: register,
    onSuccess: ({ data }: any) => {
      setUser(data);
      toast.success("Registration Successful!");
      router.push("/dashboard");
    },
    onError: (error: any) => {
      toast.error(getErrorMessage(error.response.data.message));
    },
  });

  const { mutate: logoutUser, isLoading: isLogoutLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logged out successfully!");
      router.push("/login");
      // setUser(null);
    },
  });

  return <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser, setUser, isLoginLoading, isRegistrationLoading, isLogoutLoading }}>{children}</AuthContext.Provider>;
};

export const AuthGuard = ({ children }: any) => {
  const router = useRouter();
  const { setUser } = useAuth();
  const { data: user, isLoading } = useQuery(GET_USER, getUser);
  if (isLoading) return <Loader />;
  setUser(user);
  return user ? children : router.push("/login");
};

const useAuth = () => useContext<any>(AuthContext);

export { AuthProvider, useAuth };
