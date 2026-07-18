import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const screenRef = useRef(null);
  const fillRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(screenRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: onComplete,
          });
        }
      });

      const counter = { value: 0 };
      tl.to(counter, {
        value: 100,
        duration: 2.2,
        ease: 'power3.out',
        onUpdate: () => {
          const currentProgress = Math.floor(counter.value);
          setProgress(currentProgress);
          if (fillRef.current) {
            gsap.set(fillRef.current, { width: `${currentProgress}%` });
          }
        },
      });

      tl.fromTo([textRef.current, statsRef.current], 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        0
      );
    });

    return () => context.revert();
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030712] font-sans overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="w-full max-w-sm px-6">
        <div ref={textRef} className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse" />
            <span className="font-display text-sm font-bold tracking-widest text-white uppercase">
              TRUE LIFE GLOBAL
            </span>
          </div>
          <span className="font-mono text-xs tracking-wider text-[#9ca3af]">
            SYS_INIT
          </span>
        </div>

        <div className="relative w-full h-[2px] bg-slate/5 rounded-full overflow-hidden mb-4">
          <div
            ref={fillRef}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full"
            style={{ width: '0%' }}
          />
        </div>

        <div ref={statsRef} className="flex justify-between items-center font-mono text-[10px] tracking-widest text-[#9ca3af] uppercase">
          <div className="flex space-x-4">
            <span>SECURE_LINK // CONNECTED</span>
          </div>
          <div>
            <span className="text-[#00f2fe] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};