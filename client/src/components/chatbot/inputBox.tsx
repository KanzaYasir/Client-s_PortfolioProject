import React, { useState } from 'react';

interface InputBoxProps {
  onSend: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Type a message..."
        className="flex-1 rounded-xl px-4 py-2 bg-gray-900/40 dark:bg-black/40 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-medium shadow hover:scale-105 transition"
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
