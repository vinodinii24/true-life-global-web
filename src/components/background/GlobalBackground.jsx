import React from 'react';
import globeVideo from '../../assets/videos/globevideo.mp4';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#02050e]">
      {/* 1. SINGLE REUSABLE BACKGROUND VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={globeVideo} type="video/mp4" />
      </video>

      {/* 2. DARK NAVY OVERLAY (25%) */}
      <div className="absolute inset-0 bg-[#050b18]/25 pointer-events-none" />

      {/* 3. SOFT GOLD GRADIENT OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.15) 0%, rgba(5, 11, 24, 0.4) 60%, rgba(2, 5, 14, 0.8) 100%)'
        }}
      />
    </div>
  );
}