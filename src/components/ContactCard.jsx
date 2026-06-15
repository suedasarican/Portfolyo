import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { contactData } from '../data';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89C18.8 3.53 18.5 2 18.5 2s-1.5-.5-4.5 2a15.7 15.7 0 0 0-8 0C3 1.5 1.5 2 1.5 2s.3 1.53.5 2.11A5.5 5.5 0 0 0 .5 8c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute top-6 right-4 md:top-10 md:right-10 max-w-full md:max-w-sm p-5 md:p-6 bg-white/30 backdrop-blur-md border border-white/50 shadow-xl rounded-3xl z-30"
    >
      <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4 tracking-tight drop-shadow-sm">
        İletişim
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="text-blue-600"><Mail size={20} /></div>
          <a href={`mailto:${contactData.email}`} className="text-sm font-medium text-slate-700 hover:text-pink-600 transition-colors">
            {contactData.email}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-slate-800"><LinkedinIcon /></div>
          <a href={`https://${contactData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-pink-600 transition-colors">
            {contactData.linkedin.replace('www.', '')}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-slate-800"><GithubIcon /></div>
          <a href={`https://${contactData.github}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 hover:text-pink-600 transition-colors">
            {contactData.github.replace('https://', '')}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-red-500"><MapPin size={20} /></div>
          <span className="text-sm font-medium text-slate-700">
            {contactData.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
