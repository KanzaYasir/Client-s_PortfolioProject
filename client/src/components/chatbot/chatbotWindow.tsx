import React, { useState, useRef, useEffect } from 'react';
import Message from './message';
import InputBox from './inputBox';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ content: string; isUser: boolean }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = (msg: string) => {
    if (!msg.trim()) return;
    setMessages([...messages, { content: msg, isUser: true }]);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { content: `Thanks for reaching out! We’ll respond to your message within 24 hours.`, isUser: false },
      ]);
    }, 500);
  };

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Chat Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar max-h-[500px]"
      >
        {messages.map((msg, idx) => (
          <Message key={idx} {...msg} />
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-white/20 dark:border-gray-600">
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatWindow;
