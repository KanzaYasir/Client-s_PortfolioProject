import React from 'react';
import skillsDataJson from '../../Data/Skills.json';

interface SkillsData {
  ProgrammingAndTools: string[];
  MachineLearning: string[];
  Domains: string[];
  PipelinesAndDeployment: string[];
  AutomationAndAgents: string[];
  DatabasesAndStorage: string[];
  Visualization: string[];
}

const skillsData: SkillsData = skillsDataJson as SkillsData;

// Professional & readable gradients
const gradients = {
  ProgrammingAndTools: "from-sky-500 via-sky-600 to-blue-700",
  MachineLearning: "from-emerald-400 via-emerald-500 to-green-600",
  Domains: "from-cyan-600 via-blue-700 to-indigo-800",
  PipelinesAndDeployment: "from-amber-400 via-orange-500 to-amber-600",
  AutomationAndAgents: "from-indigo-400 via-indigo-500 to-indigo-700",
  DatabasesAndStorage: "from-cyan-400 via-teal-500 to-cyan-700",
  Visualization: "from-rose-400 via-pink-500 to-rose-600",
};


const SkillsSection: React.FC = () => {
  return (
    <section className="w-full relative py-24 px-6 flex justify-center items-center">
      <div className="relative z-10 max-w-5xl space-y-12">

        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text animate-gradient-x">
          My Skills
        </h2>

        {/* Skill Categories */}
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="backdrop-blur-xl bg-white/10 dark:bg-black/40 rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-600 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center capitalize">
              {category.replace(/([A-Z])/g, ' $1')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r ${gradients[category as keyof typeof gradients]} shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-pointer`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SkillsSection;
