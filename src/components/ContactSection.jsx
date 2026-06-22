import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contactData } from '../data';
import CatMascot from './CatMascot';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const links = [
    {
      label: 'E-posta',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: '📧',
      color: '#f9a8d4',
    },
    {
      label: 'Telefon',
      value: contactData.phone,
      href: `tel:${contactData.phone.replace(/\s/g, '')}`,
      icon: '📞',
      color: '#93c5fd',
    },
    {
      label: 'LinkedIn',
      value: contactData.linkedin,
      href: contactData.linkedinUrl,
      icon: '💼',
      color: '#818cf8',
    },
    {
      label: 'GitHub',
      value: contactData.github,
      href: contactData.githubUrl,
      icon: '🐙',
      color: '#6ee7b7',
    },
    {
      label: 'Konum',
      value: contactData.location,
      href: null,
      icon: '📍',
      color: '#fcd34d',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #fdf4f5 0%, #fce7f3 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full glass-soft" style={{ color: '#34d399' }}>
            💌 İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#3d2b50', fontFamily: 'Nunito, sans-serif' }}>
            Bana Ulaş
          </h2>
        </motion.div>

        {/* İletişim kartı */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center gap-8"
        >
          {/* Kedi ve mesaj */}
          <div className="flex flex-col items-center gap-3 md:w-44 flex-shrink-0">
            <CatMascot size={110} />
            <div className="glass-soft rounded-2xl px-3 py-2 text-center max-w-[130px]">
              <p className="text-xs font-semibold" style={{ color: '#7c6080' }}>
                Merhaba! 👋
                <br />
                <span className="text-slate-400">Yazalım birlikte!</span>
              </p>
            </div>
          </div>

          {/* İletişim listesi */}
          <div className="flex-1 w-full space-y-3">
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
                    className="flex items-center gap-3 glass-soft rounded-xl px-4 py-3 hover:shadow-md transition-all group hover:-translate-y-0.5"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide" style={{ color: item.color }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-auto text-slate-300 group-hover:text-slate-500 transition-colors flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 glass-soft rounded-xl px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide" style={{ color: item.color }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-slate-600">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer notu */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-xs text-slate-400 mt-8 font-medium"
        >
          Made with 💗 by Süeda Nur Sarıcan · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
