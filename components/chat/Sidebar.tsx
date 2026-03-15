import { RECENT_CONVERSATIONS } from '@/lib/constants';

interface SidebarProps {
  onNewChat: () => void;
}

export const Sidebar = ({ onNewChat }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-800 flex flex-col">
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium"
        >
          + 新对话
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          <div className="text-gray-400 text-sm mb-2">最近对话</div>
          <div className="space-y-1">
            {RECENT_CONVERSATIONS.map((conversation, index) => (
              <div
                key={index}
                className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer text-sm"
              >
                {conversation}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm">U</span>
          </div>
          <span className="text-sm">用户</span>
        </div>
      </div>
    </div>
  );
};