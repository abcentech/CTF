import React from 'react';
import { motion as Motion } from 'framer-motion';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ArrowRight, BookOpen, Globe, Award, Users, Heart, Sparkles, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import heroImg from '../assets/ctf/hero-campus.jpg';
import heroAltImg from '../assets/ctf/hero-campus-alt.jpg';
import campusGroupImg from '../assets/ctf/campus-group.jpg';
import outreachImg from '../assets/ctf/outreach-covenant.jpg';
import scholarshipImg from '../assets/ctf/scholarship-1.jpg';

const Home = () => {
  const credentials = [
    { label: 'Founded', value: '2018', icon: Calendar },
    { label: 'Active Student Members', value: '2,000+', icon: Users },
    { label: 'CAC / SCUML / EFCC', value: 'Active', icon: ShieldCheck },
    { label: 'Headquarters', value: 'Lagos', icon: MapPin },
  ];

  const impactMetrics = [
    { label: 'Teenagers Reached', value: '600,000+', icon: Users, color: 'ctf-crimson' },
    { label: 'Gatherings Conducted', value: '200+', icon: Globe, color: 'ctf-purple' },
    { label: 'Scholarships Awarded', value: '41+', icon: Award, color: 'ctf-pink' },
    { label: 'Strategic Partners', value: '150+', icon: Heart, color: 'ctf-crimson' },
  ];

  const pillarCards = [
    { title: 'Academic Excellence', code: 'PRIZE', text: 'Productivity, responsibility, integrity, zeal, and excellence.' },
    { title: 'Financial Intelligence', code: 'CASHIER', text: 'Budgeting, savings, entrepreneurship, and wise stewardship.' },
    { title: 'Social Adeptness', code: 'FRIENDS', text: 'Family, mentorship, friendships, and digital discipline.' },
    { title: 'Leadership Excellence', code: 'VOWELS', text: 'Authenticity, empathy, creativity, and personal strengths.' },
    { title: 'Christ-like Spirituality', code: 'GROW', text: 'Gospel values, renewal, outreach, worship, and the Word.' },
  ];

  const photoCards = [
    { image: heroAltImg, title: 'Life on Campus', text: 'LOC prepares SS3 students for the realities of university life.' },
    { image: outreachImg, title: 'School Engagement', text: 'School outreach and mentorship continue across partner communities.' },
    { image: scholarshipImg, title: 'Scholarship Support', text: 'The scholarship program supports selected SS2 and SS3 students.' },
  ];

  const toneClasses = {
    'ctf-crimson': 'bg-ctf-crimson/10 text-ctf-crimson',
    'ctf-purple': 'bg-ctf-purple/10 text-ctf-purple',
    'ctf-pink': 'bg-ctf-pink/10 text-ctf-pink',
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="CTF students on campus"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-ctf-crimson/30 to-black/80" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="max-w-3xl">
              <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-ctf-pink font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
                  Christian Teenagers Foundation
                </h2>
                <h1 className="text-5xl md:text-8xl text-white font-black leading-[0.92] mb-8 uppercase tracking-tighter">
                  Raising Spirit-Filled <span className="text-ctf-crimson">Teenagers</span>.
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl">
                  A legally registered Nigerian youth development organization focused on mentoring, leadership formation, academic excellence, and faith-based character development.
                </p>
                <div className="flex flex-wrap gap-6">
                  <NavLink to="/get-involved#member" className="px-10 py-5 bg-ctf-crimson text-white rounded-xl font-bold hover:bg-ctf-pink transition-all shadow-2xl shadow-ctf-crimson/40 flex items-center gap-3 group">
                    JOIN THE MOVEMENT <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </NavLink>
                  <NavLink to="/programs" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3">
                    VIEW PROGRAMS <Sparkles size={20} className="text-ctf-pink" />
                  </NavLink>
                </div>
              </Motion.div>
            </div>

            <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="grid grid-cols-2 gap-4">
              {credentials.map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[28px] p-6 text-white">
                  <item.icon size={24} className="text-ctf-pink mb-4" />
                  <h3 className="text-2xl font-black mb-2">{item.value}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{item.label}</p>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg border-b border-gray-100">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Photo Highlights</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase italic tracking-tighter leading-none">
                Campus <span className="text-ctf-purple">Moments</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              These images highlight campus life, school outreach, and scholarship support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {photoCards.map((item, index) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black text-ctf-purple uppercase mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Institutional Statement</h3>
              <p className="text-2xl text-ctf-crimson font-black uppercase leading-tight italic">
                "To equip this generation of teenagers with the skillset and resources to attain the highest level of excellence in their academics, finance, social lives, leadership, and spirituality."
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed">
                The foundation is registered with CAC, holds SCUML certification, and maintains compliance records alongside annual impact summaries.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { label: 'States Reached', value: '9' },
                { label: 'Schools & Campuses', value: '100+' },
                { label: 'Community Library', value: '1' },
                { label: 'Mobilized for Programs', value: 'NGN 19.5M+' },
              ].map((cred) => (
                <div key={cred.label} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <h4 className="text-lg font-black text-ctf-purple">{cred.value}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cred.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg border-b border-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-2">Our Footprint</h3>
            <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase italic tracking-tighter">Measurable Impact</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {impactMetrics.map((stat, i) => (
              <Motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-bg p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 group hover:border-ctf-crimson/30 transition-all flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${toneClasses[stat.color]}`}>
                  <stat.icon size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-ctf-crimson mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">{stat.label}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h3 className="text-sm font-bold text-ctf-crimson tracking-[0.2em] uppercase mb-4">Development Framework</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-purple uppercase leading-none mb-8">
                The Core <span className="text-ctf-pink block mt-2">Pillars of Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                CTF's programs and systems are built around five core pillars that guide the holistic development of every member.
              </p>
              <NavLink to="/about#leadership" className="inline-flex items-center gap-3 text-ctf-crimson font-black uppercase tracking-wider hover:text-ctf-pink transition-colors group">
                MEET THE LEADERSHIP <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </NavLink>
            </div>

            <div className="grid gap-4">
              {pillarCards.map((pillar, i) => (
                <Motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-bg p-6 rounded-2xl border-l-4 border-ctf-crimson shadow-lg flex items-center justify-between group hover:bg-ctf-crimson transition-all"
                >
                  <div className="flex flex-col">
                    <h4 className="font-black text-lg text-ctf-crimson group-hover:text-white uppercase mb-1">{pillar.title}</h4>
                    <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors uppercase font-bold tracking-tighter">({pillar.code} Framework)</p>
                    <p className="text-gray-500 group-hover:text-white/80 text-sm mt-2">{pillar.text}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
