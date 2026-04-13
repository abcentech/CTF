import React from 'react';
import { motion as Motion } from 'framer-motion';
import logo from '../assets/logo.png';

const SplashScreen = ({ onComplete }) => {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute w-64 h-64 border-4 border-ctf-crimson rounded-full"
        />

        <Motion.div
          initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{
            rotate: { duration: 1.5, ease: 'anticipate' },
            scale: { duration: 1, ease: 'easeOut' },
            opacity: { duration: 0.8 },
          }}
          onAnimationComplete={() => {
            setTimeout(() => onComplete(), 500);
          }}
          className="w-40 h-40 z-10"
        >
          <img src={logo} alt="CTF" className="w-full h-full object-contain drop-shadow-2xl" />
        </Motion.div>

        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <h1 className="text-3xl font-black text-ctf-crimson tracking-tighter uppercase italic">
            Christian Teenagers Foundation
          </h1>
          <p className="text-ctf-purple font-bold tracking-[0.3em] text-xs uppercase mt-2">
            Raising a Generation
          </p>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default SplashScreen;
