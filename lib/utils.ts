// 工具函数库
export const scrollToBottom = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

export const createMessage = (role: 'user' | 'assistant', content: string, id?: string) => ({
  role,
  content,
  ...(id && { id })
});

export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0;
};