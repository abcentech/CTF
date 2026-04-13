import React, { useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems } from '../data/navData';
import logo from '../assets/logo.png';

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
        <NavLink smooth to="/#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
            <img src={logo} alt="CTF Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-ctf-crimson leading-[0.8] mb-0.5">CTF</span>
            <span className="text-[10px] font-extrabold text-ctf-purple tracking-[0.25em] leading-none uppercase">Foundation</span>
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
                to={item.path}
                className={`text-sm font-bold tracking-wide transition-colors flex items-center gap-1 py-2 ${
                  scrolled ? 'text-ctf-crimson' : 'text-ctf-crimson'
                } hover:text-ctf-purple`}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </NavLink>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <Motion.ul
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl overflow-hidden py-2 border border-slate-100"
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink 
                          smooth
                          to={subItem.href}
                          className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </Motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
          <li>
            <NavLink smooth to="/get-involved" className="px-6 py-2.5 bg-ctf-crimson text-white rounded-full text-sm font-bold hover:bg-ctf-pink transition-all shadow-lg shadow-ctf-crimson/20">
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
          <Motion.div
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
                              to={subItem.href}
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
                  to="/get-involved#member"
                  className="block w-full text-center py-4 bg-accent text-white rounded-xl font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  GET INVOLVED
                </NavLink>
              </li>
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
