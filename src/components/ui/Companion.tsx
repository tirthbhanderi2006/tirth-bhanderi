'use client';
import { motion } from 'framer-motion';

export function Companion({ text }: { text: string }) {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex items-end gap-6 pointer-events-none">
       <motion.div 
         initial={{ opacity: 0, y: 10, scale: 0.95 }}
         animate={{ opacity: 1, y: 0, scale: 1 }}
         transition={{ delay: 0.5 }}
         className="bg-surface/90 backdrop-blur-sm border border-border p-4 shadow-2xl font-mono text-xs md:text-sm text-text max-w-[280px] md:max-w-sm relative"
       >
         {/* Arrow pointing right */}
         <div className="absolute -right-[7px] bottom-5 w-3 h-3 bg-surface border-r border-t border-border transform rotate-45" />
         
         <p className="mb-2 text-accent font-bold tracking-wider">The Ember</p>
         <p className="leading-relaxed text-muted">{text}</p>
       </motion.div>
       
       <motion.div 
         animate={{ y: [0, -12, 0], opacity: [0.7, 1, 0.7] }}
         transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
         className="w-10 h-10 bg-accent/20 rounded-full blur-xl relative flex items-center justify-center shrink-0"
       >
          <div className="w-3 h-3 bg-accent rounded-full blur-[2px] shadow-[0_0_15px_rgba(232,116,59,1)]" />
       </motion.div>
    </div>
  );
}
