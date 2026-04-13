import React from 'react';
import { motion as Motion } from 'framer-motion';
import { UserPlus, Handshake, Heart, MessageSquare, ArrowRight, ExternalLink, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

const GetInvolved = () => {
  const pathways = [
    {
      id: 'member',
      title: 'Become a CTF Member',
      icon: UserPlus,
      color: 'ctf-crimson',
      desc: 'Join a community focused on academic excellence, leadership growth, and spiritual development. Membership includes a 4-week structured onboarding class.',
      details: 'Open to teenagers aged 13-19 who align with our values.',
      cta: 'Apply for Membership',
    },
    {
      id: 'mentor',
      title: 'Request a Mentor',
      icon: MessageSquare,
      color: 'ctf-purple',
      desc: 'Receive guidance in academics, personal development, and spiritual growth. Requests are reviewed and matched through our coordination system.',
      details: 'Ensuring proper guidance and accountability for every teenager.',
      cta: 'Request a Mentor',
    },
    {
      id: 'partner',
      title: 'Become a Partner',
      icon: Handshake,
      color: 'ctf-pink',
      desc: 'Partner with CTF to expand its reach and impact. Opportunities include sponsoring scholarships, collaborating on outreaches, and institutional support.',
      details: 'For individuals, schools, and organisations interested in transformation.',
      cta: 'Become a Partner',
    },
    {
      id: 'donate',
      title: 'Support / Donate',
      icon: Heart,
      color: 'ctf-crimson',
      desc: 'CTF operates through structured financial systems. All contributions are directed toward program execution and student support.',
      details: 'Verified channels: Union Bank Nigeria | PayPal (International)',
      cta: 'Support CTF',
    },
  ];

  const toneClasses = {
    'ctf-crimson': {
      icon: 'bg-ctf-crimson/10 text-ctf-crimson group-hover:bg-ctf-crimson group-hover:text-white',
      title: 'text-ctf-crimson',
      button: 'bg-ctf-crimson hover:bg-ctf-pink',
    },
    'ctf-purple': {
      icon: 'bg-ctf-purple/10 text-ctf-purple group-hover:bg-ctf-purple group-hover:text-white',
      title: 'text-ctf-purple',
      button: 'bg-ctf-purple hover:bg-ctf-crimson',
    },
    'ctf-pink': {
      icon: 'bg-ctf-pink/10 text-ctf-pink group-hover:bg-ctf-pink group-hover:text-white',
      title: 'text-ctf-pink',
      button: 'bg-ctf-pink hover:bg-ctf-purple',
    },
  };

  return (
    <div className="pt-24 flex flex-col bg-bg overflow-hidden">
      <section className="py-24 bg-white relative">
        <div className="container relative z-10 text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <Motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-sm"
              >
                Join the Movement
              </Motion.h3>
              <Motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-9xl font-black text-ctf-crimson uppercase tracking-tighter leading-[0.85] mb-8"
              >
                Choose <br /> Your <span className="text-ctf-purple italic">Path</span>
              </Motion.h1>
            </div>
            <div className="pb-4">
              <p className="text-2xl text-gray-500 font-light leading-relaxed italic border-l-4 border-ctf-purple pl-8">
                "Christian Teenagers Foundation provides multiple pathways for students, parents, and partners to engage with its programs and initiatives."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((path, i) => (
              <Motion.div
                key={path.id}
                id={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 ${toneClasses[path.color].icon}`}>
                    <path.icon size={40} />
                  </div>
                  <h3 className={`text-3xl font-black uppercase mb-6 tracking-tight italic ${toneClasses[path.color].title}`}>{path.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">{path.desc}</p>
                  <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-2xl mb-12">
                    <ShieldCheck className="text-ctf-purple shrink-0 mt-1" size={18} />
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">{path.details}</p>
                  </div>
                </div>
                <button className={`w-full py-5 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all ${toneClasses[path.color].button}`}>
                  {path.cta} <ArrowRight size={20} />
                </button>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-ctf-crimson p-16 rounded-[60px] text-white flex flex-col lg:flex-row gap-16 items-center shadow-3xl shadow-ctf-crimson/20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8 italic">Trust & <br /><span className="text-ctf-pink">Verification</span></h2>
              <p className="text-white/70 leading-relaxed font-light mb-8 italic">
                Parents and guardians can verify CTF through its Governance & Compliance page or by contacting the organization directly. We maintain structured oversight to ensure a safe environment.
              </p>
              <a href="/governance" className="flex items-center gap-4 text-white font-black uppercase text-sm group">
                Visit Compliance Page <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {['Safe Environment', 'Transparent Finance', 'Structured Mentorship', 'Legal Registration'].map((item) => (
                <div key={item} className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-bg border-t border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-black text-ctf-crimson uppercase mb-6">Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-ctf-purple shrink-0 mt-1" size={20} />
                  <a href="mailto:CTFinquiries@gmail.com" className="text-gray-700 font-medium">CTFinquiries@gmail.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-ctf-purple shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Egbeda, Lagos, Nigeria</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-ctf-purple shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Response via official email and partner school channels</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-ctf-purple p-10 rounded-[40px] text-white shadow-xl">
              <h3 className="text-2xl md:text-4xl font-black uppercase mb-4">What was missing</h3>
              <p className="text-white/75 leading-relaxed mb-8">This site now has a real contact section, clearer entry points for members and partners, and direct paths to the compliance page. The next step is replacing these placeholders with live forms and working donation links.</p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:CTFinquiries@gmail.com" className="px-6 py-3 bg-white text-ctf-purple rounded-full font-black uppercase tracking-widest text-xs">Email Us</a>
                <a href="/faq" className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-black uppercase tracking-widest text-xs">Read FAQ</a>
                <a href="/governance" className="px-6 py-3 bg-white/10 border border-white/20 rounded-full font-black uppercase tracking-widest text-xs">See Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
