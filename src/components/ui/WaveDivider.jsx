import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function WaveDivider({
  flip = false,
  className = '',
  bgColor = 'bg-transparent',
}) {
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);

  useEffect(() => {
    // Gentle ambient floating animation for liquid wave feel
    const ctx = gsap.context(() => {
      if (wave1Ref.current) {
        gsap.to(wave1Ref.current, {
          y: 6,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.easeInOut',
        });
      }

      if (wave2Ref.current) {
        gsap.to(wave2Ref.current, {
          y: -5,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.easeInOut',
          delay: 0.5,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`w-full overflow-hidden leading-[0] select-none pointer-events-none ${bgColor} ${
        flip ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-[50px] sm:h-[75px] md:h-[105px] translate-y-[1px]"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Deep Navy Base Gradient */}
          <linearGradient id="waveNavyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A1128" />
            <stop offset="50%" stopColor="#1D3557" />
            <stop offset="100%" stopColor="#050B18" />
          </linearGradient>

          {/* Premium Gold Liquid Gradient */}
          <linearGradient id="waveGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {/* Layer 1: Animated Navy Deep Base */}
        <path
          ref={wave1Ref}
          d="M0,32 C240,75 480,85 720,53 C960,21 1200,-10 1440,5 L1440,110 L0,110 Z"
          fill="url(#waveNavyGrad)"
          opacity="0.9"
        />

        {/* Layer 2: Animated Gold Intermediate Wave */}
        <path
          ref={wave2Ref}
          d="M0,50 C360,95 640,25 960,40 C1160,50 1320,80 1440,95 L1440,110 L0,110 Z"
          fill="url(#waveGoldGrad)"
          opacity="0.75"
        />

        {/* Layer 3: Dynamic Glow Crest Highlight */}
        <path
          d="M0,75 C280,110 520,65 800,80 C1080,95 1260,105 1440,98 L1440,110 L0,110 Z"
          fill="#FFD700"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}