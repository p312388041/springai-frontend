'use client';

/**
 * Custom hook for managing chat functionality in the AI chat application.
 * Handles message state, API communication, and UI loading states.
 */

import { useState, useCallback } from 'react';
import { Message, AIModel } from '@/lib/types';
import { INITIAL_MESSAGES, AI_MODELS } from '@/lib/constants';
import { chatAPI } from '@/services/chat';
import { createMessage } from '@/lib/utils';

export const useChat = () => {
  // State for storing chat messages
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  // State for tracking loading status during API calls
  const [loading, setLoading] = useState(false);
  // State for the currently selected AI model
  const [selectedModel, setSelectedModel] = useState<AIModel>(AI_MODELS.V32);

  /**
   * Sends a message to the AI API and updates the chat state.
   * @param content - The message content to send
   */
  const sendMessage = useCallback(async (content: string) => {
    const userMessage = createMessage('user', content);
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await chatAPI.sendMessage({
        message: content,
        model: selectedModel
      });
      console.log('API Response:', response);
      const assistantMessage = createMessage('assistant', response.data.reply);
      const sessionId = response.data.sessionId;
      localStorage.setItem('sessionId', sessionId);
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = createMessage('assistant', '抱歉，发生了错误。请稍后再试。');
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }, [selectedModel]);

  /**
   * Resets the chat to its initial state, clearing all messages.
   */
  const resetChat = useCallback(() => {
    setMessages(INITIAL_MESSAGES);
  }, []);

  // Return the chat state and functions for use in components
  return {
    messages,
    loading,
    selectedModel,
    setSelectedModel,
    sendMessage,
    resetChat
  };
};