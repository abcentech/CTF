import React from 'react';
import { motion as Motion } from 'framer-motion';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ArrowRight, Shield, BookOpen, TrendingUp, Users, Heart, Globe, Award, Sparkles, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import heroImg from '../assets/ctf_hero_students.png';

const Home = () => {
  const credentials = [
    { label: 'Founded', value: '2018', icon: Calendar },
    { label: 'Student Members', value: '2,000+', icon: Users },
    { label: 'CAC Registered', value: 'Active', icon: ShieldCheck },
    { label: 'SCUML Certified', value: 'EFCC', icon: Award },
  ];

  const impactMetrics = [
    { label: 'Teenagers Reached', value: '600,000+', icon: Users, color: 'ctf-crimson' },
    { label: 'Structured Gatherings', value: '200+', icon: Globe, color: 'ctf-purple' },
    { label: 'Scholarships Awarded', value: '41+', icon: Award, color: 'ctf-pink' },
    { label: 'Strategic Partners', value: '150+', icon: Heart, color: 'ctf-crimson' },
    { label: 'States Reached', value: '9', icon: MapPin, color: 'ctf-purple' },
    { label: 'Schools & Campuses', value: '100+', icon: BookOpen, color: 'ctf-pink' },
    { label: 'Community Library', value: '1', icon: Shield, color: 'ctf-crimson' },
    { label: 'Mobilized for Programs', value: 'NGN 19.5M+', icon: TrendingUp, color: 'ctf-purple' },
  ];

  const pillars = [
    { name: 'Academic Excellence', framework: 'PRIZE', desc: 'Developing productivity, responsibility, and critical thinking.' },
    { name: 'Financial Intelligence', framework: 'CASHIER', desc: 'Equipping teenagers with financial awareness and discipline.' },
    { name: 'Social Adeptness', framework: 'FRIENDS', desc: 'Building strong relationship skills across family and mentorship.' },
    { name: 'Leadership Excellence', framework: 'VOWELS', desc: 'Raising teenagers to lead with authenticity and creativity.' },
    { name: 'Christ-like Spirituality', framework: 'GROW', desc: 'Developing a consistent and practical spiritual life.' },
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
            alt="Teenagers gathered for a CTF program"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-ctf-crimson/25 to-black/80" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-ctf-pink font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
                Helping teens (13-19) attain their highest potential
              </h2>
              <h1 className="text-5xl md:text-8xl text-white font-black leading-[0.9] mb-8 uppercase tracking-tighter">
                Raising a <span className="text-ctf-crimson">Generation</span> of Spirit-Filled Teenagers.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl">
                Nurturing disciplined, purpose-driven, and spiritually grounded leaders to transform the world through excellence and integrity.
              </p>

              <div className="flex flex-wrap gap-6">
                <NavLink
                  to="/get-involved#member"
                  className="px-10 py-5 bg-ctf-crimson text-white rounded-xl font-bold hover:bg-ctf-pink transition-all shadow-2xl shadow-ctf-crimson/40 flex items-center gap-3 group"
                >
                  JOIN THE MOVEMENT <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </NavLink>
                <NavLink
                  to="/programs"
                  className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3"
                >
                  OUR INITIATIVES <Sparkles size={20} className="text-ctf-pink" />
                </NavLink>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Institutional Statement</h3>
              <p className="text-2xl text-ctf-crimson font-black uppercase leading-tight italic">
                "Christian Teenagers Foundation (CTF) is a legally registered Nigerian youth development organization focused on mentoring, leadership formation, academic excellence, and faith-based character development."
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.label} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                  <cred.icon size={24} className="text-ctf-purple mb-2" />
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ctf-purple/[0.02] -skew-x-12 translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-sm font-bold text-ctf-crimson tracking-[0.2em] uppercase mb-4">Development Framework</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-purple uppercase leading-none mb-8">
                The Core <span className="text-ctf-pink block mt-2">Pillars of Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                CTF's programs and systems are built around five core pillars that guide the holistic development of every member. Each pillar is supported by a structured framework that translates values into practical outcomes.
              </p>

              <NavLink to="/about#pillars" className="inline-flex items-center gap-3 text-ctf-crimson font-black uppercase tracking-wider hover:text-ctf-pink transition-colors group">
                EXPLORE FULL FRAMEWORK <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </NavLink>
            </div>

            <div className="grid gap-4">
              {pillars.map((pillar, i) => (
                <Motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg p-6 rounded-2xl border-l-4 border-ctf-crimson shadow-lg flex items-center justify-between group hover:bg-ctf-crimson transition-all"
                >
                  <div className="flex flex-col">
                    <h4 className="font-black text-lg text-ctf-crimson group-hover:text-white uppercase mb-1">{pillar.name}</h4>
                    <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors uppercase font-bold tracking-tighter">({pillar.framework} Framework)</p>
                  </div>
                  <CheckCircle2 className="text-ctf-pink group-hover:text-white" size={24} />
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ctf-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-ctf-purple rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl text-white font-black uppercase mb-8 leading-tight tracking-tighter">
              A Structured Youth <br className="hidden md:block" /> Development Organization
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto font-light italic">
              "Raising a generation of Spirit-Filled teenagers to change the world."
            </p>
            <div className="flex justify-center gap-6">
              <NavLink to="/get-involved#member" className="px-12 py-5 bg-white text-ctf-crimson rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                Get Involved Now
              </NavLink>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

const Calendar = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export default Home;
