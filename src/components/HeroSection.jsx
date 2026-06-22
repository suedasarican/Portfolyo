import { motion } from 'framer-motion';
import CatMascot from './CatMascot';
import { MapPin, Mail, Phone } from 'lucide-react';
import { contactData } from '../data';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fdf4f5 0%, #fce7f3 30%, #e0f2fe 70%, #f0fdf4 100%)',
      }}
    >
      {/* Dekoratif arka plan daireleri */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #f9a8d4, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)' }}
      />
      <div
        className="absolute top-[40%] left-[10%] w-[200px] h-[200px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #fcd34d, transparent 70%)' }}
      />

      {/* Yıldız/nokta süslemeleri */}
      {[
        { top: '15%', left: '8%', size: 6, delay: 0 },
        { top: '25%', right: '12%', size: 4, delay: 0.8 },
        { top: '60%', right: '8%', size: 8, delay: 1.5 },
        { top: '75%', left: '15%', size: 5, delay: 0.4 },
        { top: '45%', left: '5%', size: 3, delay: 2 },
      ].map((star, i) => (
        <div
          key={i}
          className="absolute shimmer-star"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animationDelay: `${star.delay}s`,
          }}
        >
          <svg width={star.size * 2} height={star.size * 2} viewBox="0 0 20 20">
            <polygon
              points="10,1 12.5,7.5 20,7.5 14,12 16.5,19 10,15 3.5,19 6,12 0,7.5 7.5,7.5"
              fill="#f9a8d4"
            />
          </svg>
        </div>
      ))}

      {/* İçerik */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Sol: Kedi + kartlar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          {/* Kedi maskot + parlama */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-2xl scale-110"
              style={{ background: 'radial-gradient(circle, #f9a8d4, #fcd34d)' }}
            />
            <div className="relative glass rounded-3xl p-6 shadow-xl">
              <CatMascot size={150} />
            </div>
          </div>

          {/* İletişim mini bilgileri */}
          <div className="flex flex-col gap-2 w-full">
            {[
              { icon: <MapPin size={13} />, text: contactData.location, color: '#f9a8d4' },
              { icon: <Mail size={13} />, text: contactData.email, color: '#93c5fd', href: `mailto:${contactData.email}` },
              { icon: <Phone size={13} />, text: contactData.phone, color: '#6ee7b7' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-soft rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className="text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium truncate">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-xs text-slate-600 font-medium">{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sağ: Ana metin */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">Öğrenci & Geliştirici</span>
          </motion.div>

          {/* İsim */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            <span style={{ color: '#3d2b50' }}>Süeda Nur</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #f472b6, #818cf8, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sarıcan
            </span>
          </motion.h1>

          {/* Ünvan */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-base md:text-lg font-semibold mb-6"
            style={{ color: '#7c6080' }}
          >
            Bilgisayar Mühendisliği Öğrencisi
            <span className="mx-2 opacity-40">|</span>
            Full-Stack & Yapay Zeka Geliştirici
          </motion.p>

          {/* Kısa tanıtım */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass rounded-2xl p-5 shadow-md max-w-xl mb-8"
          >
            <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
              Modern web teknolojileri ve yapay zeka üzerine uzmanlaşıyor;{' '}
              <span className="font-bold" style={{ color: '#f472b6' }}>algoritmaları</span> sadece eğiten değil,{' '}
              <span className="font-bold" style={{ color: '#818cf8' }}>kullanıcı dostu</span> ve uçtan uca çalışabilir{' '}
              <span className="font-bold" style={{ color: '#34d399' }}>yazılım ürünlerine</span> dönüştüren sistemler tasarlıyorum.
            </p>
          </motion.div>

          {/* Sosyal linkler */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href={contactData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-700 hover:text-slate-900 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={contactData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #818cf8, #a78bfa)' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="#projects"
              id="hero-projects-link"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #f9a8d4, #fca5a5)' }}
            >
              🚀 Projeleri Gör
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll ok */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#education" className="flex flex-col items-center gap-1 group">
          <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">keşfet</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-6 rounded-full glass flex items-center justify-center shadow-sm"
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="#f9a8d4" strokeWidth="2.5">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
