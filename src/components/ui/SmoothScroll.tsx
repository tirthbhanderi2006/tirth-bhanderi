"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.04, 
      duration: 2, 
      smoothWheel: true, 
      wheelMultiplier: 0.8, 
      touchMultiplier: 2 
    }}>
      {children as any}
    </ReactLenis>
  );
}
