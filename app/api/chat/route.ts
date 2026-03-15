// import { NextRequest, NextResponse } from 'next/server';
// import { ChatRequest, ChatResponse, ErrorResponse } from '@/lib/types';

// // AI响应生成函数
// const generateAIResponse = async (message: string): Promise<string> => {
//   // 这里是模拟响应，实际应用中应该调用DeepSeek API
//   const responses = [
//     "这是一个很有趣的问题。让我来帮你分析一下。",
//     "根据你的描述，我建议你考虑以下几个方面...",
//     "这是一个复杂的话题。让我一步步为你解释。",
//     "谢谢你的提问！我很乐意帮助你。",
//     "这是一个很好的观察。让我分享一些相关的信息。",
//   ];

//   // 简单的关键词匹配来生成更相关的响应
//   if (message.includes('你好') || message.includes('hello')) {
//     return '你好！很高兴见到你。有什么我可以帮助你的吗？';
//   }

//   if (message.includes('介绍') || message.includes('你是谁')) {
//     return '我是DeepSeek，一个由杭州深度求索人工智能基础技术研究有限公司开发的AI助手。我可以帮助你回答问题、提供建议、进行对话等。';
//   }

//   if (message.includes('编程') || message.includes('代码')) {
//     return '编程是一个很有趣的领域！我可以帮你解释概念、提供代码示例，或者协助调试问题。你想了解哪方面的编程知识呢？';
//   }

//   if (message.includes('AI') || message.includes('人工智能')) {
//     return '人工智能是当前科技发展的热点领域。我可以和你讨论机器学习、深度学习、自然语言处理等话题。你对AI有什么具体的问题吗？';
//   }

//   // 随机选择一个通用响应
//   return responses[Math.floor(Math.random() * responses.length)];
// };

// export async function POST(request: NextRequest) {
//   try {
//     const body: ChatRequest = await request.json();
//     const { message, model = 'DeepSeek-V3.2' } = body;

//     if (!message || typeof message !== 'string') {
//       return NextResponse.json(
//         { error: 'Message is required and must be a string' } as ErrorResponse,
//         { status: 400 }
//       );
//     }

//     // 模拟API延迟
//     await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

//     // 生成AI响应
//     const response = await generateAIResponse(message);

//     const chatResponse: ChatResponse = {
//       response,
//       model,
//       timestamp: new Date().toISOString(),
//     };

//     return NextResponse.json(chatResponse);

//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' } as ErrorResponse,
//       { status: 500 }
//     );
//   }
// }

// // 处理其他HTTP方法
// export async function GET() {
//   return NextResponse.json(
//     { message: 'Chat API endpoint. Use POST to send messages.' },
//     { status: 200 }
//   );
// }