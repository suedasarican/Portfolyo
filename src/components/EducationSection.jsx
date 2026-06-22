import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data';

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #fce7f3 0%, #fdf4f5 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full glass-soft" style={{ color: '#f472b6' }}>
            📚 Eğitim Yolculuğu
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#3d2b50', fontFamily: 'Nunito, sans-serif' }}>
            Öğrenme Sürecim
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Dikey çizgi */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(180deg, #f9a8d4, #93c5fd, #6ee7b7)' }}
          />

          <div className="space-y-8">
            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
                className="relative flex items-start gap-6 pl-20"
              >
                {/* Timeline nokta */}
                <div
                  className="timeline-dot absolute left-5 top-6 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center text-base z-10"
                  style={{ background: item.color, borderColor: 'white' }}
                >
                  <span style={{ fontSize: '12px' }}>{item.icon}</span>
                </div>

                {/* Kart */}
                <div className="flex-1 glass rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow group">
                  {/* Yıl badge */}
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: item.color + '33', color: item.color }}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-base md:text-lg font-extrabold mb-0.5" style={{ color: '#3d2b50' }}>
                    {item.school}
                  </h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#7c6080' }}>
                    {item.degree}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>

                  {/* Hover aksan çizgi */}
                  <div
                    className="mt-3 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
