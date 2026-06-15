import { motion } from 'framer-motion';

export default function ProjectCloud({ project, onClick, isSelected }) {
  return (
    <motion.div
      className="absolute cursor-pointer group z-10"
      style={{
        top: project.position.top,
        left: project.position.left,
        transform: 'translate(-50%, -50%)' // Center the cloud on its coordinates
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ 
        y: [0, -10, 0], 
        opacity: 1 
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: project.delay
        },
        opacity: {
          duration: 1,
          delay: project.delay * 0.2
        }
      }}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onClick(project, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
    >
      <div className={`relative flex flex-col items-center justify-center transition-transform duration-300 ${isSelected ? 'scale-110 z-20' : 'hover:scale-105'}`}>
        
        <div className="relative" style={{ filter: isSelected ? 'drop-shadow(0 0 15px rgba(255,255,255,0.8))' : 'drop-shadow(0 8px 10px rgba(0,0,0,0.1))' }}>
          
          {/* Main Base Pill */}
          <div className="relative w-44 md:w-56 h-14 md:h-16 bg-white/60 backdrop-blur-sm rounded-full border-b border-white/40"></div>
          
          {/* Left Fluff */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-16 h-16 md:w-20 md:h-20 bg-white/60 backdrop-blur-sm rounded-full"></div>
          
          {/* Right/Top Fluff */}
          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 w-20 h-20 md:w-28 md:h-28 bg-white/60 backdrop-blur-sm rounded-full"></div>
          
          {/* Content Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 px-4 md:px-6 z-10">
            <div className={`p-2 md:p-3 rounded-full text-white shadow-inner transition-transform ${isSelected ? 'bg-gradient-to-r from-pink-400 to-orange-400 rotate-12' : 'bg-gradient-to-r from-pink-300 to-orange-300 group-hover:rotate-12 group-hover:scale-110'}`}>
              <project.Icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            
            <span className="font-extrabold text-slate-800 text-xs md:text-sm whitespace-nowrap hidden sm:block drop-shadow-sm">
              {project.title.split('|')[0]}
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
