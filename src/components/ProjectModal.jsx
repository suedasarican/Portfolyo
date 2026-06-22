import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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
            className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Üst gradient şerit */}
              <div
                className={`h-2 w-full rounded-t-3xl bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6 md:p-8">
                {/* Kapat butonu */}
                <button
                  id="modal-close-btn"
                  onClick={onClose}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all hover:scale-110 glass-soft shadow-sm"
                >
                  <X size={18} />
                </button>

                {/* İçerik: Resim + Metin */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  
                  {/* Sol: Görsel */}
                  <div className="md:w-5/12 flex-shrink-0">
                    <div className="rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-square">
                      <img
                        src={project.image}
                        alt={`${project.title} ekran görüntüsü`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/600x400/fce7f3/be185d?text=${encodeURIComponent(project.title)}&font=nunito`;
                        }}
                      />
                    </div>

                    {/* Teknoloji etiketleri */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: project.accent + '33',
                            color: project.accent,
                            border: `1px solid ${project.accent}55`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sağ: Metin */}
                  <div className="flex-1">
                    {/* Emoji & başlık */}
                    <div className="flex items-start gap-3 mb-1">
                      <span className="text-3xl">{project.emoji}</span>
                      <div>
                        <h2
                          className="text-2xl font-extrabold leading-tight"
                          style={{ color: '#3d2b50', fontFamily: 'Nunito, sans-serif' }}
                        >
                          {project.title}
                        </h2>
                        <p className="text-sm font-semibold mt-0.5" style={{ color: '#7c6080' }}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Ayırıcı */}
                    <div
                      className="my-4 h-0.5 rounded-full w-full"
                      style={{ background: `linear-gradient(90deg, ${project.accent}88, transparent)` }}
                    />

                    {/* Açıklama */}
                    <p className="text-sm md:text-base leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    {/* Görsel placeholder notu */}
                    <div className="mt-5 glass-soft rounded-xl p-3">
                      <p className="text-xs text-slate-400 italic">
                        💡 Projeye ait gerçek görsel buraya eklenecek.
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
