import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Database, Award } from 'lucide-react';
import { aboutData } from '../data';

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-6 left-4 right-4 md:right-auto md:left-10 md:bottom-10 max-w-full md:max-w-lg lg:max-w-xl p-6 md:p-8 bg-white/30 backdrop-blur-md border border-white/50 shadow-xl rounded-3xl z-30 overflow-y-auto max-h-[50vh] md:max-h-none"
    >
      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-3 md:mb-5 tracking-tight drop-shadow-sm">
        Hakkımda
      </h3>
      <p className="text-sm text-slate-800 font-medium leading-relaxed mb-5 md:mb-6 border-b border-white/40 pb-4">
        {aboutData.aboutMe}
      </p>
      
      <div className="space-y-4 md:space-y-5">
        <div className="flex gap-4">
          <div className="mt-1 text-pink-500"><GraduationCap size={24} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm md:text-base">Eğitim & Yabancı Dil</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{aboutData.education} ({aboutData.languages})</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="mt-1 text-orange-500"><Code2 size={24} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm md:text-base">Yazılım & Web & Mobil</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{aboutData.skills}</p>
          </div>
        </div>
        
        <div className="flex gap-4 hidden sm:flex">
          <div className="mt-1 text-blue-500"><Brain size={24} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm md:text-base">Yapay Zeka & Veri Bilimi</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{aboutData.ai}</p>
          </div>
        </div>
        
        <div className="flex gap-4 hidden sm:flex">
          <div className="mt-1 text-purple-500"><Database size={24} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm md:text-base">Veri Tabanı</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{aboutData.databases}</p>
          </div>
        </div>

        <div className="flex gap-4 hidden md:flex">
          <div className="mt-1 text-yellow-600"><Award size={24} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm md:text-base">Sertifikalar</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{aboutData.certificates}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
