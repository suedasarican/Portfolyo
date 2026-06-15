import { motion } from 'framer-motion';

export default function ProjectCloud({ project, onClick, isSelected }) {
  return (
    <motion.div
      className="absolute cursor-pointer group z-10"
      style={{
        top: project.position.top,
        left: project.position.left,
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ 
        y: [0, -15, 0], 
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
        
        {/* Drop-shadow container for the cloud */}
        <div className="relative" style={{ filter: isSelected ? 'drop-shadow(0 0 25px rgba(255,255,255,0.8))' : 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))' }}>
          
          {/* Main Base Pill */}
          <div className="relative w-64 md:w-80 h-20 md:h-24 bg-white/50 backdrop-blur-md rounded-full border-b border-white/40"></div>
          
          {/* Left Fluff */}
          <div className="absolute bottom-10 left-6 md:bottom-12 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-white/50 backdrop-blur-md rounded-full"></div>
          
          {/* Right/Top Fluff */}
          <div className="absolute bottom-12 right-10 md:bottom-14 md:right-12 w-28 h-28 md:w-40 md:h-40 bg-white/50 backdrop-blur-md rounded-full"></div>
          
          {/* Content Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 px-6 md:px-8 z-10">
            <div className={`p-3 md:p-4 rounded-full text-white shadow-inner transition-transform ${isSelected ? 'bg-gradient-to-r from-pink-400 to-orange-400 rotate-12' : 'bg-gradient-to-r from-pink-300 to-orange-300 group-hover:rotate-12 group-hover:scale-110'}`}>
              <project.Icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            
            <span className="font-extrabold text-slate-800 text-lg md:text-xl whitespace-nowrap hidden sm:block drop-shadow-md">
              {project.title.split('|')[0]}
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
