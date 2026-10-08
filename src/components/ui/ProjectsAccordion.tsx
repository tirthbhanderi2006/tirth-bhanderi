"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content/profile";
import { ExternalLink, FolderGit2, FolderOpen, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const allProjects = [
  ...profile.projects.map(p => ({ 
    ...p, 
    type: 'MAIN',
    url: undefined,
    language: undefined
  })),
  ...profile.openSource.map(p => ({ 
    ...p, 
    type: 'OSS',
  }))
];

export function ProjectsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full border-t border-border mt-8">
      {allProjects.map((project, i) => {
        const isOpen = openIndex === i;
        
        return (
          <div 
            key={i} 
            className="border-b border-border group" 
            data-state={isOpen ? "open" : "closed"}
          >
            <div className="flex items-stretch hover:bg-accent/5 transition-colors duration-300">
              
              {/* Left Icon Area */}
              <div className="w-16 md:w-24 flex items-center justify-center shrink-0">
                <div className="p-2 rounded-lg border border-border bg-bg text-muted group-hover:text-accent transition-colors">
                  {project.type === 'MAIN' ? <FolderOpen size={20} /> : <FolderGit2 size={20} />}
                </div>
              </div>
              
              {/* Center Content Area */}
              <div className="flex-1 border-l border-dashed border-border flex items-center">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex flex-1 items-center gap-4 p-4 md:p-6 text-left outline-none"
                >
                  <div className="flex-1">
                    <h3 className="mb-1 leading-snug font-serif text-xl md:text-2xl text-text group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted">
                      <span>{project.type === 'MAIN' ? 'Architecture' : 'Open Source'}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{project.language || 'Full Stack'}</span>
                    </div>
                  </div>
                  
                  {/* Right Actions */}
                  <div className="flex items-center gap-4 shrink-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Expandable Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border shadow-inner bg-surface/30">
                    <div className="p-6 md:p-8 ml-16 md:ml-24 border-l border-dashed border-border">
                      <p className="font-mono text-sm leading-relaxed text-text/80 mb-6 max-w-3xl whitespace-pre-wrap">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-md border border-border bg-bg px-2 py-1 font-mono text-xs text-muted">
                          {project.type === 'MAIN' ? 'Core Project' : 'Side Project'}
                        </span>
                        {project.language && (
                           <span className="inline-flex items-center rounded-md border border-border bg-bg px-2 py-1 font-mono text-xs text-muted">
                             {project.language}
                           </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
