import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, UserCheck, Star, Zap, MessageSquare } from 'lucide-react';

const Programs = () => {
  const initiatives = [
    {
      id: 'loc',
      title: 'Life on Campus (LOC)',
      desc: 'Our primary fellowship program helping students navigate the complexities of tertiary education while maintaining a vibrant spiritual life.',
      icon: Zap
    },
    {
      id: 'cos',
      title: 'Course of Study Finder (COS)',
      desc: 'An intelligent platform designed to help teenagers discover their career path based on their talents, passion, and spiritual calling.',
      icon: Search
    },
    {
      id: 'scholarship',
      title: 'CTF Scholarship Program',
      desc: 'Providing financial support to brilliant but underprivileged Christian students across various Nigerian universities.',
      icon: GraduationCap
    },
    {
      id: 'toy',
      title: 'Teacher of the Year (TOY) Awards',
      desc: 'Recognizing and rewarding lecturers and teachers who have made significant impact in the lives of students both academically and spiritually.',
      icon: Star
    },
    {
      id: 'rebuilders',
      title: 'Rebuilders Academy',
      desc: 'A leadership development program focused on equipping teenagers with critical skills for the 21st century.',
      icon: BookOpen
    },
    {
      id: 'conferences',
      title: 'Monthly Conferences & Prayer Chain',
      desc: 'A global network of Christian teenagers connecting every month for spiritual renewal and intercessory prayer.',
      icon: MessageSquare
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl mb-6 font-extrabold"
          >
            Our <span className="text-accent underline decoration-white/20 underline-offset-8">Programs</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Practical initiatives designed to empower every aspect of a Christian teenager's journey.
          </p>
        </div>
      </section>

      {/* Grid Overview Snippet (as requested in outline) */}
      <section id="overview" className="section-padding bg-white scroll-mt-20">
        <div className="container text-center mb-16">
          <h2 className="text-3xl mb-4">Programs Overview</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="p-8 border border-slate-100 rounded-3xl hover:border-accent hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent transition-colors mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <span className="text-xs font-bold text-accent tracking-widest uppercase flex items-center gap-1 group-hover:gap-2">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {initiatives.map((prog, i) => (
        <section 
          key={prog.id} 
          id={prog.id} 
          className={`section-padding scroll-mt-20 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-flex p-3 bg-accent/10 text-accent rounded-xl mb-6">
                  <prog.icon size={32} />
                </div>
                <h3 className="text-4xl mb-6">{prog.title}</h3>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>{prog.desc}</p>
                  <p>
                    This initiative is central to our mission of building a resilient generation. We provide resources, mentorship, and a platform for growth. Participants in the {prog.title} program have reported 40% higher academic engagement and significant spiritual maturity.
                  </p>
                  <ul className="space-y-3">
                    {['Weekly Mentorship', 'Virtual Resources', 'Community Support', 'Certification'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm font-bold text-primary">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-slate-800 transition-all mt-6 shadow-lg">
                    Register for {prog.id.toUpperCase()}
                  </button>
                </div>
              </div>
              <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                 <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase">
                       Program Image Area
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

// Simple search component for COS as a placeholder
const Search = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export default Programs;
