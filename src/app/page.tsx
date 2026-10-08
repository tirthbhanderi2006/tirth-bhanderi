"use client";
import { ProjectsAccordion } from "@/components/ui/ProjectsAccordion";
import { VantaClouds } from "@/components/ui/VantaClouds";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/content/profile";
import { personal } from "@/content/personal";
import { Download, Mail } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const name = "TIRTH BHANDERI";

  return (
    <div className="relative min-h-[300vh] overflow-x-hidden selection:bg-accent/20">
      <VantaClouds />
      
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div 
          style={{ y: yHero }} 
          className="max-w-5xl mx-auto flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
        >
          {/* Name with Pro Hover/Click Effect */}
          <motion.h1 
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
              hover: { transition: { staggerChildren: 0.04 } },
              tap: { scale: 0.95, filter: "brightness(1.5)", transition: { duration: 0.1 } }
            }}
            className="font-serif text-[11vw] md:text-[8rem] lg:text-[9rem] tracking-tighter leading-none text-text mb-6 drop-shadow-sm text-center whitespace-nowrap cursor-pointer select-none"
          >
            {name.split("").map((char, i) => (
              char === " " ? (
                <span key={i}> </span>
              ) : (
                <span key={i} className="relative overflow-hidden inline-block align-bottom pb-1">
                  {/* Primary Letter */}
                  <motion.span
                    variants={{
                      hover: { y: "-100%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                  {/* Hover (Secondary) Letter */}
                  <motion.span
                    variants={{
                      hover: { y: "-100%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
                    }}
                    className="absolute left-0 top-full inline-block text-accent"
                  >
                    {char}
                  </motion.span>
                </span>
              )
            ))}
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="font-mono text-sm md:text-lg tracking-[0.3em] text-accent uppercase font-medium mb-12"
          >
            AI/ML Engineer · Full-Stack · Mobile
          </motion.p>
          
          {/* Action & Contact Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8, ease: "easeOut" } }
            }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Resume Button */}
            <motion.a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-mono text-sm uppercase tracking-widest text-bg bg-text overflow-hidden rounded-none hover:bg-accent hover:text-bg transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
              <span className="relative flex items-center gap-2">
                Download Resume <Download size={16} className="group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.a>

            {/* Social Links */}
            <div className="flex gap-2">
              <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href={profile.identity.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-border bg-bg/50 backdrop-blur-sm text-text hover:text-accent hover:border-accent/50 transition-all duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5.3 5.3 0 0 0 0-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.3 5.3 0 0 0 0 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76-.7.6-1 1.5-1 2.4V22"></path><path d="M8 22v-4"></path></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href={profile.identity.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-border bg-bg/50 backdrop-blur-sm text-text hover:text-accent hover:border-accent/50 transition-all duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href={`mailto:${profile.identity.email}`} className="p-3 border border-border bg-bg/50 backdrop-blur-sm text-text hover:text-accent hover:border-accent/50 transition-all duration-300">
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Animated Mouse Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] text-muted tracking-[0.3em] uppercase">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center p-1 relative overflow-hidden">
             <motion.div
               animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="w-1 h-1.5 bg-accent rounded-full"
             />
          </div>
        </motion.div>
      </section>

      {/* 2. About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="relative min-h-[70vh] w-full flex items-center z-10 border-t border-border bg-surface/30 backdrop-blur-sm py-24"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
             <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">01 // About Me</p>
             <h2 className="font-serif text-4xl md:text-6xl text-text mb-8">Engineering beyond code.</h2>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="font-mono text-sm md:text-base text-muted leading-relaxed"
          >
             <motion.p
               variants={{
                 hidden: {},
                 visible: { transition: { staggerChildren: 0.02 } }
               }}
             >
               {"BTech student from Gujarat, currently in my 3rd year after completing a diploma. Into software development, AI, and figuring out how things work under the hood. Always learning, occasionally overthinking, and somehow managing to keep life interesting.".split(" ").map((word, i) => (
                 <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                   <motion.span
                     variants={{
                       hidden: { y: "100%", opacity: 0 },
                       visible: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                     }}
                     className="inline-block"
                   >
                     {word}
                   </motion.span>
                 </span>
               ))}
             </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Projects Showcase (ProjectsAccordion) */}
      <section className="relative min-h-screen w-full z-10 border-t border-border bg-bg/30 backdrop-blur-md flex flex-col py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-16">
          <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">02 // The Work</p>
          <h2 className="font-serif text-4xl md:text-6xl text-text mb-4">Selected Projects</h2>
          <p className="font-mono text-muted text-sm max-w-2xl mx-auto">
            A comprehensive list of core architectures and open source contributions.
          </p>
        </div>
        
        {/* Sleek Accordion Layout */}
        <div className="w-full">
          <div className="max-w-5xl mx-auto px-4">
            <ProjectsAccordion />
          </div>
        </div>
      </section>

      {/* 4. Experience & Loadout */}
      <section className="relative z-10 py-32 border-t border-border bg-surface/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24">
          
          {/* Experience Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">03 // Timeline</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text mb-16">Experience</h2>
            <div className="relative border-l border-border/50 ml-3 md:ml-4 space-y-16">
              {profile.experience.map((exp, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="relative pl-8 md:pl-12 group"
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute w-3 h-3 bg-bg border-2 border-accent rounded-full -left-[6px] top-2 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(var(--accent),0.8)] transition-all duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                    <h3 className="font-serif text-2xl md:text-3xl text-text group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">{exp.company}</h3>
                    <span className="font-mono text-xs text-accent/80 border border-accent/20 bg-accent/5 px-3 py-1 rounded-full whitespace-nowrap">{exp.date}</span>
                  </div>
                  <h4 className="font-mono text-sm text-text font-bold mb-4 tracking-wide">{exp.role}</h4>
                  <p className="font-mono text-sm text-muted leading-relaxed max-w-lg">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-text mt-24 mb-16">Education</h2>
            <div className="relative border-l border-border/50 ml-3 md:ml-4 space-y-16">
              {profile.education.map((edu, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="relative pl-8 md:pl-12 group"
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute w-3 h-3 bg-bg border-2 border-accent rounded-full -left-[6px] top-2 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(var(--accent),0.8)] transition-all duration-500" />
                  
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                    <h3 className="font-serif text-2xl md:text-3xl text-text group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">{edu.institution}</h3>
                    <span className="font-mono text-xs text-accent/80 border border-accent/20 bg-accent/5 px-3 py-1 rounded-full whitespace-nowrap">{edu.date}</span>
                  </div>
                  <h4 className="font-mono text-sm text-text font-bold mb-4 tracking-wide">{edu.degree}</h4>
                  <p className="font-mono text-sm text-muted leading-relaxed max-w-lg">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Loadout / Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">04 // Loadout</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text mb-16">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {Object.entries(profile.skills).map(([category, items], idx) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={category}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="p-6 rounded-2xl border border-border bg-bg/50 backdrop-blur-sm hover:bg-surface/80 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 group"
                >
                  <h3 className="font-mono text-accent text-sm mb-6 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {category.replace('_', ' ')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item: string, i: number) => (
                      <span 
                        key={i} 
                        className="font-mono text-xs text-text/90 bg-border/40 border border-border/50 px-3 py-1.5 rounded-md group-hover:border-accent/20 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border bg-bg text-center font-mono text-xs text-muted">
         <p>© 2026 TIRTH BHANDERI. Built for the future.</p>
      </footer>
    </div>
  );
}
