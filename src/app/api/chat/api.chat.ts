import { messagesApi, conversationApi } from "../index";

export const getMessages = (conversationId: string) => {
  return messagesApi.get(`/${conversationId}`);
};

export const getUserConversations = () => {
  return conversationApi.get("/messages/with_last");
};
