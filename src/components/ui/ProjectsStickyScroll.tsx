"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const allProjects = [
  ...profile.projects.map(p => ({ ...p, type: 'MAIN' as const, url: undefined, language: undefined })),
  ...profile.openSource.map(p => ({ ...p, type: 'OSS' as const }))
];

export function ProjectsStickyScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll progress relative to the target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation.
  // We have 7 cards, each takes up space. We'll translate the track horizontally.
  // -100% would move the track completely out of view, so we stop before the end.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    // The massive height container that gives us room to scroll vertically
    <section ref={targetRef} className="relative h-[400vh] w-full mt-24">
      {/* The sticky container that locks in place while we scroll horizontally */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-12 left-4 md:left-12 z-20 flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-text">SELECTED WORK</h2>
            <FolderGit2 className="text-muted" />
        </div>

        {/* The horizontally moving track */}
        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-12 items-center">
          {allProjects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between p-8 md:p-12 w-[85vw] md:w-[600px] h-[500px] shrink-0 rounded-[32px] border border-border/50 bg-surface/30 backdrop-blur-md overflow-hidden hover:bg-accent/5 hover:border-accent/30 transition-colors duration-500"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-bg/50 text-xs uppercase tracking-widest font-mono text-muted group-hover:text-text transition-colors">
                    {project.type === 'MAIN' ? <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> : <FolderGit2 size={12} />}
                    {project.type === 'MAIN' ? 'Core Architecture' : 'Open Source'}
                  </span>
                  
                  {/* Hackathon Awards (if any) */}
                  {'award' in project && project.award && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-[10px] uppercase tracking-widest font-mono text-accent font-bold">
                      {project.award}
                    </span>
                  )}
                  
                  {project.url && (
                    <Link href={project.url} target="_blank" className="p-3 rounded-full bg-bg/50 border border-border/50 text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all hover:scale-110 ml-auto">
                      <ArrowUpRight size={18} />
                    </Link>
                  )}
                </div>

                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-6 group-hover:text-accent transition-colors duration-500">
                  {project.name}
                </h3>
                
                <p className="font-mono text-sm md:text-base text-muted leading-relaxed whitespace-pre-wrap flex-1 overflow-y-auto pr-4 custom-scrollbar">
                  {project.description}
                </p>
              </div>

              {project.language && (
                <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-border/30 pt-6">
                  <span className="font-mono text-xs text-muted/70 uppercase tracking-widest">Built with</span>
                  <span className="font-mono text-xs font-bold px-3 py-1.5 bg-border/30 rounded-md text-text">
                    {project.language}
                  </span>
                </div>
              )}
            </div>
          ))}
          {/* Padding element at the end of the track */}
          <div className="w-[10vw] shrink-0" />
        </motion.div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
