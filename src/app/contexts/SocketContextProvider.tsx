import { createContext, ReactNode, useContext } from "react";
import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, { withCredentials: true });

const SocketContext = createContext<any>({});

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocketContext = () => useContext(SocketContext);
