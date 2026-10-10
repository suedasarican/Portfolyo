import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import ContactSection from './components/ContactSection';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, Inter, sans-serif' }}>
      <Navbar />
      <main>
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection onProjectClick={setSelectedProject} />
        <ContactSection />
      </main>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
