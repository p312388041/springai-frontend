import { ChatRequest, ChatResponse } from '@/lib/types';
import { API_ENDPOINTS } from '@/lib/constants';
import { log } from 'console';



// API 客户端
export const chatAPI = {
  sendMessage: async (request: ChatRequest): Promise<any> => {  
    var url_local = "http://localhost:8080/api/chat/send";
    var sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      url_local =url_local + `?sessionId=${sessionId}`;
    }
    const response = await fetch(url_local, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request)
    });
    if (!response.ok) {
      throw new Error('API request failed');
    }
    console.log('response.body:', response.body);
    return response.json();
  }
};