import React from 'react';

interface MessageProps {
  content: string;
  isUser?: boolean;
}

const Message: React.FC<MessageProps> = ({ content, isUser = false }) => {
  return (
    <div
      className={`max-w-[75%] px-4 py-2 rounded-xl break-words shadow-md
        ${isUser
          ? 'self-end bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white'
          : 'self-start bg-gray-800/70 text-gray-100'}
      `}
    >
      {content}
    </div>
  );
};

export default Message;
