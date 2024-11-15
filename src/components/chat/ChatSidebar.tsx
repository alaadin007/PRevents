import React from 'react';
import { Search, MessageSquare, Users, Settings } from 'lucide-react';

interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
}

export default function ChatSidebar() {
  const contacts: ChatContact[] = [
    {
      id: '1',
      name: 'Leadership Group',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      lastMessage: 'Next meeting on Monday...',
      time: '2m ago',
      unread: 3
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      lastMessage: 'Thanks for your help!',
      time: '1h ago',
      unread: 0
    },
    {
      id: '3',
      name: 'Project Team',
      avatar: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      lastMessage: 'We need to finish the presentation',
      time: '3h ago',
      unread: 1
    }
  ];

  return (
    <div className="w-full md:w-80 bg-white rounded-xl shadow-md p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center justify-around mb-6">
        <button className="flex flex-col items-center gap-1 text-purple-500">
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs">Chats</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-purple-500">
          <Users className="w-6 h-6" />
          <span className="text-xs">Groups</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-purple-500">
          <Settings className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </button>
      </div>

      <div className="space-y-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 truncate">{contact.name}</h4>
                <span className="text-xs text-gray-500">{contact.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
            </div>
            {contact.unread > 0 && (
              <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full">
                {contact.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}