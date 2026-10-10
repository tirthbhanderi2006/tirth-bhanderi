"use client";

import { ProjectsStickyScroll } from "@/components/ui/ProjectsStickyScroll";
import { CertificationsList } from "@/components/ui/CertificationsList";
import { motion, Variants } from "framer-motion";
import { profile } from "@/content/profile";
import { personal } from "@/content/personal";
import { ArrowUpRight, Download, Mail, Briefcase, GraduationCap, FolderGit2, Terminal, Layout, Smartphone, Database, Server, BrainCircuit, Wrench, Award } from "lucide-react";
import Image from "next/image";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5.3 5.3 0 0 0 0-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.3 5.3 0 0 0 0 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76-.7.6-1 1.5-1 2.4V22"></path><path d="M8 22v-4"></path></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-text selection:bg-accent/20 selection:text-bg">
      <InteractiveBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-24">
        
        {/* HERO SECTION */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Top Row: Intro & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Intro Card */}
            <motion.div variants={fadeUp} className="lg:col-span-8 bg-surface/50 backdrop-blur-xl border border-border/60 rounded-[32px] p-8 md:p-12 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div>
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg/50 mb-8">
                  <span className="text-xl font-labelle font-bold tracking-wider text-text">#opentowork</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] tracking-tight mb-2 pb-4">
                  Hi, I'm <span className="font-sans font-bold italic text-accent">Tirth</span>.<br />
                  <span className="text-muted font-sans font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight inline-block leading-normal pb-2 pt-2">Software Engineer.</span>
                </motion.h1>
              </div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-8">
                <a href="#work" className="px-6 py-3 rounded-full bg-text text-bg font-medium hover:scale-105 transition-transform flex items-center gap-2">
                  View Work <ArrowUpRight size={18} />
                </a>
                <a href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-full border border-border hover:bg-surface transition-colors flex items-center gap-2">
                  Resume <Download size={18} />
                </a>
              </motion.div>
            </motion.div>

            {/* Photo Card */}
            <motion.div variants={fadeUp} className="lg:col-span-4 bg-surface border border-border/60 rounded-[32px] overflow-hidden relative min-h-[400px] group">
              <Image 
                src="/TIRTH-PORTFOLIO.png" 
                alt="Tirth Patel" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 border border-border/20 rounded-[32px] pointer-events-none" />
            </motion.div>
          </div>

          {/* Bottom Row: About & Socials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div id="about" variants={fadeUp} className="lg:col-span-2 bg-surface/50 backdrop-blur-xl border border-border/60 rounded-[32px] p-8 md:p-12 flex flex-col justify-center">
              <p className="font-mono text-accent text-xs mb-6 tracking-widest uppercase">01 // About</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed pb-2">
                I'm a BTech student from Gujarat with a foundation in software development and AI. <br className="hidden lg:block" />
                I love figuring out <span className="font-sans italic font-semibold text-accent">how things work under the hood</span>, building intelligent systems, and pushing my engineering boundaries.
              </h2>
            </motion.div>
            
            <motion.div variants={fadeUp} className="lg:col-span-1 bg-accent text-bg rounded-[32px] p-8 md:p-12 flex flex-col justify-between">
              <div>
                <p className="font-mono text-sm uppercase tracking-widest opacity-80 mb-2">Connect</p>
                <h3 className="text-3xl lg:text-4xl font-serif leading-tight">Let's build<br />something.</h3>
              </div>
              <div className="flex gap-4 mt-8">
                <a href={profile.identity.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-bg text-text flex items-center justify-center hover:scale-110 transition-transform">
                  <GithubIcon />
                </a>
                <a href={profile.identity.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-bg text-text flex items-center justify-center hover:scale-110 transition-transform">
                  <LinkedinIcon />
                </a>
                <a href={`mailto:${profile.identity.email}`} className="w-12 h-12 rounded-full bg-bg text-text flex items-center justify-center hover:scale-110 transition-transform">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(profile.skills).map(([category, items], idx) => {
              const icons: any = {
                languages: <Terminal size={14} />,
                frontend: <Layout size={14} />,
                mobile: <Smartphone size={14} />,
                backend: <Server size={14} />,
                databases: <Database size={14} />,
                ai_ml: <BrainCircuit size={14} />,
                tools: <Wrench size={14} />,
              };
              return (
              <motion.div variants={fadeUp} key={category} className="bg-surface/50 backdrop-blur-xl border border-border/60 rounded-[32px] p-6 md:p-8 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-accent text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
                  {icons[category] || <Terminal size={14} />} {category.replace('_', ' ')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item: string, i: number) => (
                    <span key={i} className="text-xs font-mono text-muted px-3 py-1.5 bg-border/40 border border-border/50 rounded-full">{item}</span>
                  ))}
                </div>
              </motion.div>
            )})}
          </div>
        </motion.section>

        {/* WORK SECTION (Sticky Horizontal Scroll) */}
        <div id="work">
          <ProjectsStickyScroll />
        </div>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="pt-12 grid lg:grid-cols-2 gap-12"
        >
          {/* Experience */}
          <div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl mb-8 flex items-center gap-3">
              <Briefcase className="text-accent" size={32} /> Experience
            </motion.h2>
            <div className="space-y-6">
              {profile.experience.map((exp, i) => (
                <motion.div variants={fadeUp} key={i} className="group p-6 rounded-2xl bg-surface/50 border border-border/60 hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{exp.company}</h3>
                      <p className="text-muted text-sm mt-1">{exp.role}</p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface border border-border whitespace-nowrap">{exp.date}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent" size={32} /> Education
            </motion.h2>
            <div className="space-y-6">
              {profile.education.map((edu, i) => (
                <motion.div variants={fadeUp} key={i} className="group p-6 rounded-2xl bg-surface/50 border border-border/60 hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{edu.institution}</h3>
                      <p className="text-muted text-sm mt-1">{edu.degree}</p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface border border-border whitespace-nowrap">{edu.date}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CERTIFICATIONS SECTION */}
        <motion.section 
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="pt-24 pb-12"
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-4 flex items-center gap-4">
              <Award className="text-accent hidden md:block" size={48} /> Certifications
            </h2>
            <p className="text-muted text-lg font-mono">Verified credentials and professional training.</p>
          </motion.div>
          
          <CertificationsList />
        </motion.section>

        {/* FOOTER */}
        <motion.footer 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="pt-8 pb-12"
        >
          <div className="bg-surface/50 border border-border/60 rounded-[32px] p-8 md:p-16 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-accent hover:border-accent transition-colors duration-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 pb-2 group-hover:text-bg transition-colors duration-500 relative z-10">
              Got an idea?
            </h2>
            <p className="font-mono text-muted group-hover:text-bg/80 transition-colors duration-500 mb-12 max-w-md relative z-10">
              Let's build something extraordinary together. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <a href={`mailto:${profile.identity.email}`} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-text text-bg group-hover:bg-bg group-hover:text-accent font-bold text-lg hover:scale-105 transition-all duration-300 relative z-10">
              Start a conversation <ArrowUpRight />
            </a>
          </div>

          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-sans text-muted border-t border-border/40 pt-12 px-4">
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
              <p className="font-bold text-text uppercase tracking-widest text-xs">Tirth Bhanderi</p>
              <p className="font-mono text-xs opacity-70">© 2026 All rights reserved.</p>
            </div>
            
            <div className="flex flex-col gap-4 items-center md:items-end text-center md:text-right">
              <p className="font-bold text-text uppercase tracking-widest text-xs">Connect</p>
              <div className="flex items-center gap-6 font-mono text-xs">
                <a href={profile.identity.github} target="_blank" className="flex items-center gap-1.5 hover:text-accent transition-all hover:-translate-y-1">
                  <GithubIcon />
                  <span className="leading-none mt-1">GitHub</span>
                </a>
                <a href={profile.identity.linkedin} target="_blank" className="flex items-center gap-1.5 hover:text-accent transition-all hover:-translate-y-1">
                  <LinkedinIcon />
                  <span className="leading-none mt-1">LinkedIn</span>
                </a>
                <a href={`mailto:${profile.identity.email}`} className="flex items-center gap-1.5 hover:text-accent transition-all hover:-translate-y-1">
                  <Mail size={16} strokeWidth={2} className="mb-0.5" />
                  <span className="leading-none mt-1">Email</span>
                </a>
              </div>
            </div>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}
