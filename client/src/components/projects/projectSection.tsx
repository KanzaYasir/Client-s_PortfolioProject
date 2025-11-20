import React from 'react';
import projectsData from '../../Data/Projects.json';
import ProjectCard from './projectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section className="w-full relative py-24 px-6 flex justify-center items-center">
      <div className="relative z-10 max-w-6xl space-y-12">

        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text animate-gradient-x">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
