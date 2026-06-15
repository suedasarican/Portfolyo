import { motion } from 'framer-motion';

export default function SkyBackground() {
  // Generate random background clouds
  const clouds = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80}%`,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 30 + 30, // 30-60s
    delay: Math.random() * -30, // Start at different times
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute right-0"
          style={{ top: cloud.top, scale: cloud.scale, opacity: cloud.opacity }}
          initial={{ x: '100vw' }}
          animate={{ x: '-100vw' }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cloud.delay
          }}
        >
          {/* Aesthetic fluffy cloud shape */}
          <div className="relative w-40 h-12 bg-white rounded-full blur-[2px]">
            <div className="absolute -top-6 left-6 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute -top-8 right-8 w-20 h-20 bg-white rounded-full"></div>
          </div>
        </motion.div>
      ))}
      
      {/* Sun / Light source */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
    </div>
  );
}
