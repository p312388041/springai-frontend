// 工具函数库
export const scrollToBottom = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

export const createMessage = (role: 'user' | 'assistant', content: string) => ({
  role,
  content
});

export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0;
};