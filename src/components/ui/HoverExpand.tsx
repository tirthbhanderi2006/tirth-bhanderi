"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/content/profile";

export const HoverExpandProjects = ({ className }: { className?: string }) => {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  // Combine Main Projects + Open Source (Side Projects)
  const images = [
    // Main Projects
    { src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=800&auto=format&fit=crop", title: profile.projects[0].name, desc: profile.projects[0].description, label: "MAIN" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", title: profile.projects[1].name, desc: profile.projects[1].description, label: "MAIN" },
    { src: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=800&auto=format&fit=crop", title: profile.projects[2].name, desc: profile.projects[2].description, label: "MAIN" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?q=80&w=800&auto=format&fit=crop", title: profile.projects[3].name, desc: profile.projects[3].description, label: "MAIN" },
    
    // Side Projects / Open Source
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", title: profile.openSource[0].name, desc: "A robust firewall solution built in Python for advanced network security.", label: "OSS" },
    { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop", title: profile.openSource[1].name, desc: "A modular AI framework to rapidly prototype and build intelligent solutions.", label: "OSS" },
    { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop", title: profile.openSource[2].name, desc: "A secure, Python-based payment processing simulation tool.", label: "OSS" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("relative w-full overflow-hidden px-2", className)}
    >
      <div className="flex w-full items-center justify-center gap-1 md:gap-2 h-[500px] md:h-[600px] max-w-[1400px] mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] h-full cursor-pointer flex-shrink-0"
            initial={{ width: "3vw" }}
            animate={{
              width: activeImage === index ? "45vw" : "3.5vw",
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            onHoverStart={() => setActiveImage(index)}
            onClick={() => setActiveImage(index)}
          >
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10"
                />
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col justify-end"
                >
                  <span className="text-accent text-xs font-mono tracking-widest mb-2 border border-accent/30 bg-accent/10 w-fit px-2 py-1 rounded">
                    {image.label}
                  </span>
                  <h3 className="text-2xl md:text-5xl font-serif text-white mb-2 md:mb-4 drop-shadow-md leading-tight">{image.title}</h3>
                  <p className="text-xs md:text-base text-white/80 font-mono leading-relaxed max-w-2xl drop-shadow line-clamp-3 md:line-clamp-none">
                    {image.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
               {activeImage !== index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors"
                  >
                     <span className="text-white font-serif text-xl md:text-2xl rotate-[-90deg] whitespace-nowrap opacity-50">0{index + 1}</span>
                  </motion.div>
               )}
            </AnimatePresence>
            
            <img
              src={image.src}
              className="absolute inset-0 w-full h-full object-cover"
              alt={image.title}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
