# AI Chat Frontend

这是一个基于Next.js构建的AI聊天前端应用，支持与DeepSeek模型对话。

## 📁 项目结构 (标准Next.js架构)

```
ai-front/
├── app/                          # 页面和路由（核心）
│   ├── layout.tsx               # 全局布局
│   ├── page.tsx                 # 首页 /
│   ├── globals.css              # 全局样式
│   └── api/
│       └── chat/
│           └── route.ts         # POST /api/chat 端点
│
├── components/                  # React组件
│   └── chat/                    # 聊天功能组件
│       ├── ChatInterface.tsx    # 主聊天界面
│       ├── Sidebar.tsx          # 侧边栏
│       ├── ChatHeader.tsx       # 头部
│       ├── MessageList.tsx      # 消息列表容器
│       ├── MessageBubble.tsx    # 单条消息
│       ├── MessageInput.tsx     # 输入框
│       └── LoadingIndicator.tsx # 加载指示器
│
├── hooks/                       # 自定义React Hooks
│   └── useChat.ts              # 聊天逻辑hooks
│
├── lib/                         # 工具和数据访问
│   ├── types.ts                # 类型定义 + 常量
│   └── utils.ts                # 工具函数
│
├── services/                    # API调用服务
│   └── chat.ts                 # 聊天API服务
│
├── styles/                      # 样式（可选）
│
├── public/                      # 静态资源
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── .gitignore
```

## 🏗️ 架构分层

| 层级 | 目录 | 职责 |
|------|------|------|
| **UI 展示层** | `components/` | React组件，负责视图渲染 |
| **逻辑层** | `hooks/` | 自定义hooks，管理状态和业务逻辑 |
| **服务层** | `services/` | API调用封装，数据通信 |
| **工具层** | `lib/` | 类型定义、常量、工具函数 |
| **路由层** | `app/` | Next.js路由和API端点 |

## 🔄 数据流

```
User Input → ChatInterface → useChat Hook → chatService → POST /api/chat → Response
                ↓
           State Update → MessageList Re-render
```

## 技术栈

- **Next.js 16** - React框架 + 服务端集合
- **TypeScript 5** - 类型安全
- **Tailwind CSS 4** - 原子化CSS框架
- **React 19** - UI库
- **ESLint 9** - 代码检查

## 技术栈

- **Next.js 16** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **ESLint** - 代码检查

## 功能特性

- 💬 实时聊天界面
- 🤖 支持多个AI模型 (DeepSeek-V3.2, DeepSeek-V2.5)
- 🎨 现代化的UI设计
- 📱 响应式布局
- ⚡ 快速构建和部署

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开 [http://localhost:3000](http://localhost:3000) 查看应用

## 构建生产版本

```bash
npm run build
npm start
```

## 代码检查

```bash
npm run lint
```

## 项目特点合规性

✅ **标准Next.js架构** - 遵循官方最佳实践  
✅ **清晰的分层** - 关注点分离，易于维护  
✅ **类型安全** - 完整的TypeScript覆盖  
✅ **模块化** - 每个模块单一职责  
✅ **可测试性** - 逻辑和UI分离  
✅ **可扩展性** - 易于添加新功能和模块 

## 后续可扩展的方向

1. **更多页面** - 在 `app/` 中添加新路由
2. **更多组件** - 在 `components/` 中添加 `common/` 子目录
3. **更多服务** - 在 `services/` 中添加其他API服务
4. **数据库集成** - 在 `lib/` 中添加数据库工具
5. **测试** - 添加Jest和RTL测试
6. **国际化** - 使用i18n库
7. **状态管理升级** - 如果需要复杂状态，考虑Zustand
8. **错误边界** - 添加ErrorBoundary组件

## 功能特性

- 💬 实时聊天界面
- 🤖 支持多个AI模型 (DeepSeek-V3.2, DeepSeek-V2.5)
- 🎨 现代化的UI设计（深色主题）
- 📱 响应式布局
- ⚡ 快速构建和部署
- 🔐 类型安全的TypeScript
- 🏗️ 清晰的分层架构

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
打开 [http://localhost:3000](http://localhost:3000) 查看应用

### 构建生产版本
```bash
npm run build
npm start
```

## 文件说明

### `lib/types.ts`
集中管理所有类型定义和常量：
```typescript
// 接口定义
Message, ChatRequest, ChatResponse, ErrorResponse, AIModel

// 常量
AI_MODELS, INITIAL_MESSAGES, API_ENDPOINTS, RECENT_CONVERSATIONS
```

### `lib/utils.ts`
工具函数库：
```typescript
scrollToBottom()    // 滚动到底部
createMessage()     // 创建消息对象
isValidMessage()    // 验证消息有效性
```

### `services/chat.ts`
API服务层，封装所有与后端的通信：
```typescript
chatService.sendMessage(request)  // 发送消息到后端
```

### `hooks/useChat.ts`
自定义React Hook，管理聊天状态和逻辑：
```typescript
const {
  messages,         // 消息列表
  loading,         // 加载状态
  selectedModel,   // 选中的模型
  sendMessage,     // 发送消息函数
  resetChat        // 重置聊天函数
} = useChat();
```

### 组件结构
```
components/chat/
├── ChatInterface.tsx      # 主容器，组合其他组件
├── Sidebar.tsx           # 导航侧边栏
├── ChatHeader.tsx        # 模型选择头部
├── MessageList.tsx       # 消息列表容器（forwardRef）
├── MessageBubble.tsx     # 单条消息组件
├── MessageInput.tsx      # 用户输入框
└── LoadingIndicator.tsx  # 加载动画
```


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
