import { AIModel } from '@/lib/types';
import { AI_MODELS } from '@/lib/constants';

interface ChatHeaderProps {
  selectedModel: AIModel;
  onModelChange: (model: AIModel) => void;
}

export const ChatHeader = ({ selectedModel, onModelChange }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-700 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">DS</span>
        </div>
        <span className="font-semibold">chongge</span>
      </div>
      <div className="flex items-center space-x-2">
        <select
          value={selectedModel}
          onChange={(e) => onModelChange(e.target.value as AIModel)}
          className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-sm"
        >
          <option value={AI_MODELS.V32}>{AI_MODELS.V32}</option>
          <option value={AI_MODELS.V25}>{AI_MODELS.V25}</option>
        </select>
      </div>
    </div>
  );
};