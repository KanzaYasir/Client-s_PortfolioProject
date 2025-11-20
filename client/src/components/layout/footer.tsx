import React from "react";
import { FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-gray-300 border-t border-white/10 overflow-hidden">

      {/* Soft glow strip */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_bottom,rgba(109,40,217,0.25),transparent_70%)] blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto py-6 px-6 flex flex-col items-center gap-3">

        {/* Identity */}
        <h3 className="text-white text-base font-semibold tracking-wide">
          Muhammad Khubaib Ahmad
        </h3>

        {/* Role */}
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          AI / ML Engineer · Data Scientist
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl mt-2">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-khubaib-ahmad-/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                       hover:bg-white/10 hover:border-blue-400/40 hover:scale-110
                       transition-all duration-300"
          >
            <FaLinkedin className="text-blue-400" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Khubaib8281/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                       hover:bg-white/10 hover:border-purple-400/40 hover:scale-110
                       transition-all duration-300"
          >
            <FaGithub className="text-white" />
          </a>
          <a
            href="https://www.kaggle.com/muhammadkhubaibahmad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
            className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                       hover:bg-white/10 hover:border-purple-400/40 hover:scale-110
                       transition-all duration-300"
          >
            <FaKaggle className="text-white" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923269575321"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                       hover:bg-white/10 hover:border-green-400/40 hover:scale-110
                       transition-all duration-300"
          >
            <IoLogoWhatsapp className="text-green-400" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-4" />

        {/* Bottom Text */}
        <p className="text-[11px] text-gray-500 tracking-wide">
          © 2025 • Building Intelligent & Scalable AI Systems
        </p>
      </div>
    </footer>
  );
};

export default Footer;
