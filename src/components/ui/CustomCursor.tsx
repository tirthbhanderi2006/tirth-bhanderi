'use client';
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [clicking, setClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Audio synthesis for click sound
    let audioCtx: AudioContext | null = null;
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch(e) {}
    
    const playClickSound = () => {
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    };

    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseDown = () => {
      setClicking(true);
      playClickSound();
    };
    
    const handleMouseUp = () => setClicking(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (audioCtx && audioCtx.state !== 'closed') {
         audioCtx.close();
      }
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `* { cursor: none !important; }`}} />
      <motion.div
        style={{ x: cursorXSpring, y: cursorYSpring }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <motion.div 
          animate={{ scale: clicking ? 0.7 : 1 }}
          transition={{ duration: 0.15 }}
          className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center backdrop-invert"
        >
           <motion.div 
             animate={{ scale: clicking ? 1.5 : 0, opacity: clicking ? 1 : 0 }}
             className="w-2 h-2 bg-white rounded-full"
           />
        </motion.div>
      </motion.div>
    </>
  );
}
