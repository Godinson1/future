import React from "react";
import { BsChatLeft } from "react-icons/bs";

import styles from "../styles/message.module.css";
import { TextField } from "@mui/material";
import { IConversation, useMessage } from "../hooks/useMessage";
import MenuDropdown from "./MenuDropdown";

interface IMessageList {
  conversations: IConversation[];
}

const MessageList = ({ conversations }: IMessageList) => {
  const { search, setSearch, getConversationRecipient, getInitials, getChatDate, getConversation, getFilteredConversations, handleOptionClick, toggleDropdown, isDropdownOpen, conversationListMenuOptions } = useMessage();
  const filteredConversations = getFilteredConversations(conversations);

  return (
    <div className={styles.conversation_list}>
      <div className={styles.conversation_list_header}>
        <div>
          <TextField value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} label='Search Conversations' variant='standard' size='small' />
        </div>
        <div className='flex gap-5'>
          <BsChatLeft />
          <BsChatLeft />
        </div>
      </div>
      <div className={styles.all_conversations}>
        <h3 className='font-bold'>All Conversations</h3>
        <div>
          {filteredConversations.map(({ participant_one, participant_two, id, last_message }: IConversation) => {
            const conversationRecipient = getConversationRecipient(participant_one, participant_two);
            const { firstName, lastName, futureId } = conversationRecipient;
            const { content, createdAt } = last_message;
            return (
              <div onClick={() => getConversation(id)} className={styles.conversation} key={id}>
                <div className='flex gap-3'>
                  <div className={styles.profile_pic}>{getInitials(firstName, lastName)}</div>
                  <div>
                    <div>
                      {firstName} {lastName}{" "}
                      <span className={styles.user_dates}>
                        @{futureId} - {getChatDate(createdAt)}
                      </span>
                    </div>
                    <div className={`${styles.user_dates}`}>{content}</div>
                  </div>
                </div>
                <MenuDropdown menuOptions={["Pin Conversation", "Delete Conversation"]} handleOptionClick={handleOptionClick} toggleDropdown={(e: React.MouseEvent) => toggleDropdown(e)} isDropdownOpen={isDropdownOpen} id={id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
