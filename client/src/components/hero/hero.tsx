import React, { useState, useRef, useEffect } from "react";
import aboutData from "../../Data/About.json";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";

const Hero: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{ content: string; isUser: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setChatMessages((prev) => [...prev, { content: userMessage, isUser: true }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      const botReply = data?.reply || "Sorry, I could not answer that.";

      setChatMessages((prev) => [...prev, { content: botReply, isUser: false }]);
    } catch (err) {
      console.error(err);
      setChatMessages((prev) => [...prev, { content: "Failed to get response.", isUser: false }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center bg-transparent px-4 -mt-12">
      
      {/* Neon Gradient Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500
                     transition-all duration-500 ease-in-out hover:scale-110 
                     hover:drop-shadow-[0_0_40px_rgba(128,0,255,0.8)] text-center cursor-pointer">
        {aboutData.name}
      </h1>

      {/* Title */}
      <p className="text-xl md:text-3xl mt-4 text-indigo-200 tracking-wide drop-shadow-md 
                    transition-all duration-500 ease-in-out hover:scale-105 
                    hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] text-center cursor-pointer">
        {aboutData.title}
      </p>

      {/* Summary */}
      <div className="mt-8 max-w-xl bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-800/80 backdrop-blur-lg rounded-xl p-6 
                      transition-transform duration-300 ease-in-out 
                      hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r hover:from-gray-900/90 hover:via-black/90 hover:to-gray-800/90">
        <p className="text-center text-gray-100 text-base md:text-lg">
          {aboutData.summary}
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/muhammad-khubaib-ahmad-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl p-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Khubaib8281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl p-3 rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.kaggle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl p-3 rounded-full hover:shadow-lg hover:shadow-green-500/50 transition duration-300"
            aria-label="Kaggle"
          >
            <FaKaggle />
          </a>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-1">
        {chatOpen && (
          <div className="w-80 max-h-[400px] bg-gray-900/95 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden mb-2">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 custom-scrollbar">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-2xl max-w-[90%] break-words text-xs md:text-sm
                    ${msg.isUser
                      ? "self-end bg-indigo-700 text-white shadow-md text-left"
                      : "self-start bg-gray-800 text-gray-200 shadow-sm text-left"
                    }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="self-start px-3 py-2 rounded-xl bg-gray-800 text-gray-200 animate-pulse">
                  Typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex p-3 gap-2 border-t border-gray-700">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-2 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold shadow-lg transition"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Toggle Button with Label */}
      {/* Toggle Button with Label */}
<div className="flex flex-col items-center space-y-1">

  <button
    onClick={() => setChatOpen(!chatOpen)}
    className={`
      relative p-4 rounded-full text-white 
      bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900
      shadow-[0_0_25px_rgba(0,84,255,0.45)]
      transition-all duration-300
      hover:scale-110 
      hover:shadow-[0_0_40px_rgba(0,110,255,0.85)]
      active:scale-95
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 8h10M7 12h6m5 8l-3-3H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2z"
      />
    </svg>

    {/* Neon ring pulse when chat is closed */}
    {!chatOpen && (
      <span className="
        absolute inset-0 rounded-full 
        animate-ping 
        bg-blue-700/40
      "></span>
    )}
  </button>

  <span className="text-sm text-gray-200 dark:text-gray-400 font-light tracking-wide">
    Ask about Khubaib
  </span>

</div>

      </div>
    </section>
  );
};

export default Hero;
