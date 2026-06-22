import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data';

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      <button
        id={`project-card-${project.id}`}
        onClick={() => onClick(project)}
        className="project-card w-full text-left glass rounded-2xl overflow-hidden shadow-md cursor-pointer group block"
        style={{ border: `1px solid ${project.accent}33` }}
      >
        {/* Kart üst: Görsel */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 group-hover:opacity-20 transition-opacity`}
          />
          {/* Emoji badge */}
          <div
            className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-lg glass"
          >
            {project.emoji}
          </div>
          {/* Tıkla yönlendirmesi */}
          <div className="absolute bottom-3 right-3 glass-soft rounded-lg px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-bold text-slate-700">detay →</span>
          </div>
        </div>

        {/* Kart alt: Metin */}
        <div className="p-4">
          <h3
            className="text-base font-extrabold mb-0.5 truncate"
            style={{ color: '#3d2b50' }}
          >
            {project.title}
          </h3>
          <p className="text-xs font-semibold mb-2" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech chips (ilk 3) */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: project.accent + '22',
                  color: project.accent,
                }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-slate-400 bg-slate-100">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export default function ProjectsSection({ onProjectClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #fdf4f5 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full glass-soft" style={{ color: '#f472b6' }}>
            🚀 Proje Vitrini
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#3d2b50', fontFamily: 'Nunito, sans-serif' }}>
            Yaptıklarım
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Kartlara tıklayarak proje detaylarını görüntüleyebilirsin ✨
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
