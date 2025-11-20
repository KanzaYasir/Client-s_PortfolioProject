import React from 'react';
import aboutData from '../../Data/About.json';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full relative py-24 px-6 flex justify-center items-center">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* About Card */}
      <div className="relative z-10 max-w-4xl backdrop-blur-xl bg-white/20 dark:bg-black/30 rounded-3xl p-8 shadow-xl border border-white/10 dark:border-gray-700 space-y-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
        
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
          About Me
        </h2>

        {/* Summary */}
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed text-center transition-transform duration-300 hover:scale-[1.02] hover:text-indigo-500 dark:hover:text-indigo-400">
          {aboutData.summary}
        </p>

        {/* Location */}
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-md text-center">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Location:</span>{' '}
          {aboutData.location}
        </p>

        {/* Highlights */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">Key Highlights</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.highlights.map((item, index) => (
            <li
              key={index}
              className="bg-white/10 dark:bg-black/20 p-3 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 text-gray-800 dark:text-gray-200 font-medium hover:text-purple-500 dark:hover:text-purple-400 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Goals */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">Goals</h3>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed text-center transition-transform duration-300 hover:scale-[1.02] hover:text-indigo-500 dark:hover:text-indigo-400">
          {aboutData.goals}
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
