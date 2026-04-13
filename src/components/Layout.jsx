import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on route change if no hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
          <Motion.main 
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            {children}
          </Motion.main>
        </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
