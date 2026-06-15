import { useState } from 'react';
import { projects } from './data';
import SkyBackground from './components/SkyBackground';
import ProjectCloud from './components/ProjectCloud';
import GlassModal from './components/GlassModal';
import AboutCard from './components/AboutCard';
import ContactCard from './components/ContactCard';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloudClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <SkyBackground />
      
      {/* Title */}
      <div className="absolute top-8 left-0 w-full text-center z-30 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
          Sueda'nın Gökyüzü Portfolyosu
        </h1>
        <p className="mt-2 text-pink-600 font-medium bg-white/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm shadow-sm border border-white/50">
          Keşfetmek için bulutlara tıkla!
        </p>
      </div>
      
      <div className="absolute inset-0 z-20">
        {projects.map((project) => (
          <ProjectCloud 
            key={project.id} 
            project={project} 
            onClick={handleCloudClick}
            isSelected={selectedProject?.id === project.id}
          />
        ))}
      </div>

      <AboutCard />
      <ContactCard />
      
      <GlassModal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
    </main>
  );
}

export default App;
