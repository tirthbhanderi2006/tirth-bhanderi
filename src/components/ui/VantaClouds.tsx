"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function VantaClouds() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!vantaEffect && (window as any).VANTA && (window as any).THREE && vantaRef.current) {
        setVantaEffect(
          (window as any).VANTA.CLOUDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0x89c2d9,
            cloudColor: 0xffffff,
            cloudShadowColor: 0x5a7c97,
            sunColor: 0xffb703,
            sunGlareColor: 0xfb8500,
            sunPosition: { x: 0, y: 0, z: -1 },
            speed: 1.5
          })
        );
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (vantaEffect) {
      if (resolvedTheme === 'dark') {
        vantaEffect.setOptions({
          skyColor: 0x050505,
          cloudColor: 0x1a1a1a,
          cloudShadowColor: 0x000000,
          sunColor: 0x333333,
          sunGlareColor: 0x111111,
        });
      } else {
        vantaEffect.setOptions({
          skyColor: 0x89c2d9,
          cloudColor: 0xffffff,
          cloudShadowColor: 0x5a7c97,
          sunColor: 0xffb703,
          sunGlareColor: 0xfb8500,
        });
      }
    }
  }, [resolvedTheme, vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 w-full h-full -z-50 pointer-events-none opacity-80" />;
}
