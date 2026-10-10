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
        <span className="text-sm font-semibold" style={{ color: 'rgba(241,239,249,0.85)' }}>{name}</span>
        <span className="text-xs font-bold tabular-nums" style={{ color }}>
          {inView ? `${level}%` : '0%'}
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : '0%' }}
          transition={{ duration: 1.3, delay: delay * 0.15, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 10px ${color}55`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const extraTags = [
    'TypeScript', 'FastAPI', 'LangGraph', 'RAG', 'Java', 'NumPy', 'Pandas',
    'TensorFlow', 'Keras', 'Oracle DB', 'Docker', 'Figma', 'REST API',
    'Albumentations', 'LightGBM', 'Qdrant',
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-6 grid-bg"
      style={{ background: 'linear-gradient(180deg, #0d0b1e 0%, #0a0717 100%)' }}
    >
      {/* Ambient orb */}
      <div
        className="orb w-[500px] h-[500px] bottom-[-100px] left-[-100px] opacity-12"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent 65%)' }}
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
            style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', color: '#8b5cf6' }}
          >
            ⚡ Teknik Yetkinlikler
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold gradient-text"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Becerilerim
          </h2>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gIdx * 0.15 }}
              className="glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: `1px solid ${group.color}15` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1.5 h-8 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 8px ${group.color}88` }}
                />
                <h3
                  className="text-xs font-extrabold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Bars */}
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

        {/* Extra tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 glass rounded-2xl p-6 text-center"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(160,154,184,0.5)' }}>
            Ayrıca bildiğim teknolojiler
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {extraTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: 'rgba(139,92,246,0.08)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  color: 'rgba(196,181,253,0.8)',
                }}
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
