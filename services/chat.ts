// // services/chat.ts
// import { ChatRequest } from '@/lib/types';

// export const chatAPI = {
//   sendMessage: async (request: ChatRequest): Promise<Response> => {
//     var url_local = "http://localhost:8080/api/chat/send";
//     var sessionId = localStorage.getItem('sessionId');
//     if (sessionId) {
//       url_local = url_local + `?sessionId=${sessionId}`;
//     }
    
//     const response = await fetch(url_local, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(request)
//     });    
//     return response; // 直接返回 Response 对象，让调用者处理
//   }
// };