import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(dot, {
        x,
        y,
        duration: 0.1,
        overwrite: 'auto',
        onStart: () => gsap.set(dot, { opacity: 1 })
      });

      gsap.to(ring, {
        x,
        y,
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
        onStart: () => gsap.set(ring, { opacity: 1 })
      });
    };

    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.7, borderColor: '#00f2fe', duration: 0.15 });
      gsap.to(dot, { scale: 1.5, backgroundColor: '#4facfe', duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(79, 172, 254, 0.4)', duration: 0.25 });
      gsap.to(dot, { scale: 1, backgroundColor: '#00f2fe', duration: 0.25 });
    };

    const addHoverTargets = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(ring, { scale: 1.6, backgroundColor: 'rgba(0, 242, 254, 0.05)', borderColor: '#00f2fe', duration: 0.2 });
          gsap.to(dot, { scale: 0, duration: 0.2 });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(ring, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(79, 172, 254, 0.4)', duration: 0.2 });
          gsap.to(dot, { scale: 1, duration: 0.2 });
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    addHoverTargets();

    const observer = new MutationObserver(addHoverTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#00f2fe] rounded-full pointer-events-none z-[999999] hidden md:block mix-blend-screen shadow-[0_0_8px_#00f2fe]"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-[#4facfe]/40 rounded-full pointer-events-none z-[999998] hidden md:block mix-blend-screen"
      />
    </>
  );
};