import React from 'react';
import { motion } from 'framer-motion';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ArrowRight, BookOpen, Users, Trophy, Globe, Heart, ShieldCheck } from 'lucide-react';
import heroBg from '../assets/ctf_hero_bg.png'; // I'll need to move the image to assets

const Home = () => {
  const stats = [
    { label: 'Students Empowered', value: '15,000+', icon: Users },
    { label: 'Scholarships Awarded', value: '1,200', icon: Trophy },
    { label: 'Partner Universities', value: '45', icon: Globe },
    { label: 'Monthly Prayers', value: '24/7', icon: Heart },
  ];

  const categories = [
    { title: 'Academic Excellence', desc: 'Guiding students through our Course of Study Finder and scholarship initiatives.', icon: BookOpen },
    { title: 'Spiritual Growth', desc: 'Building faith through monthly conferences, prayer chains, and the Rebuilders Academy.', icon: ShieldCheck },
    { title: 'Leadership', desc: 'Training the next generation of Christian leaders to impact their campus and world.', icon: Users },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Students on campus" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 text-accent rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
              Faith. Excellence. Leadership.
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Building the Future of <span className="text-accent">Christian Leaders</span>.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Empowering Christian teenagers across Nigeria to excel in their campus life, pursue their callings, and lead with biblical values.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink 
                smooth 
                to="/programs#overview" 
                className="px-8 py-4 bg-accent text-primary rounded-full font-bold hover:bg-accent-light transition-all shadow-xl shadow-accent/20 flex items-center gap-2 group"
              >
                Explore Programs <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </NavLink>
              <NavLink 
                smooth 
                to="/about#overview" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Our Mission
              </NavLink>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 border-r last:border-0 border-slate-100 md:border-r"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-bg relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-60" />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1523240715632-998460694e9d?q=80&w=1470&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-white shadow-xl rounded-xl z-20 max-w-[200px]">
                <p className="text-sm font-bold text-primary leading-tight">
                  Over 15 years of dedicated youth ministry.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Empowering the Next Generation of <span className="text-accent underline decoration-accent/30 underline-offset-8">Kingdom Builders</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The Christian Teenagers Foundation (CTF) is more than just an organization; it's a movement dedicated to nurturing spiritual, academic, and social excellence in Christian youth across campuses.
              </p>
              <div className="grid gap-6 mb-10">
                {categories.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white shadow-sm rounded-lg flex items-center justify-center text-accent">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <NavLink smooth to="/about#overview" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group">
                Learn more about our foundation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Teaser Grid */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-white text-4xl mb-6">Our Flagship Programs</h2>
            <p className="text-slate-400">Discover tailored initiatives designed to support every aspect of your teenage and young adult journey.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Life on Campus (LOC)', id: 'loc' },
              { title: 'CTF Scholarship Program', id: 'scholarship' },
              { title: 'Course of Study Finder', id: 'cos' },
              { title: 'Rebuilders Academy', id: 'rebuilders' },
              { title: 'Teacher of the Year', id: 'toy' },
              { title: 'Monthly Conferences', id: 'conferences' }
            ].map((prog) => (
              <motion.div 
                key={prog.id}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm group hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl text-white mb-4">{prog.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Join thousands of other teenagers in this impact-driven initiative focused on excellence.
                </p>
                <NavLink smooth to={`/programs#${prog.id}`} className="text-accent text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Details <ArrowRight size={14} />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
