import React from "react";
import Navbar from "../components/layout/navbar";
import SkillsSection from "../components/skills/skillsSection";

const SkillsPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar /> 
      <main className="pt-24 px-4">
        <SkillsSection />
      </main>
    </div>
  );
};

export default SkillsPage;
