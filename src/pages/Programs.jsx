import React from 'react';
import { motion as Motion } from 'framer-motion';
import { GraduationCap, Search, Sparkles, Trophy, Users, Calendar, Video, Book, ShieldCheck, ArrowRight, QrCode, ClipboardCheck } from 'lucide-react';

const Programs = () => {
  const flagshipSystems = [
    {
      id: 'loc',
      title: 'Life on Campus (LOC)',
      subtitle: 'Structured University Transition System',
      desc: 'Designed to prepare SS3 students for the academic, social, and spiritual realities of university life. Features a growing video library of 300-400 level university students sharing real-world experiences across private, public, and international institutions.',
      icon: Video,
      tags: ['University Prep', 'Digital Learning', 'Mentorship'],
      details: 'Integrated LOC book features QR-coded video access, guided reflections, and assessment quizzes for comprehensive preparation.',
    },
    {
      id: 'cos',
      title: 'Course of Study Finder (COS)',
      subtitle: 'Academic Decision-Making Tool',
      desc: 'Helps students identify purpose-aligned university courses based on their strengths and personal values. Includes a specialized JS3 pathway for selecting Science, Arts, Commercial, or Technical tracks, and an SS3 pathway for university course alignment.',
      icon: Search,
      tags: ['Counselling', 'Career Path', 'Academic Clarity'],
      details: 'Reduces decision paralysis and ensures students are placed where they can attain the highest level of excellence.',
    },
    {
      id: 'detergent',
      title: 'Digital Detergent',
      subtitle: '30-Day Character Reset System',
      desc: 'A structured reset program designed to help teenagers develop discipline over their thoughts, habits, and digital consumption. Addresses addiction to pornography and digital distractions through guided reflections and accountability.',
      icon: Sparkles,
      tags: ['Habit Reset', 'Mental Clarity', 'Accountability'],
      details: 'Guiding participants through a 30-day journey of purity, discipline, and intentional living.',
    },
  ];

  const initiatives = [
    {
      id: 'scholarship',
      title: 'CTF Scholarship Program',
      desc: 'Launched in 2025, providing tuition assistance and mentorship to outstanding teenagers in SS2 and SS3. To date, 41+ scholarships have been awarded.',
      icon: GraduationCap,
      stat: '41 Awarded',
    },
    {
      id: 'toy',
      title: 'Teacher of the Year (TOY)',
      desc: 'A recognition platform honoring outstanding educators within CTF partner schools who contribute significantly to student development and mentorship.',
      icon: Trophy,
      stat: 'Honoring Excellence',
    },
    {
      id: 'rebuilders',
      title: 'Rebuilders Academy',
      desc: 'A targeted initiative focused on character formation, discipline, and personal responsibility for teenagers navigating modern social pressures.',
      icon: ShieldCheck,
      stat: 'Character First',
    },
    {
      id: 'conferences',
      title: 'Monthly Conferences',
      desc: 'Standalone gatherings and a daily prayer chain designed to build consistent spiritual capacity and community accountability.',
      icon: Calendar,
      stat: 'Daily Prayer Chain',
    },
  ];

  return (
    <div className="pt-24 flex flex-col bg-bg overflow-hidden">
      <section className="py-24 bg-white border-b border-gray-100 relative">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <Motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-sm"
            >
              Our Delivery Model
            </Motion.h3>
            <Motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-9xl font-black text-ctf-crimson uppercase tracking-tighter leading-[0.85] mb-12"
            >
              Systems <br /> Of <span className="text-ctf-purple italic">Growth</span>
            </Motion.h1>
            <p className="text-2xl text-gray-500 font-light leading-relaxed mb-6 italic border-l-4 border-ctf-pink pl-8">
              "Nurturing teenagers through structured systems that translate potential into measurable excellence."
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg">
        <div className="container">
          <div className="text-left mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-ctf-purple uppercase tracking-tighter italic leading-none">Flagship <br /><span className="text-ctf-crimson">Development Systems</span></h2>
          </div>

          <div className="space-y-16">
            {flagshipSystems.map((sys, i) => (
              <Motion.div
                key={sys.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 md:p-16 rounded-[60px] shadow-3xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:flex-row gap-16 items-start group"
              >
                <div className="w-full lg:w-1/3 aspect-[4/5] bg-gray-50 rounded-[40px] overflow-hidden flex flex-col items-center justify-center relative">
                  <sys.icon size={120} strokeWidth={1} className="text-ctf-crimson/20 group-hover:scale-110 group-hover:text-ctf-crimson/40 transition-all duration-700" />
                  <div className="mt-8 flex flex-wrap justify-center gap-2 p-4">
                    {sys.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-ctf-crimson text-white text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="text-4xl font-black text-ctf-purple uppercase mb-4 italic">{sys.title}</h3>
                  <h4 className="text-sm font-bold text-ctf-pink uppercase tracking-[0.3em] mb-10">{sys.subtitle}</h4>
                  <p className="text-xl text-gray-600 leading-relaxed font-light italic mb-12">"{sys.desc}"</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-bg p-8 rounded-3xl border border-gray-100">
                      <QrCode className="text-ctf-crimson mb-4" size={32} />
                      <p className="text-sm text-gray-700 font-bold uppercase tracking-tight leading-relaxed">{sys.details}</p>
                    </div>
                    <div className="bg-ctf-purple/5 p-8 rounded-3xl border border-ctf-purple/10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-ctf-purple font-black text-xs uppercase tracking-widest mb-4 hover:underline cursor-pointer">
                        Access Library <ArrowRight size={16} />
                      </div>
                      <div className="flex items-center gap-3 text-ctf-crimson font-black text-xs uppercase tracking-widest hover:underline cursor-pointer">
                        Program Handbook <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-black text-ctf-crimson uppercase tracking-tighter leading-none italic">Core <span className="text-ctf-purple">Initiatives</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-bg p-12 rounded-[50px] border border-gray-100 shadow-2xl shadow-gray-200/50 group hover:bg-ctf-crimson transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-ctf-purple shadow-xl group-hover:scale-110 transition-transform">
                    <item.icon size={40} />
                  </div>
                  <span className="px-4 py-2 bg-ctf-pink text-white text-[10px] font-black uppercase tracking-widest rounded-full">{item.stat}</span>
                </div>
                <h3 className="text-3xl font-black text-ctf-purple uppercase mb-6 group-hover:text-white">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light italic group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg border-t border-gray-100">
        <div className="container">
          <div className="bg-ctf-purple p-16 rounded-[80px] text-white flex flex-col lg:flex-row gap-20 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tighter mb-8">Institutional <br /><span className="text-ctf-pink italic">Capacity</span></h2>
              <p className="text-xl text-white/70 leading-relaxed font-light mb-12">Programs are implemented through school outreaches, standalone conferences, and digital platforms. Verification measures ensure every system is effective and safe.</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Assessment Quizzes', icon: ClipboardCheck },
                  { label: 'Guided Reflections', icon: Book },
                  { label: 'Mentorship Reports', icon: Users },
                ].map((feat) => (
                  <div key={feat.label} className="px-6 py-3 bg-white/10 rounded-full flex items-center gap-3 border border-white/20">
                    <feat.icon size={18} className="text-ctf-pink" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/10 p-10 rounded-[40px] text-center backdrop-blur-sm border border-white/20">
                <h3 className="text-4xl font-black text-ctf-pink mb-2">2018</h3>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Inaugurated</p>
              </div>
              <div className="bg-white/10 p-10 rounded-[40px] text-center mt-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-4xl font-black text-white mb-2">600K</h3>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
