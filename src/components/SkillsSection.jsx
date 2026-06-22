import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '../data';

function SkillBar({ name, level, color, delay, inView }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay * 1000 + 200);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-semibold text-slate-600">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>
          {inView ? `${level}%` : '0%'}
        </span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-white/50 overflow-hidden shadow-inner">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : '0%' }}
          transition={{ duration: 1.2, delay: delay * 0.15, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #fdf4f5 0%, #f0f9ff 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full glass-soft" style={{ color: '#818cf8' }}>
            ⚡ Teknik Yetkinlikler
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#3d2b50', fontFamily: 'Nunito, sans-serif' }}>
            Becerilerim
          </h2>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gIdx * 0.15 }}
              className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Kategori başlık */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2.5 h-8 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${group.color}aa, ${group.color})` }}
                />
                <h3 className="text-sm font-extrabold uppercase tracking-wide" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>

              {/* Barlar */}
              {group.skills.map((skill, sIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={gIdx * 0.15 + sIdx * 0.12}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Ekstra etiket yığını */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 glass rounded-2xl p-6 shadow-md text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-slate-400">Ayrıca bildiğim teknolojiler</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'TypeScript', 'Java', 'NumPy', 'Pandas', 'TensorFlow', 'Keras',
              'Oracle DB', 'Docker', 'Figma', 'REST API', 'Albumentations', 'LightGBM',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full glass-soft text-slate-600 hover:text-slate-800 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
