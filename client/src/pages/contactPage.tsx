import React from 'react';
import ChatWindow from '../components/chatbot/chatbotWindow';

const ContactPage: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 flex justify-center items-center">
      <div className="relative z-10 max-w-3xl w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 
                       text-transparent bg-clip-text animate-gradient-x">
          Contact Me
        </h2>
        <ChatWindow />
      </div>
    </section>
  );
};

export default ContactPage;
