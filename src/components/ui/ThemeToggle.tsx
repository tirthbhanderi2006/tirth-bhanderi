"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [curtainActive, setCurtainActive] = useState(false);
  const [targetTheme, setTargetTheme] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (curtainActive) return;
    
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTargetTheme(nextTheme);
    setCurtainActive(true);
    
    // Halfway through the animation (when screen is covered), switch the theme
    setTimeout(() => {
      setTheme(nextTheme);
    }, 600); 
    
    // End curtain
    setTimeout(() => {
      setCurtainActive(false);
    }, 1200);
  };

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-surface/80 backdrop-blur-md border border-border shadow-lg text-text hover:text-accent transition-all duration-300 hover:scale-110 overflow-hidden flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {resolvedTheme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: -30, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 30, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Moon size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: -30, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 30, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Sun size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Page Curtain Transition */}
      <AnimatePresence>
        {curtainActive && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className={`fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center ${
              targetTheme === "dark" ? "bg-[#0a0a0a]" : "bg-[#f9f9f8]"
            }`}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
              className={`${targetTheme === "dark" ? "text-white" : "text-black"}`}
            >
              {targetTheme === "dark" ? (
                <motion.div
                  animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <Moon size={100} strokeWidth={1} />
                </motion.div>
              ) : (
                <motion.div
                  animate={{ rotate: 180 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <Sun size={100} strokeWidth={1} />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
