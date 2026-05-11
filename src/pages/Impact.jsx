import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Globe, Users, Award, Heart, MapPin, Quote } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import outreachAbujaImg from '../assets/ctf/outreach-abuja.jpg';
import outreachIlorinImg from '../assets/ctf/outreach-ilorin.jpg';
import scholarshipImg from '../assets/ctf/scholarship-3.jpg';
import outreachUnilorinImg from '../assets/ctf/outreach-unilorin.jpg';
import programsFeatureImg from '../assets/ctf/programs-feature.png';
import globeRealImg from '../assets/ctf/globe-real.png';

const Impact = () => {
  const metricGroups = [
    {
      title: 'Community Impact',
      accent: 'ctf-crimson',
      stats: [
        { label: 'Students Mentored', value: '2,000+', icon: Users },
        { label: 'Scholarships Awarded', value: '52+', icon: Award },
        { label: 'Schools & Campuses Reached', value: '100+', icon: Heart },
      ],
    },
    {
      title: 'Digital Impact',
      accent: 'ctf-purple',
      stats: [
        { label: 'Single-Campaign Reach', value: '600K+', icon: Globe },
        { label: 'Content Engagements', value: '11K+', icon: Heart },
        { label: 'Online Community', value: '12K+', icon: Users },
      ],
    },
    {
      title: 'Organizational Footprint',
      accent: 'ctf-pink',
      stats: [
        { label: 'Strategic Partners', value: '150+', icon: Heart },
        { label: 'States in Nigeria', value: '9', icon: MapPin },
        { label: 'Countries with CTF Members', value: '10+', icon: Globe },
        { label: 'Outreaches Conducted', value: '200+', icon: Award },
      ],
    },
  ];

  const accentClasses = {
    'ctf-crimson': 'text-ctf-crimson',
    'ctf-purple': 'text-ctf-purple',
    'ctf-pink': 'text-ctf-pink',
  };

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Germany',
    'Ukraine',
    'Nigeria',
    'Ghana',
    'Kenya',
    'France',
    'South Africa',
  ];

  const gallery = [
    { image: outreachAbujaImg, title: 'Campus Life' },
    { image: outreachIlorinImg, title: 'School Engagement' },
    { image: scholarshipImg, title: 'Scholarship Support' },
    { image: outreachUnilorinImg, title: 'Leadership' },
  ];

  return (
    <div className="pt-24 flex flex-col bg-bg overflow-hidden">
      <section className="py-24 bg-white relative">
        <div className="container relative z-10 text-center">
          <Motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-xs md:text-sm"
          >
            Impact
          </Motion.h3>
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black text-ctf-crimson uppercase tracking-tighter leading-[0.85] mb-12"
          >
            Measurable <br /> <span className="text-ctf-purple italic">Transformation</span>
          </Motion.h1>
          <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto italic">
            CTF continues to reach teenagers, campuses, scholarship recipients, and partner communities.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card-bg">
        <div className="container space-y-10">
          {metricGroups.map((group, groupIndex) => (
            <div key={group.title} className="space-y-6">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                  <p className={`text-sm font-black tracking-[0.35em] uppercase ${accentClasses[group.accent]}`}>{group.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.stats.map((stat, i) => (
                  <Motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIndex * 0.1) + (i * 0.08), duration: 0.6 }}
                    className="bg-white p-12 rounded-[40px] shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mb-10 group-hover:rotate-[15deg] transition-all duration-500 text-ctf-purple">
                      <stat.icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-ctf-purple mb-4 tracking-tighter">
                      <AnimatedCounter value={stat.value} />
                    </h3>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
                  </Motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Photo Gallery</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase tracking-tighter italic leading-none">
                Stories from the <span className="text-ctf-purple">field</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {gallery.map((item, index) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`${index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-3'} rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 relative`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full min-h-[320px] object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <p className="text-white font-black uppercase tracking-[0.2em] text-sm">{item.title}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ctf-crimson relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                Global <br /><span className="text-ctf-pink italic">Footprint</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-light mb-12">
                CTF members are studying in universities across multiple countries, extending the foundation&apos;s reach beyond Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                {countries.map((country) => (
                  <span key={country} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-bold text-sm uppercase tracking-widest border border-white/20">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square overflow-hidden rounded-[60px] border-4 border-white/10 flex items-center justify-center p-0">
                <img src={globeRealImg} alt="Global Footprint" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ctf-pink rounded-full blur-[80px] opacity-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="bg-gray-50 p-12 rounded-[40px] border-l-8 border-ctf-purple relative">
              <Quote className="absolute -top-6 -left-6 text-ctf-pink opacity-20" size={80} />
              <p className="text-2xl text-ctf-purple font-black uppercase tracking-tight leading-tight mb-8 italic">
                &quot;Membership onboarding and school engagement continued across Lagos and partner communities.&quot;
              </p>
              <p className="text-gray-600 leading-relaxed">
                LOC and COS remained the flagship academic transition systems, while scholarship support reached outstanding SS2 and SS3 students.
              </p>
            </div>

            <div className="text-center">
              <a href="CTF_Annual_Returns_2025.pdf" download className="px-12 py-6 bg-ctf-crimson text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-ctf-crimson/20">
                Download Annual Returns 2025
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
