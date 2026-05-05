import React, { useRef, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import animationVideo from '../assets/ctf_animation.mp4';

const SplashScreen = ({ onComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Fallback timeout in case video fails to load or end
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // Animation is likely around 3-4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
    >
      <div className="relative w-full h-full flex items-center justify-center bg-white">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={onComplete}
          className="w-full h-full object-contain max-w-4xl"
        >
          <source src={animationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Motion.div>
  );
};

export default SplashScreen;
