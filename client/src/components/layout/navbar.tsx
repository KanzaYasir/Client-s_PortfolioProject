import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const y =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // IntersectionObserver for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 backdrop-blur-xl transition-all duration-300 rounded-3xl mx-auto z-50 w-[90%] md:w-[65%] ${
        darkMode
          ? "bg-gray-500/20 border-gray-700/30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          : "bg-gray-300/30 border-gray-400/30 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
      }`}
      style={{ marginTop: "10px" }}
    >
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Hamburger - Mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full focus:outline-none"
        >
          <svg
            className={`w-8 h-8 ${darkMode ? "text-white" : "text-black"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative pb-2 transition-all ${
                  activeSection === item.id
                    ? darkMode
                      ? "text-purple-400"
                      : "text-purple-600"
                    : darkMode
                    ? "text-white hover:text-purple-400"
                    : "text-black hover:text-purple-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] w-full rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? darkMode
                        ? "bg-purple-400 opacity-100"
                        : "bg-purple-600 opacity-100"
                      : "opacity-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${darkMode ? "text-white" : "text-black"}`}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-10h1M3.34 12h1m15.36 4.95l.7.7M4.64 5.64l.7.7m12.02 0l.7-.7M4.64 18.36l.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900/95 to-gray-800/90 backdrop-blur-lg z-50 transform transition-transform duration-300 rounded-tr-3xl rounded-br-3xl shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <ul className="mt-24 flex flex-col space-y-6 px-6">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-lg font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform ${
                  activeSection === item.id
                    ? darkMode
                      ? "text-purple-400 bg-gray-700/50 scale-105"
                      : "text-purple-600 bg-gray-200/50 scale-105"
                    : darkMode
                    ? "text-white hover:text-purple-400 hover:bg-gray-700/30 hover:scale-105"
                    : "text-black hover:text-purple-600 hover:bg-gray-200/50 hover:scale-105"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
