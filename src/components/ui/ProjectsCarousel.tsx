"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { FolderGit2, ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const allProjects = [
  ...profile.projects.map(p => ({ ...p, type: 'MAIN' as const, url: undefined, language: undefined })),
  ...profile.openSource.map(p => ({ ...p, type: 'OSS' as const }))
];

export function ProjectsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full mt-8">
      {/* Scroll Controls (Desktop only) */}
      <div className="hidden md:flex absolute -top-20 right-0 gap-4">
        <button 
          onClick={() => scroll('left')}
          className="p-3 rounded-full border border-border/50 bg-surface/30 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300"
          aria-label="Scroll left"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="p-3 rounded-full border border-border/50 bg-surface/30 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300"
          aria-label="Scroll right"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 hide-scrollbar scroll-smooth w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] px-[calc(50vw-50%)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] group relative flex flex-col justify-between p-8 md:p-12 rounded-[32px] border border-border/50 bg-surface/30 backdrop-blur-sm overflow-hidden hover:bg-accent/5 hover:border-accent/30 transition-colors duration-500"
          >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-bg/50 text-xs uppercase tracking-widest font-mono text-muted group-hover:text-text transition-colors">
                  {project.type === 'MAIN' ? <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> : <FolderGit2 size={12} />}
                  {project.type === 'MAIN' ? 'Core Architecture' : 'Open Source'}
                </span>
                {project.url && (
                  <Link href={project.url} target="_blank" className="p-3 rounded-full bg-bg/50 border border-border/50 text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all hover:scale-110">
                    <ArrowUpRight size={18} />
                  </Link>
                )}
              </div>

              <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8 group-hover:text-accent transition-colors duration-500">
                {project.name}
              </h3>
              
              <p className="font-mono text-sm md:text-base text-muted leading-relaxed whitespace-pre-wrap flex-1 max-w-lg">
                {project.description}
              </p>
            </div>

            {project.language && (
              <div className="relative z-10 mt-12 flex items-center gap-4 border-t border-border/30 pt-6">
                <span className="font-mono text-xs text-muted/70 uppercase tracking-widest">Built with</span>
                <span className="font-mono text-xs font-bold px-3 py-1.5 bg-border/30 rounded-md text-text">
                  {project.language}
                </span>
              </div>
            )}
          </motion.div>
        ))}
        {/* Empty padding element to ensure the last card can be scrolled past to look nice */}
        <div className="shrink-0 w-8 md:w-24" />
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
