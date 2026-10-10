import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contactData } from '../data';

export default function ContactSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const links = [
    { label: 'E-posta',  value: contactData.email,    href: `mailto:${contactData.email}`,                    icon: '📧', color: '#f472b6' },
    { label: 'Telefon',  value: contactData.phone,    href: `tel:${contactData.phone.replace(/\s/g, '')}`,   icon: '📞', color: '#22d3ee' },
    { label: 'LinkedIn', value: contactData.linkedin, href: contactData.linkedinUrl,                          icon: '💼', color: '#8b5cf6' },
    { label: 'GitHub',   value: contactData.github,   href: contactData.githubUrl,                           icon: '🐙', color: '#34d399' },
    { label: 'Konum',    value: contactData.location, href: null,                                             icon: '📍', color: '#fbbf24' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-6 grid-bg"
      style={{ background: 'linear-gradient(180deg, #0e0b1a 0%, #07050f 100%)' }}
    >
      {/* Ambient orbs */}
      <div
        className="orb w-[400px] h-[400px] top-[-80px] right-[-80px] opacity-15"
        style={{ background: 'radial-gradient(circle, #f472b6, transparent 65%)' }}
      />
      <div
        className="orb w-[300px] h-[300px] bottom-[-60px] left-[-60px] opacity-10"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 65%)' }}
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
            style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', color: '#22d3ee' }}
          >
            💌 İletişim
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold gradient-text"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Bana Ulaş
          </h2>
          <p className="text-sm mt-2" style={{ color: 'rgba(160,154,184,0.6)' }}>
            Bir proje fikrin mi var? Seninle çalışmaktan mutluluk duyarım.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-3xl p-8 md:p-10 shadow-2xl"
          style={{ border: '1px solid rgba(139,92,246,0.15)' }}
        >
          <div className="flex flex-col gap-3">
            {links.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    id={`contact-${item.label.toLowerCase()}`}
                    className="flex items-center gap-4 rounded-2xl px-5 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${item.color}15`,
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: item.color }}>{item.label}</p>
                      <p className="text-sm font-medium truncate" style={{ color: 'rgba(241,239,249,0.8)' }}>{item.value}</p>
                    </div>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity"
                         fill="none" stroke={item.color} strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 rounded-2xl px-5 py-3.5"
                    style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}15` }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: item.color }}>{item.label}</p>
                      <p className="text-sm font-medium" style={{ color: 'rgba(241,239,249,0.8)' }}>{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-xs mt-10 font-medium"
          style={{ color: 'rgba(160,154,184,0.35)' }}
        >
          Made with 💜 by Süeda Nur Sarıcan · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
