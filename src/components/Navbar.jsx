import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#hero', label: 'Ana Sayfa', emoji: '🏠' },
  { href: '#education', label: 'Eğitim', emoji: '📚' },
  { href: '#skills', label: 'Beceriler', emoji: '⚡' },
  { href: '#projects', label: 'Projeler', emoji: '🚀' },
  { href: '#contact', label: 'İletişim', emoji: '💌' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Aktif bölüm tespiti
      const sections = ['hero', 'education', 'skills', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div
        className="mx-3 md:mx-auto md:max-w-4xl mt-3 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.8)'
            : 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(249,168,190,0.2), 0 2px 8px rgba(0,0,0,0.06)'
            : '0 4px 16px rgba(0,0,0,0.04)',
        }}
      >
        <div className="flex items-center justify-between px-4 py-2.5">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-lg">🐱</span>
            <span
              className="font-extrabold text-sm transition-colors"
              style={{ color: '#3d2b50', fontFamily: 'Nunito, sans-serif' }}
            >
              Süeda
              <span className="font-medium text-slate-400">.dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  id={`nav-${sectionId}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-slate-800'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
                  }`}
                  style={
                    isActive
                      ? {
                          background: 'rgba(249,168,190,0.2)',
                          color: '#be185d',
                        }
                      : {}
                  }
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-menu"
            className="md:hidden p-2 rounded-xl glass-soft"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
          >
            <motion.div
              animate={menuOpen ? 'open' : 'closed'}
              className="flex flex-col gap-1.5 w-5"
            >
              <motion.span
                variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
                className="block h-0.5 bg-slate-600 rounded-full"
              />
              <motion.span
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                className="block h-0.5 bg-slate-600 rounded-full"
              />
              <motion.span
                variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
                className="block h-0.5 bg-slate-600 rounded-full"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden border-t border-white/50"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-pink-50 hover:text-pink-700 transition-colors"
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
