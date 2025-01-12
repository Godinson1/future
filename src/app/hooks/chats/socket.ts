import { io, Socket } from "socket.io-client";
import Cookies from "js-cookie";

const token = Cookies.get("Authentication");
console.log("tokennn", token);

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
      withCredentials: true,
      transports: ["websocket"],
    });
  }
  return socket;
};
