import React from 'react';
import { motion as Motion } from 'framer-motion';
import { GraduationCap, Search, Sparkles, Trophy, Users, Calendar, Video, Book, ShieldCheck, ArrowRight, QrCode } from 'lucide-react';
import locImg from '../assets/ctf/hero-campus.jpg';
import cosImg from '../assets/ctf/hero-campus-alt.jpg';
import detergentImg from '../assets/ctf/campus-talk.jpg';
import scholarshipImg from '../assets/ctf/scholarship-1.jpg';
import toyImg from '../assets/ctf/scholarship-2.jpg';
import rebuilderImg from '../assets/ctf/outreach-covenant.jpg';
import conferenceImg from '../assets/ctf/campus-session.jpg';

const Programs = () => {
  const flagshipSystems = [
    {
      id: 'loc',
      title: 'Life on Campus (LOC)',
      subtitle: 'Structured university transition system',
      desc: 'CTF\'s structured university transition system designed to prepare SS3 students for the academic, social, and spiritual realities of university life.',
      icon: Video,
      tags: ['University Prep', 'Digital Learning', 'Mentorship'],
      details: 'The companion LOC book includes QR-enabled content, guided reflections, and quizzes for practical learning.',
      image: locImg,
    },
    {
      id: 'cos',
      title: 'Course of Study Finder (COS)',
      subtitle: 'Academic decision-making tool',
      desc: 'A structured system that helps students identify suitable university courses based on their strengths, interests, and values.',
      icon: Search,
      tags: ['Counselling', 'Career Path', 'Academic Clarity'],
      details: 'Supports both SS3 students choosing university courses and JS3 students selecting academic tracks.',
      image: cosImg,
    },
    {
      id: 'detergent',
      title: 'Digital Detergent',
      subtitle: '30-day character reset system',
      desc: 'A structured reset program designed to help teenagers develop discipline over their thoughts, habits, and digital consumption.',
      icon: Sparkles,
      tags: ['Habit Reset', 'Mental Clarity', 'Accountability'],
      details: 'Guides participants toward discipline, purity, and renewed mental clarity through daily structured engagement.',
      image: detergentImg,
    },
  ];

  const initiatives = [
    {
      id: 'scholarship',
      title: 'CTF Scholarship Program',
      desc: 'An annual academic support initiative launched in 2025 to provide tuition assistance and mentorship to selected SS2 and SS3 students.',
      icon: GraduationCap,
      stat: '41 Awarded',
      image: scholarshipImg,
    },
    {
      id: 'toy',
      title: 'Teacher of the Year (TOY)',
      desc: 'A recognition platform honoring outstanding teachers within partner schools, promoting excellence in teaching and mentorship.',
      icon: Trophy,
      stat: 'Honoring Excellence',
      image: toyImg,
    },
    {
      id: 'rebuilders',
      title: 'Rebuilders Academy',
      desc: 'A targeted development program focused on discipline, character formation, and personal responsibility for teenagers.',
      icon: ShieldCheck,
      stat: 'Character First',
      image: rebuilderImg,
    },
    {
      id: 'conferences',
      title: 'Monthly Conferences & Prayer Chain',
      desc: 'Structured gatherings and coordinated prayer systems designed to support spiritual growth, accountability, and community engagement.',
      icon: Calendar,
      stat: 'Daily Prayer Chain',
      image: conferenceImg,
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
              Programs & Systems
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
              CTF operates through structured systems and initiatives designed to support teenagers across academic, behavioral, leadership, and spiritual dimensions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg">
        <div className="container">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-ctf-purple uppercase tracking-tighter italic leading-none">
              Flagship <br /><span className="text-ctf-crimson">Development Systems</span>
            </h2>
          </div>

          <div className="space-y-16">
            {flagshipSystems.map((sys, i) => (
              <Motion.div
                key={sys.id}
                id={sys.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 md:p-12 rounded-[56px] shadow-3xl shadow-gray-200/50 border border-gray-100 grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className="rounded-[36px] overflow-hidden shadow-xl">
                  <img src={sys.image} alt={sys.title} className="w-full h-full min-h-[360px] object-cover" />
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sys.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-ctf-crimson text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl font-black text-ctf-purple uppercase mb-4 italic">{sys.title}</h3>
                  <h4 className="text-sm font-bold text-ctf-pink uppercase tracking-[0.3em] mb-6">{sys.subtitle}</h4>
                  <p className="text-xl text-gray-600 leading-relaxed font-light italic mb-8">{sys.desc}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-bg p-6 rounded-3xl border border-gray-100">
                      <QrCode className="text-ctf-crimson mb-4" size={32} />
                      <p className="text-sm text-gray-700 font-bold uppercase tracking-tight leading-relaxed">{sys.details}</p>
                    </div>
                    <div className="bg-ctf-purple/5 p-6 rounded-3xl border border-ctf-purple/10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-ctf-purple font-black text-xs uppercase tracking-widest mb-4">
                        Program Details <ArrowRight size={16} />
                      </div>
                      <div className="flex items-center gap-3 text-ctf-crimson font-black text-xs uppercase tracking-widest">
                        View more <ArrowRight size={16} />
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-8xl font-black text-ctf-crimson uppercase tracking-tighter leading-none italic">
              Core <span className="text-ctf-purple">Initiatives</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card-bg rounded-[44px] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden"
              >
                <div className="aspect-[16/10]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-ctf-purple shadow-xl">
                      <item.icon size={40} />
                    </div>
                    <span className="px-4 py-2 bg-ctf-pink text-white text-[10px] font-black uppercase tracking-widest rounded-full">{item.stat}</span>
                  </div>
                  <h3 className="text-3xl font-black text-ctf-purple uppercase mb-5 italic">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light italic">{item.desc}</p>
                </div>
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
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tighter mb-8">
                Program <br /><span className="text-ctf-pink italic">Delivery</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-light mb-12">
                CTF programs are implemented through school-based outreaches, structured mentorship systems, digital learning platforms, conferences, and peer-to-peer learning spaces.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Mentorship', 'School Outreach', 'Digital Learning', 'Prayer Chain'].map((item) => (
                  <div key={item} className="px-6 py-3 bg-white/10 rounded-full border border-white/20">
                    <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative z-10">
              <img src={conferenceImg} alt="CTF gathering" className="w-full rounded-[40px] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
