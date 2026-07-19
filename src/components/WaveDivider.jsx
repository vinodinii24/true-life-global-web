import React from 'react';

export default function WaveDivider() {
  return (
    <div className="w-full overflow-hidden bg-white leading-[0] select-none pointer-events-none">
      <svg
        viewBox="0 0 1440 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-[60px] sm:h-[85px] md:h-[110px]"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Navy Blue (#1D3557) - Deep base structure */}
        <path
          d="M0,32 C240,75 480,85 720,53 C960,21 1200,-10 1440,5 L1440,110 L0,110 Z"
          fill="#1D3557"
        />

        {/* Layer 2: Gold (#D4AF37) - Premium intermediate wave */}
        <path
          d="M0,50 C360,95 640,25 960,40 C1160,50 1320,80 1440,95 L1440,110 L0,110 Z"
          fill="#D4AF37"
          opacity="0.85"
        />

        {/* Layer 3: Subtle Pure White Highlights - Dynamic premium crest contrast */}
        <path
          d="M0,75 C280,110 520,65 800,80 C1080,95 1260,105 1440,98 L1440,110 L0,110 Z"
          fill="#FFFFFF"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}