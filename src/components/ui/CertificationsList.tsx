"use client";

import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content/profile";
import { Award, ArrowUpRight, FileText, X, Loader2, ExternalLink } from "lucide-react";
import { useState } from "react";

export function CertificationsList() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [isPdfLoading, setIsPdfLoading] = useState(true);

  const handleOpenCert = (file: string) => {
    setSelectedCert(file);
    setIsPdfLoading(true);
  };

  if (!profile.certifications || profile.certifications.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {profile.certifications.map((cert, i) => (
          <motion.button
            key={i}
            onClick={() => handleOpenCert(cert.file)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-surface/30 backdrop-blur-md border border-border/50 hover:bg-accent/5 hover:border-accent/30 transition-all duration-500 overflow-hidden min-h-[220px] text-left w-full"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />

            {/* Icon */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 z-10 pointer-events-none">
              <ArrowUpRight className="text-accent" size={24} />
            </div>
            
            <div className="relative z-10 mb-6 pointer-events-none">
              <div className="p-3 bg-bg/50 rounded-xl inline-flex items-center justify-center mb-6 border border-border/50 group-hover:border-accent/30 transition-colors">
                <FileText className="text-muted group-hover:text-accent transition-colors" size={24} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-text group-hover:text-accent transition-colors leading-snug pr-8 pb-1">
                {cert.name}
              </h3>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 mt-auto pt-6 border-t border-border/30 w-full pointer-events-none">
              <Award className="text-accent shrink-0" size={16} />
              <span className="font-mono text-[10px] md:text-xs text-muted uppercase tracking-widest font-bold">
                View Credential
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg/80 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] bg-surface rounded-[32px] border border-border/50 overflow-hidden shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-border/50 bg-surface/50 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-widest text-muted font-bold px-4">
                  Document Viewer
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-3 rounded-full hover:bg-accent/10 hover:text-accent transition-colors text-muted"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 w-full bg-black/5 relative">
                {isPdfLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-10">
                    <Loader2 className="animate-spin text-accent mb-4" size={40} strokeWidth={1.5} />
                    <p className="text-muted font-mono text-sm tracking-wider uppercase mb-6">Loading document...</p>
                    <a 
                      href={selectedCert} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-bg border border-border/50 rounded-full hover:border-accent hover:text-accent transition-all hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Open Document Directly
                    </a>
                  </div>
                )}
                <iframe
                  src={`${selectedCert}#view=FitH&toolbar=0`}
                  className={`w-full h-full border-none transition-opacity duration-700 ${isPdfLoading ? 'opacity-0' : 'opacity-100'}`}
                  title="Certificate Viewer"
                  onLoad={() => setIsPdfLoading(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
