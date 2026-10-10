import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 340 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              style={{
                background: 'rgba(10, 7, 22, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: `1px solid ${project.accent}30`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent gradient bar */}
              <div
                className="h-1 w-full rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${project.accent}, #8b5cf6, ${project.accent})` }}
              />

              <div className="p-6 md:p-8 relative">
                {/* Close button */}
                <button
                  id="modal-close-btn"
                  onClick={onClose}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(160,154,184,0.7)',
                  }}
                >
                  <X size={16} />
                </button>

                {/* Content: Image + Text */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                  {/* Left: Image */}
                  <div className="md:w-5/12 flex-shrink-0">
                    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-square"
                         style={{ border: `1px solid ${project.accent}20` }}>
                      <img
                        src={project.image}
                        alt={`${project.title} ekran görüntüsü`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/600x400/1a1030/8b5cf6?text=${encodeURIComponent(project.title)}&font=inter`;
                        }}
                      />
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: project.accent + '18',
                            color: project.accent,
                            border: `1px solid ${project.accent}35`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link if available */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`modal-github-${project.id}`}
                        className="mt-4 flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg w-full justify-center"
                        style={{
                          background: 'rgba(139,92,246,0.12)',
                          border: '1px solid rgba(139,92,246,0.3)',
                          color: '#c4b5fd',
                        }}
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub'da Gör
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  {/* Right: Text */}
                  <div className="flex-1">
                    {/* Emoji & title */}
                    <div className="flex items-start gap-3 mb-1">
                      <span className="text-3xl">{project.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2
                            className="text-2xl font-extrabold leading-tight"
                            style={{ color: '#f1eff9', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {project.title}
                          </h2>
                          {project.badge && (
                            <span
                              className="badge-chip"
                              style={{
                                background: 'rgba(34,211,238,0.12)',
                                border: '1px solid rgba(34,211,238,0.3)',
                                color: '#22d3ee',
                                fontSize: '10px',
                              }}
                            >
                              {project.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold mt-0.5" style={{ color: project.accent }}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="my-4 h-px rounded-full w-full"
                      style={{ background: `linear-gradient(90deg, ${project.accent}66, transparent)` }}
                    />

                    {/* Description */}
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(160,154,184,0.9)' }}>
                      {project.description}
                    </p>

                    {/* Info box */}
                    <div
                      className="mt-5 rounded-xl p-4"
                      style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}
                    >
                      <p className="text-xs font-semibold" style={{ color: 'rgba(196,181,253,0.7)' }}>
                        💡 Detaylı bilgi ve kaynak kod için GitHub bağlantısını inceleyin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
