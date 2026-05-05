import React, { useEffect, useState } from 'react';
import { motion as Motion, useSpring, useTransform, animate } from 'framer-motion';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ArrowRight, BookOpen, Globe, Award, Users, Heart, Sparkles, ShieldCheck, MapPin, Calendar, Quote } from 'lucide-react';
import heroImg from '../assets/ctf/homepage-hero.jpeg';
import heroAltImg from '../assets/ctf/hero-campus-alt.jpg';
import campusGroupImg from '../assets/ctf/campus-group.jpg';
import outreachImg from '../assets/ctf/outreach-covenant.jpg';
import scholarshipImg from '../assets/ctf/scholarship-1.jpg';

const Counter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseInt(value.replace(/,/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    const controls = animate(0, targetValue, {
      duration,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [targetValue, duration]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const Home = () => {
  const credentials = [
    { label: 'Founded', value: '2018', icon: Calendar },
    { label: 'Active Student Members', value: '2,000+', icon: Users },
    { label: 'CAC / SCUML / EFCC', value: 'Active', icon: ShieldCheck },
    { label: 'Headquarters', value: 'Lagos', icon: MapPin },
  ];

  const impactMetrics = [
    { label: 'students mentored', value: '2,000+', icon: Users, color: 'ctf-crimson' },
    { label: 'gatherings conducted', value: '200+', icon: Globe, color: 'ctf-purple' },
    { label: 'scholarships awarded', value: '41+', icon: Heart, color: 'ctf-crimson' },
    { label: 'states in Nigeria', value: '9', icon: Sparkles, color: 'ctf-pink' },
  ];

  const photoCards = [
    { 
      image: heroAltImg, 
      title: 'Life on Campus (LOC)', 
      text: 'Prepare for university life with clarity and confidence' 
    },
    { 
      image: campusGroupImg, 
      title: 'Course of Study Finder (COS)', 
      text: 'Discover the course that fits your strengths and future goals' 
    },
    { 
      image: scholarshipImg, 
      title: 'Scholarship Support', 
      text: 'The scholarship program supports selected SS2 and SS3 students.' 
    },
  ];

  const toneClasses = {
    'ctf-crimson': 'bg-ctf-crimson/10 text-ctf-crimson',
    'ctf-purple': 'bg-ctf-purple/10 text-ctf-purple',
    'ctf-pink': 'bg-ctf-pink/10 text-ctf-pink',
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
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
                  Step Into Campus With <span className="text-ctf-pink italic">Clarity</span> and <span className="text-ctf-crimson">Confidence</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl">
                  Most students enter university unprepared and unsure of their direction.
                  CTF helps you prepare for campus life and choose the right course.
                </p>
                <div className="flex flex-wrap gap-6">
                  <NavLink to="/programs#loc" className="px-10 py-5 bg-ctf-crimson text-white rounded-xl font-bold hover:bg-ctf-pink transition-all shadow-2xl shadow-ctf-crimson/40 flex items-center gap-3 group">
                    PREPARE FOR CAMPUS (LOC) <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </NavLink>
                  <a href="https://bit.ly/CTF-COSFinder" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3">
                    FIND YOUR COURSE (COS) <Sparkles size={20} className="text-ctf-pink" />
                  </a>
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

      {/* New Preparation Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase italic tracking-tighter leading-tight">
                How do I prepare for <span className="text-ctf-purple">university in Nigeria?</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Preparing for university starts with understanding campus life, choosing the right course, and developing the right mindset early. Many students enter unprepared, which leads to confusion.
                </p>
                <p>
                  CTF helps students prepare through <span className="text-ctf-purple font-bold italic">Life on Campus (LOC)</span> and the <span className="text-ctf-crimson font-bold italic">Course of Study Finder (COS)</span>.
                </p>
              </div>
              <NavLink to="/programs#loc" className="inline-flex items-center gap-4 px-8 py-4 bg-ctf-purple text-white rounded-2xl font-black uppercase tracking-widest hover:bg-ctf-pink transition-all shadow-xl shadow-ctf-purple/20">
                Prepare for Campus (LOC) <ArrowRight size={20} />
              </NavLink>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-ctf-crimson/20 to-ctf-purple/20 blur-3xl rounded-[40px]" />
              <img src={campusGroupImg} alt="Students preparing for university" className="relative rounded-[40px] shadow-2xl border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-card-bg border-b border-gray-100">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Our Focus</h3>
              <h2 className="text-4xl md:text-7xl font-black text-ctf-crimson uppercase italic tracking-tighter leading-none">
                What Do You <span className="text-ctf-purple">Need Right Now?</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl leading-relaxed text-lg italic">
              Choose the program that fits your current academic stage and personal growth goals.
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
                className="bg-white rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-black text-ctf-purple uppercase mb-3 italic">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-light">{item.text}</p>
                  <NavLink to="/programs" className="mt-6 inline-flex items-center gap-2 text-ctf-crimson font-black text-xs uppercase tracking-widest hover:text-ctf-pink">
                    Explore Program <ArrowRight size={14} />
                  </NavLink>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ctf-crimson/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto text-ctf-pink mb-8 opacity-20" size={80} />
            <h2 className="text-3xl md:text-5xl font-black text-ctf-purple uppercase italic leading-tight mb-8">
              “Before CTF, I didn’t know what to study. <span className="text-ctf-crimson">Now I’m confident about my path.</span>”
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gray-200" />
              <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm">CTF Program Alumnus</p>
              <div className="h-px w-12 bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-bg border-y border-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-2">Our Footprint</h3>
            <h2 className="text-4xl md:text-8xl font-black text-ctf-crimson uppercase italic tracking-tighter leading-none">Measurable <span className="text-ctf-purple">Impact</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((stat, i) => (
              <Motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-2xl shadow-gray-200/50 group hover:border-ctf-crimson/30 transition-all flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${toneClasses[stat.color]}`}>
                  <stat.icon size={40} />
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-ctf-crimson mb-4 tracking-tighter leading-none">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-gray-500 font-black uppercase text-xs tracking-[0.2em]">{stat.label}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* States Grid Replacement/Update */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Institutional Presence</h3>
              <p className="text-3xl text-ctf-crimson font-black uppercase leading-tight italic">
                Active in 9 states in Nigeria across secondary schools and university campuses.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                The foundation is registered with CAC, holds SCUML certification, and maintains compliance records alongside annual impact summaries.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { label: 'States in Nigeria', value: '9' },
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

      {/* CTA Section */}
      <section className="py-24 bg-ctf-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12">
            Ready to <span className="text-ctf-pink italic">Join CTF?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <NavLink to="/get-involved#member" className="px-12 py-6 bg-white text-ctf-purple rounded-2xl font-black uppercase tracking-widest hover:bg-ctf-pink hover:text-white transition-all shadow-2xl">
              Join CTF
            </NavLink>
            <NavLink to="/programs#loc" className="px-12 py-6 bg-ctf-crimson text-white rounded-2xl font-black uppercase tracking-widest hover:bg-ctf-pink transition-all shadow-2xl">
              Prepare for Campus
            </NavLink>
            <a href="https://bit.ly/CTF-COSFinder" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white/10 text-white border border-white/20 rounded-2xl font-black uppercase tracking-widest hover:bg-white/20 transition-all">
              Find Your Course
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
