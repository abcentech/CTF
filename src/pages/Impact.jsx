import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Globe, Users, Trophy, Award, Heart, MapPin, TrendingUp, ShieldCheck, Quote } from 'lucide-react';

const Impact = () => {
  const stats = [
    { label: 'Teenagers Reached', value: '600,000+', icon: Users, color: '#BB1654' },
    { label: 'Gatherings Conducted', value: '200+', icon: Globe, color: '#672A85' },
    { label: 'Scholarships Awarded', value: '41+', icon: Award, color: '#E60975' },
    { label: 'Strategic Partners', value: '150+', icon: Heart, color: '#BB1654' },
    { label: 'States Reached', value: '9', icon: MapPin, color: '#672A85' },
    { label: 'Schools & Campuses', value: '100+', icon: TrendingUp, color: '#E60975' },
    { label: 'Mobilized for Programs', value: '₦19.5M+', icon: ShieldCheck, color: '#BB1654' },
  ];

  const countries = ['United States', 'United Kingdom', 'Canada', 'Ukraine', 'Germany'];

  return (
    <div className="pt-24 flex flex-col bg-bg overflow-hidden">
      {/* Header */}
      <section className="py-24 bg-white relative">
        <div className="container relative z-10 text-center">
          <Motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-xs md:text-sm"
          >
            Our Impact
          </Motion.h3>
          <Motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black text-ctf-crimson uppercase tracking-tighter leading-[0.85] mb-12"
          >
            Measurable <br /> <span className="text-ctf-purple italic">Transformation</span>
          </Motion.h1>
          <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto italic">
            "From just seven people in 2018 to a movement impacting hundreds of thousands across Nigeria and beyond."
          </p>
        </div>
      </section>

      {/* Grid Stats */}
      <section className="py-24 bg-card-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-12 rounded-[50px] shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
              >
                <div 
                  className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-10 group-hover:rotate-[15deg] transition-all duration-500"
                  style={{ color: stat.color }}
                >
                  <stat.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-ctf-purple mb-4 tracking-tighter">{stat.value}</h3>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-24 bg-ctf-crimson relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                   Global <br /><span className="text-ctf-pink italic">Footprint</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-light mb-12">
                   Notably, CTF’s influence has extended globally, with alumni currently studying in several countries across the world, proving that our development framework builds internationally competitive leaders.
                </p>
                <div className="flex flex-wrap gap-4">
                   {countries.map(country => (
                     <span key={country} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-sm uppercase tracking-widest border border-white/20">
                        {country}
                     </span>
                   ))}
                </div>
             </div>
             <div className="relative">
                <div className="w-full aspect-square bg-white/5 rounded-[60px] border-4 border-white/10 flex items-center justify-center text-white/20 p-12">
                   <Globe size={400} strokeWidth={0.5} className="animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ctf-pink rounded-full blur-[80px] opacity-40" />
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Impact */}
      <section className="py-24 bg-white">
        <div className="container">
           <div className="max-w-4xl mx-auto space-y-16">
              <div className="bg-gray-50 p-12 rounded-[40px] border-l-8 border-ctf-purple relative">
                 <Quote className="absolute -top-6 -left-6 text-ctf-pink opacity-20" size={80} />
                 <p className="text-2xl text-ctf-purple font-black uppercase tracking-tight leading-tight mb-8 italic">
                    "From school outreaches to global campuses, the transformation is evident in every member."
                 </p>
                 <p className="text-gray-600 leading-relaxed">
                    By 2025, CTF entered a new phase of structured impact—launching its Scholarship Program and publishing the Life on Campus (LOC) book. Today, CTF stands as a growing youth development organization shaping the future of teenagers across Nigeria and beyond.
                 </p>
              </div>
              
              <div className="text-center">
                <button className="px-12 py-6 bg-ctf-crimson text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-ctf-crimson/20">
                   View Annual Reports
                </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
