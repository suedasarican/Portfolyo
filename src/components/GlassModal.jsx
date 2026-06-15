import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function GlassModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/10"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md p-6 overflow-hidden bg-white/40 border border-white/60 shadow-2xl rounded-3xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-600 hover:text-slate-900 transition-colors bg-white/30 rounded-full hover:bg-white/50"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-300 to-orange-300 text-white rounded-2xl shadow-inner">
                <project.Icon size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 leading-tight">
                {project.title}
              </h2>
            </div>
            
            <div className="p-4 bg-white/30 rounded-2xl border border-white/40">
              <p className="text-slate-700 leading-relaxed font-medium">
                {project.content}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
