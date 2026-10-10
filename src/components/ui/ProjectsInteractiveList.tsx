"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

const allProjects = [
  ...profile.projects.map(p => ({ ...p, type: 'MAIN' as const, url: undefined, language: undefined })),
  ...profile.openSource.map(p => ({ ...p, type: 'OSS' as const }))
];

export function ProjectsInteractiveList() {
  return (
    <div className="w-full border-t border-border/50 mt-8">
      {allProjects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 border-b border-border/50 hover:bg-accent/5 transition-colors px-4 md:px-6"
        >
          {/* Left Column: Title and Metadata */}
          <div className="w-full lg:w-1/3 shrink-0 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs text-muted/50">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-border/50 bg-bg/50 text-[10px] uppercase tracking-widest font-mono text-muted group-hover:text-text transition-colors">
                  {project.type === 'MAIN' ? <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> : <FolderGit2 size={12} />}
                  {project.type === 'MAIN' ? 'Core Architecture' : 'Open Source'}
                </span>
                
                {/* Hackathon Awards (if any) */}
                {'award' in project && project.award && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-accent/30 bg-accent/10 text-[10px] uppercase tracking-widest font-mono text-accent font-bold">
                    {project.award}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-text group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
            </div>
            
            {/* Tech Stack Single Chip */}
            {project.language && (
              <div className="mt-6">
                <span className="inline-flex items-center rounded-md bg-text/5 px-2.5 py-1 font-mono text-[11px] text-text border border-text/10">
                  Built with {project.language}
                </span>
              </div>
            )}
          </div>

          {/* Middle/Right Column: Description and Link */}
          <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-start justify-between">
            <p className="font-mono text-sm text-muted leading-relaxed whitespace-pre-wrap max-w-2xl">
              {project.description}
            </p>
            
            {project.url && (
              <Link 
                href={project.url} 
                target="_blank" 
                className="shrink-0 inline-flex items-center justify-center p-3 rounded-full bg-bg border border-border hover:border-accent hover:text-accent hover:bg-accent/10 transition-all group-hover:scale-110"
                aria-label="View Project"
              >
                <ArrowUpRight size={18} />
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
