import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { Shield, Mail, MapPin, ExternalLink, Facebook, Instagram, Youtube, MessageCircle, Send, Twitter, Radio, Music, MessageSquare } from 'lucide-react';
import { navItems } from '../data/navData';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://bit.ly/CTFfbook', color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/christianteenagersfoundation/', color: 'hover:bg-pink-600', label: 'Instagram' },
    { icon: Youtube, href: 'https://bit.ly/CTFyoutube', color: 'hover:bg-red-600', label: 'YouTube' },
    { icon: Send, href: 'https://t.me/+lkSgWFPP_DFhMzlk', color: 'hover:bg-blue-400', label: 'Telegram' },
    { icon: Twitter, href: 'https://bit.ly/CTFtwitter', color: 'hover:bg-black', label: 'X (Twitter)' },
    { icon: Radio, href: 'https://bit.ly/CTFmixlr', color: 'hover:bg-orange-500', label: 'Mixlr' },
    { icon: Music, href: 'https://bit.ly/CTFPodcasts', color: 'hover:bg-green-500', label: 'Spotify' },
    { icon: MessageSquare, href: 'https://whatsapp.com/channel/0029Va63XXaFnSzG1nD3zC2u', color: 'hover:bg-[#25D366]', label: 'WhatsApp Channel' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ctf-crimson via-ctf-pink to-ctf-purple" />
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <NavLink smooth to="/#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-ctf-crimson rounded-xl flex items-center justify-center text-white shadow-xl shadow-ctf-crimson/20">
                <Shield size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-[0.8]">CTF</span>
                <span className="text-[12px] font-bold text-ctf-pink tracking-[0.2em] leading-none uppercase">Foundation</span>
              </div>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Raising a Generation of Spirit-Filled Teenagers to Change the World. Registered with Corporate Affairs Commission (CAC), Nigeria.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-all group ${social.color}`} aria-label={social.label}>
                  <social.icon size={18} className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-10 text-white uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink smooth to={item.path} className="text-gray-400 hover:text-ctf-pink text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-ctf-crimson rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Flagship Programs */}
          <div>
            <h4 className="text-lg font-bold mb-10 text-white uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Flagship Programs</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Scholarship Program', href: '/programs#scholarship' },
                { label: 'Teacher of the Year', href: '/programs#toy' },
                { label: 'Rebuilders Academy', href: '/programs#rebuilders' }
              ].map((sub) => (
                <li key={sub.label}>
                  <NavLink smooth to={sub.href} className="text-gray-400 hover:text-ctf-pink text-sm transition-colors flex items-center gap-2 group">
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 group-hover:text-ctf-crimson transition-all" />
                    {sub.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-10 text-white uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ctf-purple/20 flex items-center justify-center text-ctf-purple shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-gray-500 mb-1">Headquarters</span>
                  <span className="text-gray-300 text-sm">Egbeda, Lagos, Nigeria</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-ctf-crimson/20 flex items-center justify-center text-ctf-crimson shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold text-gray-500 mb-1">Email Us</span>
                  <a href="mailto:CTFinquiries@gmail.com" className="text-gray-300 text-sm hover:text-ctf-crimson transition-colors">CTFinquiries@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-500 text-xs font-medium">
              Copyright 2026 Christian Teenagers Foundation (CTF). All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">
              SCUML Certified | EFCC Compliance | CAC Registered
            </p>
          </div>
          <div className="flex gap-8">
            <NavLink smooth to="/governance" className="text-gray-500 text-xs hover:text-ctf-pink uppercase tracking-widest transition-colors">Compliance</NavLink>
            <NavLink smooth to="/about#story" className="text-gray-500 text-xs hover:text-ctf-pink uppercase tracking-widest transition-colors">Our Story</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
