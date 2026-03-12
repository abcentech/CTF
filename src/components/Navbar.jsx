import React, { useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Shield } from 'lucide-react';
import { navItems } from '../data/navData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <NavLink smooth to="/#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
            <Shield size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary leading-tight">CTF</span>
            <span className="text-[10px] font-semibold text-accent tracking-widest leading-none">FOUNDATION</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li 
              key={item.label} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink 
                smooth
                to={item.dropdown ? `${item.path}#overview` : item.path}
                className={`text-sm font-bold tracking-wide transition-colors flex items-center gap-1 py-2 ${
                  scrolled ? 'text-primary' : 'text-primary'
                } hover:text-accent`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </NavLink>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl overflow-hidden py-2 border border-slate-100"
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink 
                          smooth
                          to={`${item.path}${subItem.href}`}
                          className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
          <li>
            <NavLink smooth to="/#contact" className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20">
              GET INVOLVED
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-primary p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[-1] lg:hidden bg-white pt-24 px-8 overflow-y-auto"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-slate-100 pb-4">
                  <div className="flex flex-col gap-4">
                    <NavLink 
                      smooth
                      to={item.path} 
                      className="text-lg font-bold text-primary"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                    {item.dropdown && (
                      <ul className="flex flex-col gap-3 pl-4 border-l-2 border-accent/20">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <NavLink 
                              smooth
                              to={`${item.path}${subItem.href}`}
                              className="text-slate-600 font-medium text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
              <li className="mt-4">
                <NavLink 
                  smooth
                  to="/#contact" 
                  className="block w-full text-center py-4 bg-accent text-white rounded-xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  GET INVOLVED
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
