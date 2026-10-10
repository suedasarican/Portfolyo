import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data';

export default function EducationSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 px-6 grid-bg"
      style={{ background: 'linear-gradient(180deg, #0a0717 0%, #0d0b1e 100%)' }}
    >
      {/* Ambient orb */}
      <div
        className="orb w-[400px] h-[400px] top-[-100px] right-[-80px] opacity-15"
        style={{ background: 'radial-gradient(circle, #f472b6, transparent 65%)' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
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
            📚 Eğitim Yolculuğu
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold gradient-text-warm"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Öğrenme Sürecim
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, #f472b6, #8b5cf6, #22d3ee)' }}
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
                {/* Timeline dot */}
                <div
                  className="timeline-dot absolute left-5 top-5 w-6 h-6 rounded-full flex items-center justify-center text-xs z-10"
                  style={{
                    background: item.color,
                    border: '3px solid #0d0b1e',
                    boxShadow: `0 0 12px ${item.color}66`,
                  }}
                >
                  <span style={{ fontSize: '10px' }}>{item.icon}</span>
                </div>

                {/* Card */}
                <div
                  className="flex-1 glass rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-default"
                  style={{ border: `1px solid ${item.color}22` }}
                >
                  {/* Year badge */}
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ background: item.color + '18', color: item.color, border: `1px solid ${item.color}33` }}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-base md:text-lg font-extrabold mb-0.5" style={{ color: '#f1eff9' }}>
                    {item.school}
                  </h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: item.color }}>
                    {item.degree}
                  </p>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(160,154,184,0.8)' }}>
                    {item.detail}
                  </p>

                  {/* Hover accent line */}
                  <div
                    className="mt-3 h-px rounded-full w-0 group-hover:w-full transition-all duration-500"
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
