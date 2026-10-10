import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#hero',      label: 'Ana Sayfa', emoji: '🏠' },
  { href: '#education', label: 'Eğitim',    emoji: '📚' },
  { href: '#skills',    label: 'Beceriler', emoji: '⚡' },
  { href: '#projects',  label: 'Projeler',  emoji: '🚀' },
  { href: '#contact',   label: 'İletişim',  emoji: '💌' },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['hero', 'education', 'skills', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div
        className="mx-4 md:mx-auto md:max-w-4xl mt-4 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10, 7, 22, 0.85)'
            : 'rgba(10, 7, 22, 0.5)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: `1px solid ${scrolled ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.1)'
            : 'none',
        }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
                boxShadow: '0 0 12px rgba(139,92,246,0.5)',
              }}
            >
              S
            </div>
            <span
              className="font-extrabold text-sm tracking-tight"
              style={{ color: '#f1eff9', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Süeda
              <span style={{ color: 'rgba(139,92,246,0.9)', fontWeight: 400 }}>.dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive  = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  id={`nav-${sectionId}`}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{
                    color: isActive ? '#22d3ee' : 'rgba(160,154,184,0.9)',
                    background: isActive ? 'rgba(34,211,238,0.08)' : 'transparent',
                    border: isActive ? '1px solid rgba(34,211,238,0.2)' : '1px solid transparent',
                  }}
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
            className="md:hidden p-2 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
          >
            <motion.div
              animate={menuOpen ? 'open' : 'closed'}
              className="flex flex-col gap-1.5 w-5"
            >
              <motion.span
                variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
                className="block h-0.5 rounded-full"
                style={{ background: 'rgba(241,239,249,0.8)' }}
              />
              <motion.span
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                className="block h-0.5 rounded-full"
                style={{ background: 'rgba(241,239,249,0.8)' }}
              />
              <motion.span
                variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
                className="block h-0.5 rounded-full"
                style={{ background: 'rgba(241,239,249,0.8)' }}
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
              className="overflow-hidden md:hidden"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                    style={{ color: 'rgba(160,154,184,0.9)' }}
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
