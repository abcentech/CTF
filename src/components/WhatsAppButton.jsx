import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <Motion.a
      href="https://wa.me/2349066699299"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm uppercase tracking-wider">
        Chat with a CTF Mentor
      </span>
    </Motion.a>
  );
};

export default WhatsAppButton;
