import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const whatsappNumber = "2349066699299";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <Motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-gray-800 text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with CTF
      </span>

      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </Motion.a>
  );
};

export default FloatingWhatsApp;
