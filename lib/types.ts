// 全局类型定义
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  id?: string; // 可选ID用于更新流式消息
}

export interface ChatRequest {
  message: string;
  model?: string;
}

export interface ChatResponse {
  response: string;
  model: string;
  timestamp: string;
}

export interface StreamResponse {
  content: string;
  done?: boolean;
  sessionId?: string;
}

export interface ErrorResponse {
  error: string;
}

export type AIModel = 'DeepSeek-V3.2' | 'DeepSeek-V2.5';