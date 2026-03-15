'use client';

import { useRef, useEffect } from 'react';
import { useChat } from '@/hooks/useChat';
import { scrollToBottom } from '@/lib/utils';
import { Sidebar } from './Sidebar';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export default function Chat() {
  const {
    messages,
    loading,
    selectedModel,
    setSelectedModel,
    sendMessage,
    resetChat
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [messages]);

  return (
    <div className="h-screen bg-gray-900 text-white flex">
      <Sidebar onNewChat={resetChat} />

      <div className="flex-1 flex flex-col">
        <ChatHeader
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />

        <MessageList
          ref={messagesEndRef}
          messages={messages}
          loading={loading}
        />

        <MessageInput
          onSendMessage={sendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
}