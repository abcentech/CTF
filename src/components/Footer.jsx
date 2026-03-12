import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Shield, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { navItems } from '../data/navData';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <NavLink smooth to="/#" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary">
                <Shield size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight leading-tight">CTF</span>
                <span className="text-[11px] font-semibold text-accent tracking-[0.2em] leading-none uppercase">Foundation</span>
              </div>
            </NavLink>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering Christian teenagers across campuses with spiritual growth, academic excellence, and leadership training.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent font-serif">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink smooth to={item.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Snippet */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent font-serif">Our Initiatives</h4>
            <ul className="flex flex-col gap-4">
              {navItems.find(i => i.label === 'PROGRAMS').dropdown.slice(0, 4).map((sub) => (
                <li key={sub.label}>
                  <NavLink smooth to={`/programs${sub.href}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {sub.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-lg font-bold mb-8 text-accent font-serif">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={18} />
                <span className="text-slate-400 text-sm">Lagos, Nigeria | Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-slate-400 text-sm">+234 800 CTF HELP</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-slate-400 text-sm">info@ctffoundation.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Christian Teenagers Foundation. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
