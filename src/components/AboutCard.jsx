import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Database, Award } from 'lucide-react';
import { aboutData } from '../data';

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 max-w-[90vw] md:max-w-[320px] p-4 md:p-5 bg-white/30 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl z-30 overflow-y-auto max-h-[40vh] md:max-h-[60vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <h3 className="text-lg md:text-xl font-extrabold text-slate-800 mb-2 md:mb-3 tracking-tight drop-shadow-sm">
        Hakkımda
      </h3>
      <p className="text-[11px] md:text-xs text-slate-800 font-medium leading-relaxed mb-3 md:mb-4 border-b border-white/40 pb-3">
        {aboutData.aboutMe}
      </p>
      
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="mt-1 text-pink-500"><GraduationCap size={16} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-xs">Eğitim & Yabancı Dil</h4>
            <p className="text-[10px] md:text-[11px] text-slate-700 leading-tight font-medium mt-1">{aboutData.education} ({aboutData.languages})</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <div className="mt-1 text-orange-500"><Code2 size={16} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-xs">Yazılım & Web & Mobil</h4>
            <p className="text-[10px] md:text-[11px] text-slate-700 leading-tight font-medium mt-1">{aboutData.skills}</p>
          </div>
        </div>
        
        <div className="flex gap-3 hidden sm:flex">
          <div className="mt-1 text-blue-500"><Brain size={16} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-xs">Yapay Zeka & Veri Bilimi</h4>
            <p className="text-[10px] md:text-[11px] text-slate-700 leading-tight font-medium mt-1">{aboutData.ai}</p>
          </div>
        </div>
        
        <div className="flex gap-3 hidden sm:flex">
          <div className="mt-1 text-purple-500"><Database size={16} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-xs">Veri Tabanı</h4>
            <p className="text-[10px] md:text-[11px] text-slate-700 leading-tight font-medium mt-1">{aboutData.databases}</p>
          </div>
        </div>

        <div className="flex gap-3 hidden md:flex">
          <div className="mt-1 text-yellow-600"><Award size={16} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-xs">Sertifikalar</h4>
            <p className="text-[10px] md:text-[11px] text-slate-700 leading-tight font-medium mt-1">{aboutData.certificates}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
