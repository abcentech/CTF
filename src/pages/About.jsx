import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Shield, Target, Eye, Users, History, Building2 } from 'lucide-react';

const About = () => {
  const leadership = [
    { name: 'Pst. Oluwatosin Noiki (Mr. Tee)', role: 'Founder & Visionary', bio: 'Founder of the Christian Teenagers Foundation (CTF). Committed to raising a generation that is spiritually alive, intellectually equipped, socially responsible, and globally relevant.' },
    { name: 'Amarachi Aririsichukwu', role: 'General Secretary', bio: 'Directs administrative structure, ensuring institutional clarity and seamless coordination of foundation operations.' },
    { name: 'Greatpeace Edionwele', role: 'Prayer Director', bio: 'Coordinates the spiritual engine of CTF, overseeing the daily prayer chain and intercessory systems.' },
    { name: 'Tuwase David', role: 'Outreach Director', bio: 'Leads expansion efforts into secondary schools, managing grassroots engagements and outreaches.' },
    { name: 'Ore Martins', role: 'Digital & Creative Director', bio: "Drives the creative vision and digital strategy, ensuring CTF's message reaches teenagers globally." },
    { name: 'Ifeanyi Emmanuel', role: 'Finance Director', bio: 'Oversees financial accountability and systems, ensuring resources are mobilized for maximum student impact.' },
    { name: 'Abore Simisola', role: 'Director of Welfare', bio: 'Ensures the personal well-being and welfare of every member within the community.' },
  ];

  const partners = [
    'GWAT Private School',
    'Jofem Secondary School',
    'Badore Community College',
    'Olomu Community High School',
    'Millennium College',
  ];

  const pillars = [
    { name: 'Academic Excellence', framework: 'PRIZE', details: 'Productivity, Responsibility, Integrity, Zeal, Excellence. Guiding students to attain top-tier results through disciplined study habits.' },
    { name: 'Financial Intelligence', framework: 'CASHIER', details: 'Budgeting, Avoiding Scams, Savings, Hard work, Integrity, Entrepreneurship, Reaping & Sowing.' },
    { name: 'Social Adeptness', framework: 'FRIENDS', details: 'Family First, Respect for Mentors, Intentional Networking, Emotional Intelligence, Social Media Discipline.' },
    { name: 'Leadership Excellence', framework: 'VOWELS', details: 'Authenticity, Empathy, Inspiration, Originality, Understanding Strengths.' },
    { name: 'Christ-like Spirituality', framework: 'GROW', details: 'Gospel commitment, Renewal of Mind, Outreach/Service, Worship and the Word.' },
  ];

  const timeline = [
    { year: '2018', event: 'Official inauguration on February 19 with 7 members in Egbeda, Lagos.' },
    { year: '2020', event: 'COVID-19 pivot: transitioned to global online platforms to stay connected.' },
    { year: '2021', event: 'Established the first standalone community library in Egbeda for students.' },
    { year: '2024', event: 'Major expansion to public schools across Lagos Island and Mainland.' },
    { year: '2025', event: 'Launched the CTF Scholarship Program and the Life on Campus (LOC) initiative.' },
  ];

  return (
    <div className="pt-24 flex flex-col bg-white">
      <section id="story" className="py-24 bg-card-bg relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <Motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-sm"
          >
            The Heart of CTF
          </Motion.h3>
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-12"
          >
            Our <span className="text-ctf-purple italic">Story</span>
          </Motion.h1>
          <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto italic border-t border-gray-100 pt-12">
            "We provide teenagers with equipment for clarity, capacity, and discipline to navigate modern social pressures."
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-ctf-crimson uppercase tracking-tighter italic">From Egbeda <br /> to the World</h2>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Founded on February 19, 2018, the Christian Teenagers Foundation (CTF) began with a clear mandate: raising a people without blemish. What started with just seven people has transformed into a strategic movement impacting over 600,000 teenagers across Nigeria.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                By providing structured development frameworks across five core pillars, we equip young people with the spiritual, intellectual, and social tools needed for global relevance.
              </p>
              <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-ctf-pink">
                <History className="text-ctf-pink mb-4" size={32} />
                <h4 className="text-lg font-black text-ctf-purple uppercase mb-2">Our Footprint</h4>
                <p className="text-sm text-gray-500 italic">Global alumni footprint currently spans the United States, UK, Canada, Ukraine, and Germany.</p>
              </div>
            </div>

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <Motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <span className="text-3xl font-black text-ctf-purple/30 group-hover:text-ctf-crimson transition-colors pt-1">{item.year}</span>
                  <div className="p-6 bg-bg rounded-2xl border border-gray-100 flex-grow group-hover:bg-white group-hover:shadow-2xl transition-all">
                    <p className="text-gray-500 font-bold uppercase tracking-tight italic">{item.event}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-24 bg-card-bg">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Eye, title: 'Our Vision', content: 'Raising a generation of Spirit-Filled teenagers who will transform their world.', color: 'ctf-crimson' },
              { icon: Target, title: 'Our Mission', content: 'Equipping teenagers with the skillset and resources to attain excellence in academics, finance, social lives, leadership, and spirituality.', color: 'ctf-purple' },
              { icon: Shield, title: 'Our Mandate', content: '"Oluwatosin, raise me a people without blemish." - 1 Timothy 4:12', color: 'ctf-pink' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-12 rounded-[50px] shadow-2xl shadow-gray-200 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-ctf-pink mx-auto mb-10">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-ctf-purple uppercase mb-6">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light italic">"{item.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="py-24 bg-ctf-crimson text-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">Development <span className="text-ctf-pink italic">Frameworks</span></h2>
            <p className="text-white/70 max-w-3xl mx-auto text-lg font-light leading-relaxed">
              Comprehensive systems that translate kingdom principles into measurable goals across five core dimensions of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <Motion.div
                key={pillar.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-2xl font-black uppercase leading-tight italic">{pillar.name}</h4>
                  <span className="px-4 py-2 bg-ctf-pink text-[10px] font-black tracking-widest uppercase rounded-full">{pillar.framework}</span>
                </div>
                <p className="text-white/60 leading-relaxed font-light text-sm italic">
                  {pillar.details}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-ctf-crimson uppercase tracking-tighter italic">Leadership <span className="text-ctf-purple">& Stewardship</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {leadership.map((member, i) => (
              <Motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card-bg p-12 rounded-[60px] border border-gray-100 flex flex-col gap-8 ${i === 0 ? 'lg:col-span-3 lg:flex-row items-center border-l-8 border-l-ctf-crimson' : ''}`}
              >
                <div className={`${i === 0 ? 'lg:w-1/3' : 'w-full'} aspect-square bg-white rounded-[40px] shadow-xl overflow-hidden`}>
                  <div className="w-full h-full bg-gradient-to-br from-ctf-crimson/5 to-ctf-purple/10 flex items-center justify-center text-ctf-purple text-6xl font-black">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className={`${i === 0 ? 'lg:w-2/3 lg:pl-12' : 'w-full'}`}>
                  <h3 className="text-3xl font-black text-ctf-crimson uppercase mb-2 italic">{member.name}</h3>
                  <h4 className="text-xs font-bold text-ctf-purple uppercase tracking-[0.3em] mb-8">{member.role}</h4>
                  <p className="text-gray-500 leading-relaxed font-light italic">"{member.bio}"</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg border-t border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-ctf-purple uppercase tracking-tighter leading-none mb-6 italic">Strategic <br /><span className="text-ctf-crimson">Partner Schools</span></h3>
              <p className="text-gray-500 font-light italic text-lg leading-relaxed mb-6">"Expansion into public and private institutions to reach teenagers at the source."</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partners.map((school) => (
                <div key={school} className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center gap-4 group hover:bg-ctf-purple transition-all shadow-xl shadow-gray-200/50">
                  <Building2 size={24} className="text-ctf-pink group-hover:text-white" />
                  <span className="text-sm font-black text-ctf-purple uppercase tracking-tight group-hover:text-white">{school}</span>
                </div>
              ))}
              <div className="bg-ctf-crimson/10 p-8 rounded-3xl border border-ctf-crimson/20 flex items-center gap-4">
                <Users size={24} className="text-ctf-crimson" />
                <span className="text-sm font-black text-ctf-crimson uppercase tracking-tight">100+ Schools Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
