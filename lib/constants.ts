import { Message } from './types';

// AI 模型
export const AI_MODELS = {
  V32: 'DeepSeek-V3.2',
  V25: 'DeepSeek-V2.5',
} as const;

// 初始消息
export const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content: '你好！我是DeepSeek，一个AI助手。有什么可以帮助你的吗？'
  }
];

// 最近对话列表
export const RECENT_CONVERSATIONS = [
  '关于AI的讨论',
  '编程问题',
  '学习建议'
];

// API 端点
export const API_ENDPOINTS = {
  CHAT: '/api/chat'
} as const;