"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const text = "TIRTH BHANDERI";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[999] bg-bg flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="overflow-hidden flex">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.05, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="font-serif text-5xl md:text-7xl lg:text-9xl text-text tracking-tighter"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            className="h-[2px] bg-accent mt-8"
          />
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
