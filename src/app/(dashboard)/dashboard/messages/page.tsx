"use client";

import React from "react";

import styles from "./styles/message.module.css";
import { Button } from "@mui/material";
import MessageList from "./components/MessageList";
import { useMessage } from "./hooks/useMessage";

const Page = () => {
  const { conversations } = useMessage();

  return (
    <div className={styles.message_container}>
      <MessageList conversations={conversations} />
      <div className={styles.conversation_chat}>
        <div className={styles.new_conversation}>
          <h3 className={styles.message_header}>Select a message</h3>
          <span>Choose from your existing conversations, start a new one, or just keep swimming.</span>
          <Button>New Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
