"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const allProjects = [
  ...profile.projects.map(p => ({ ...p, type: 'MAIN' as const, url: undefined, language: undefined })),
  ...profile.openSource.map(p => ({ ...p, type: 'OSS' as const }))
];

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
      {allProjects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-[32px] border border-border/50 bg-surface/30 backdrop-blur-sm overflow-hidden hover:bg-accent/5 hover:border-accent/30 transition-colors duration-500 ${
            i === 0 || i === 3 || i === 6 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
          }`}
        >
          {/* Subtle gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100" />
          
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-bg/50 text-[10px] uppercase tracking-widest font-mono text-muted group-hover:text-text transition-colors">
                {project.type === 'MAIN' ? <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> : <FolderGit2 size={12} />}
                {project.type === 'MAIN' ? 'Core Architecture' : 'Open Source'}
              </span>
              {project.url && (
                <Link href={project.url} target="_blank" className="p-2 rounded-full bg-bg/50 border border-border/50 text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all hover:scale-110">
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>

            <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-6 group-hover:text-accent transition-colors duration-500">
              {project.name}
            </h3>
            
            <p className="font-mono text-sm text-muted leading-relaxed whitespace-pre-wrap flex-1">
              {project.description}
            </p>
          </div>

          {project.language && (
            <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-border/30 pt-6">
              <span className="font-mono text-xs text-muted/70">Built with</span>
              <span className="font-mono text-xs font-bold px-2 py-1 bg-border/30 rounded-md text-text">
                {project.language}
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
