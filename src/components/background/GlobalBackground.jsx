import React, { useRef, useEffect } from 'react';
import globeVideo from '../../assets/videos/globevideo.mp4';

export default function GlobalBackground() {
  const videoRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Force strict muting for uninterrupted autoplay policies
    videoElement.muted = true;
    videoElement.defaultMuted = true;

    // 1. Initial Playback Trigger
    const playVideo = async () => {
      try {
        if (videoElement.paused) {
          await videoElement.play();
        }
      } catch (err) {
        // Silently handle deferrals
      }
    };

    playVideo();

    // 2. High-Performance rAF Monitoring Loop to Prevent Scroll Stalls & Micro-lags
    const checkPlayback = () => {
      if (videoElement && videoElement.paused && videoElement.readyState >= 2) {
        videoElement.play().catch(() => {});
      }
      rafIdRef.current = requestAnimationFrame(checkPlayback);
    };

    rafIdRef.current = requestAnimationFrame(checkPlayback);

    // 3. Keep video playing smoothly through visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#02050e] transform-gpu">
      {/* 1. SINGLE REUSABLE BACKGROUND VIDEO LAYER (GPU-ACCELERATED) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
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