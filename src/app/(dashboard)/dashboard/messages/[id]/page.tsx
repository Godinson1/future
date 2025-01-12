"use client";
import React from "react";
import MessageChat from "../components/MessageChat";
import MessageList from "../components/MessageList";

import styles from "../styles/message.module.css";
import { useMessage } from "../hooks/useMessage";

const Page = () => {
  const { conversations } = useMessage();

  return (
    <div className={styles.message_container}>
      <MessageList conversations={conversations} />
      <MessageChat conversations={conversations} />
    </div>
  );
};

export default Page;
