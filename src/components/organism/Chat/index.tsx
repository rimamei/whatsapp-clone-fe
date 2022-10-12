import { ChatHeader, MessageContainer, ChatInput } from '@components';
import React from 'react';

interface ChatProps {
  className: string;
}

function Chat(props: ChatProps) {
  const { className } = props;

  return (
    <main className={`h-full relative flex flex-col bg-[#e5ded8] ${className}`}>
      <ChatHeader />
      <MessageContainer />
      <ChatInput />
    </main>
  );
}

export default Chat;
