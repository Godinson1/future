import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FiSend } from "react-icons/fi";
import { IConversation, IMessage, useMessage } from "../hooks/useMessage";

import styles from "../styles/message.module.css";

interface IMessageChat {
  conversations: IConversation[];
}

const MessageChat = ({ conversations }: IMessageChat) => {
  const paths = usePathname().split("/");
  const chatRef = useRef<HTMLDivElement>(null);
  const conversationId = paths[paths.length - 1];
  const conversation = conversations.find((conversation: IConversation) => conversation.id === conversationId);
  const { chatMessages, user, getConversationRecipient, getFullName, handleKeyDown, handleMessageSend, message, setMessage } = useMessage(conversationId);
  let recipientFullName = "";
  if (conversation) {
    const { participant_one, participant_two } = conversation;
    const conversationRecipient = getConversationRecipient(participant_one, participant_two);
    recipientFullName = getFullName(conversationRecipient);
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className={styles.conversation_chat}>
      <div className={styles.conversation_chat_container}>
        <div className={styles.conversation_chat_header}>{recipientFullName}</div>
        <div className={styles.conversation_chat_main} ref={chatRef}>
          {chatMessages.map((message: IMessage) => {
            const isSender = message.senderId === user.id;
            return (
              <div key={message.id} className={`${styles.message} ${isSender ? styles.sender : styles.recipient}`}>
                {message.content}
              </div>
            );
          })}
        </div>
        <div className={styles.conversation_chat_base}>
          <div className={styles.chat_input_container}>
            <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => handleKeyDown(e, conversationId)} className={styles.chat_input} type='text' placeholder='Type a message...' />
          </div>
          <div className={styles.chat_send_button} onClick={() => handleMessageSend(conversationId)}>
            <FiSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageChat;
