import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data';

function ProjectCard({ project, onClick, index }) {
  const ref    = useRef(null);
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
        className={`project-card w-full text-left rounded-2xl overflow-hidden shadow-xl cursor-pointer group block ${project.featured ? 'featured-card' : 'glass'}`}
        style={{
          border: project.featured
            ? '1px solid rgba(34,211,238,0.25)'
            : `1px solid ${project.accent}18`,
        }}
      >
        {/* Image area */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = `https://placehold.co/600x400/1a1030/8b5cf6?text=${encodeURIComponent(project.title)}&font=inter`;
            }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Featured glow */}
          {project.featured && (
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: 'linear-gradient(135deg, #22d3ee22, #8b5cf622)' }}
            />
          )}

          {/* Emoji badge */}
          <div
            className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-lg"
            style={{ background: 'rgba(10,7,22,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {project.emoji}
          </div>

          {/* Competition badge */}
          {project.badge && (
            <div
              className="absolute top-3 right-3 badge-chip"
              style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(139,92,246,0.15))',
                border: '1px solid rgba(34,211,238,0.3)',
                color: '#22d3ee',
              }}
            >
              {project.badge}
            </div>
          )}

          {/* Hover hint */}
          <div
            className="absolute bottom-3 right-3 rounded-lg px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(10,7,22,0.85)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span className="text-xs font-bold" style={{ color: '#f1eff9' }}>detay →</span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <h3
            className="text-base font-extrabold mb-0.5 truncate"
            style={{ color: '#f1eff9' }}
          >
            {project.title}
          </h3>
          <p className="text-xs font-semibold mb-2" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'rgba(160,154,184,0.7)' }}>
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: project.accent + '18', color: project.accent, border: `1px solid ${project.accent}30` }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(160,154,184,0.6)' }}
              >
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
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 grid-bg"
      style={{ background: 'linear-gradient(180deg, #0a0717 0%, #0e0b1a 100%)' }}
    >
      {/* Ambient orb */}
      <div
        className="orb w-[500px] h-[500px] top-[10%] right-[-150px] opacity-12"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 65%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.25)', color: '#f472b6' }}
          >
            🚀 Proje Vitrini
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold gradient-text"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Yaptıklarım
          </h2>
          <p className="text-sm mt-2 font-medium" style={{ color: 'rgba(160,154,184,0.6)' }}>
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
