'use client';

import { useState, useCallback } from 'react';
import { Message } from '@/lib/types';
import { createMessage } from '@/lib/utils';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    setMessages(prev => [...prev, createMessage('user', content)]);
    setLoading(true);
    setMessages(prev => [...prev, createMessage('assistant', '')]);

    try {
      var url_local = "http://localhost:8080/api/chat/stream";
      var sessionId = localStorage.getItem('sessionId');
      if (sessionId) {
        url_local = url_local + `?sessionId=${sessionId}`;
      }

      const response = await fetch(url_local, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content })
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let reply = '';
      let buffer = '';

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value);
        
        // 处理完整的行
        let lineEnd = buffer.indexOf('\n');
        while (lineEnd !== -1) {
          const line = buffer.substring(0, lineEnd);
          buffer = buffer.substring(lineEnd + 1);
          
          if (line.startsWith('data:')) {
            const content = line.substring(5);
            if (content && content !== '[DONE]') {
              reply += content;
            }
          }
          
          lineEnd = buffer.indexOf('\n');
        }

        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = reply;
          return newMessages;
        });
      }

      // 处理最后可能没有换行的一行
      if (buffer.startsWith('data:')) {
        const content = buffer.substring(5);
        if (content && content !== '[DONE]') {
          reply += content;
        }
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = reply;
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { messages, loading, sendMessage };
};