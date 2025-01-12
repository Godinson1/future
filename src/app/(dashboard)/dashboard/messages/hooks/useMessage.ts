import { useState, KeyboardEvent, useEffect } from "react";

import { ICartData } from "src/app/constants/data";
import { useStateContext } from "src/app/contexts/ContextProvider";
import { useViewport } from "src/app/hooks/useViewPort";
import { useQuery } from "react-query";
import { getMessages, getUserConversations } from "@/api/chat/api.chat";
import { useAuth } from "@/hooks/useAuth";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useSocketContext } from "@/contexts/SocketContextProvider";

export interface IUserProfile {
  id: string;
  futureId: string;
  firstName: string;
  lastName: string;
  username?: string;
  email?: string;
  phoneNumber?: string;
  profilePhoto?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IMessage {
  id: string;
  content: string;
  senderId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IConversation {
  id: string;
  participant_one: IUserProfile;
  participant_two: IUserProfile;
  last_message: IMessage;
  createdAt?: Date;
  updatedAt?: Date;
}

export const useMessage = (conversationId?: string) => {
  const [search, setSearch] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { currentColor } = useStateContext();
  const { width } = useViewport();
  const { user } = useAuth();
  const router = useRouter();
  const { socket } = useSocketContext();
  const { data: conversations, isLoading: conversationsLoading } = useQuery("conversations", getUserConversations, { refetchOnMount: true });
  const { data: messages, isLoading: messagesLoading, error: messagesError } = useQuery(["messages", conversationId], () => getMessages(conversationId as string), { enabled: !!conversationId, onSuccess: (data) => setChatMessages(data.data) });
  const conversationListMenuOptions = ["Pin Conversation", "Delete Conversation"];

  useEffect(() => {
    if (!conversationId) return;

    socket.emit("joinConversation", { conversationId });
    socket.on("userJoined", () => {
      console.log("User has joined the conversation");
    });
    socket.on("receiveMessage", (newMessage: any) => {
      setChatMessages((prevMessages: any) => [...prevMessages, newMessage.message]);
    });

    return () => {
      socket.off("userJoined");
      socket.off("receiveMessage");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId]);

  const getConversationRecipient = (p1: IUserProfile, p2: IUserProfile) => {
    if (user.id === p1.id) return p2;
    return p1;
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  const getChatDate = (value: any): string => {
    return dayjs(value.$d).format("MMM D, YYYY");
  };

  const getConversation = (conversationId: string): void => {
    router.push(`/dashboard/messages/${conversationId}`);
  };

  const getFullName = (profile: IUserProfile): string => {
    return `${profile.firstName} ${profile.lastName}`;
  };

  const sendMessage = (conversationId: string) => {
    socket.emit("sendMessage", { content: message, conversationId }, (data: any) => {
      console.log("dataaa", data);
    });
    setMessage("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, conversationId: string) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage(conversationId);
    }
  };

  const handleMessageSend = (conversationId: string) => {
    sendMessage(conversationId);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string, conversationId: string) => {
    setIsDropdownOpen(false);
    console.log(`${option} clicked for conversation ${conversationId}`);
  };

  const getFilteredConversations = (conversations: IConversation[]) => {
    return conversations.filter(({ participant_one, participant_two }) => {
      const conversationRecipient = getConversationRecipient(participant_one, participant_two);
      const { firstName, lastName } = conversationRecipient;
      const normalizedSearchTerm = search.toLowerCase();
      return firstName.toLowerCase().includes(normalizedSearchTerm) || lastName.toLowerCase().includes(normalizedSearchTerm);
    });
  };

  const inputWidth = width < 768 ? "100%" : 250;

  return {
    currentColor,
    search,
    setSearch,
    inputWidth,
    conversations: conversations?.data || [],
    conversationsLoading,
    getConversationRecipient,
    getInitials,
    getChatDate,
    getConversation,
    messages: messages?.data || [],
    messagesLoading,
    messagesError,
    user,
    getFullName,
    handleKeyDown,
    sendMessage,
    socket,
    handleMessageSend,
    setMessage,
    message,
    chatMessages,
    setIsDropdownOpen,
    isDropdownOpen,
    toggleDropdown,
    handleOptionClick,
    getFilteredConversations,
    conversationListMenuOptions,
  };
};
