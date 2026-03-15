import { useState } from 'react';
import { isValidMessage } from '@/lib/utils';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  loading: boolean;
}

export const MessageInput = ({ onSendMessage, loading }: MessageInputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidMessage(input) || loading) return;

    onSendMessage(input.trim());
    setInput('');
  };

  return (
    <div className="p-4 border-t border-gray-700">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入你的问题..."
          disabled={loading}
          className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !isValidMessage(input)}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium disabled:cursor-not-allowed"
        >
          {loading ? '发送中...' : '发送'}
        </button>
      </form>
      <div className="text-xs text-gray-500 mt-2 text-center">
        DeepSeek可以做出错误陈述，请谨慎对待重要信息。
      </div>
    </div>
  );
};