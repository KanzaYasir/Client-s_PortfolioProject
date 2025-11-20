import React from 'react';
import Hero from '../components/hero/hero';
import SkillsSection from '../components/skills/skillsSection';
import Navbar from '../components/layout/navbar';
import AboutSection from '../components/about/aboutSection';
import ProjectsSection from '../components/projects/projectSection';
import Footer from '../components/layout/footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative w-full h-full">

      {/* Full-Screen Video Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* ---- PAGE SECTIONS WITH IDs ---- */}
      
      <section id="hero" className="text-center min-h-screen flex flex-col justify-center items-center text-white px-4">
        <Hero />
      </section>

<section id="about" className="relative py-24 ">
  <AboutSection />
</section>


      <section id="skills" className="relative py-24">
        <SkillsSection />
      </section>


      <section id="projects" className="relative py-24"> <ProjectsSection/></section>

     <section id='contact'   ><Footer/></section>

    </div>
  );
};

export default HomePage;
