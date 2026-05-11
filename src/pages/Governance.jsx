import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Gavel, ShieldCheck, FileText, Users } from 'lucide-react';
import governanceHeroImg from '../assets/ctf/campus-talk.jpg';

const Governance = () => {
  const complianceRows = [
    { label: 'CAC Registration', status: 'Active', color: 'ctf-crimson' },
    { label: 'SCUML Certification', status: 'Active', color: 'ctf-purple' },
    { label: 'EFCC Compliance', status: 'Verified', color: 'ctf-pink' },
    { label: 'Annual Documentation', status: 'Submitted', color: 'ctf-crimson' },
  ];

  const toneClasses = {
    'ctf-crimson': 'bg-ctf-crimson',
    'ctf-purple': 'bg-ctf-purple',
    'ctf-pink': 'bg-ctf-pink',
  };

  const advisoryBoard = [
    {
      name: 'Mrs. Blessing Victory Ogwu',
      role: 'Board Chair',
      summary: "Senior banking executive at UBA with deep expertise in corporate governance, risk management, and institutional leadership. Provides strategic oversight, financial discipline, and boardroom-level guidance for CTF's growth and sustainability.",
    },
    {
      name: 'Mr. David Folaranmi',
      role: 'Vice Chair',
      summary: 'Teenager development strategist, mental health advocate, and addiction recovery specialist with global exposure. Brings expertise in teen wellbeing, behavioural reform, and safeguarding frameworks across institutional and policy levels.',
    },
    {
      name: 'Mrs. Uyoyo Edosio',
      role: 'Board Member',
      summary: "Senior technology and innovation leader with experience in digital transformation and development finance ecosystems. Strengthens CTF's strategic thinking, ecosystem building, and technology-driven impact models.",
    },
    {
      name: 'Mrs. Titun Aderibigbe',
      role: 'Board Member',
      summary: 'Canada-based leader with strong church and community network engagement (MFM Mega Church). Contributes to parent engagement strategy, mentorship systems, and faith-based community integration.',
    },
    {
      name: 'Mrs. Joannah Ojada',
      role: 'Board Member',
      summary: 'Professional in the oil and gas sector with strong operational and strategic coordination experience. Supports governance clarity, structured execution, and high-level organizational thinking.',
    },
    {
      name: 'Mrs. Adesanmi Olusogo',
      role: 'Board Member',
      summary: 'Former Central Bank of Nigeria professional with expertise in financial regulation, compliance, and systems governance. Brings strong institutional discipline, accountability frameworks, and financial oversight capability.',
    },
    {
      name: 'Mrs. Blessing Oluwatosin',
      role: 'Board Member',
      summary: 'Director of Rebuilders Academy, focused on the rehabilitation and reintegration of suspended undergraduates. Provides deep insight into teenager restoration systems, institutional partnerships, and mission continuity.',
    },
    {
      name: 'Mrs. Omotola Ezenwoke',
      role: 'Board Member',
      summary: "Finance lecturer at Covenant University with expertise in accounting, economics, and academic research. Adds scholarly rigour, curriculum insight, and data-driven thinking to CTF's education strategy.",
    },
    {
      name: 'Mrs. Esther Ocholie',
      role: 'Board Member',
      summary: "Educator and caregiver based in Canada with experience in adolescent development and pastoral support. Strengthens CTF's mentorship, emotional care systems, and faith-based engagement with teenagers.",
    },
    {
      name: 'Mrs. Somto Ihenacho',
      role: 'Board Member',
      summary: 'Co-founder at Scrum Technologies USA with experience in digital operations and brand support. Contributes to digital engagement strategy, teenager communication, and online community growth.',
    },
    {
      name: 'Dr. Festus Adedoyin',
      role: 'Board Member',
      summary: 'Senior academic at Bournemouth University with expertise in AI, data science, and economics. Provides research depth, policy insight, and data-driven strategy for long-term institutional scaling.',
    },
    {
      name: 'Mr. Opeyemi Akinnusi',
      role: 'Board Member',
      summary: 'Technology and cloud infrastructure professional with governance experience as a UK-based trustee. Supports digital architecture, systems thinking, and scalable organizational design.',
    },
    {
      name: 'Mr. David Owoyemi',
      role: 'Board Member',
      summary: 'Finance and accounting professional based in the United States with global financial exposure. Brings expertise in financial strategy, reporting, and structured growth planning.',
    },
    {
      name: 'Pst. Seun Adenigba',
      role: 'Board Member',
      summary: "Canada-based pastor and spiritual leader with strong experience in discipleship and teenager mentorship. Strengthens CTF's spiritual covering, leadership formation, and faith-based direction.",
    },
  ];

  return (
    <div className="pt-24 flex flex-col bg-bg">
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-ctf-pink font-black uppercase tracking-[0.3em] mb-4 text-sm"
              >
                Integrity & Compliance
              </Motion.h3>
              <Motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-10"
              >
                Governance & <span className="text-ctf-purple italic">Compliance</span>
              </Motion.h1>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Christian Teenagers Foundation (CTF) operates with structured governance, regulatory compliance, and financial accountability.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ctf-crimson/20 to-ctf-purple/20 blur-3xl rounded-[40px]" />
              <div className="relative overflow-hidden rounded-[40px] shadow-2xl border border-white/60">
                <img src={governanceHeroImg} alt="CTF leadership and governance setting" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-ctf-pink mb-2">Leadership Reference</p>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Advisory Board & Compliance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg border-y border-gray-100">
        <div className="container">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-7xl font-black text-ctf-crimson uppercase tracking-tighter italic leading-none mb-6">
              Advisory <span className="text-ctf-purple">Board</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              CTF is guided by a multidisciplinary Advisory Board with expertise across governance, education, finance, technology, teenager development, and global systems leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {advisoryBoard.map((member, index) => (
              <Motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-ctf-crimson/10 text-ctf-crimson flex items-center justify-center mb-6">
                  <Users size={26} />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-ctf-pink mb-3">{member.role}</p>
                <h3 className="text-2xl font-black text-ctf-purple uppercase leading-tight mb-4">{member.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{member.summary}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-[32px] p-8 shadow-xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              The CTF Advisory Board reflects a balance of spiritual leadership, professional excellence, and global perspective; stewarding CTF towards sustainable, high-impact teenager transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-ctf-crimson/10 text-ctf-crimson rounded-2xl flex items-center justify-center mb-8">
                <Gavel size={32} />
              </div>
              <h3 className="text-2xl font-black text-ctf-purple uppercase mb-4">CAC Registered</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Christian Teenagers Foundation (CTF) is registered with the Corporate Affairs Commission (CAC) in Nigeria.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 1, scale: 1 }}
              className="bg-ctf-crimson p-10 rounded-[40px] shadow-2xl shadow-ctf-crimson/30 flex flex-col items-center text-center transform scale-105 z-10"
            >
              <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-4">SCUML Certified</h3>
              <p className="text-sm text-white/80 leading-relaxed font-bold tracking-tight">
                Holds SCUML certification in line with national financial compliance standards.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-ctf-purple/10 text-ctf-purple rounded-2xl flex items-center justify-center mb-8">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-black text-ctf-purple uppercase mb-4">Documentation Available</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Annual returns, impact overview, and compliance information are available here.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-8">
                Structured <span className="text-ctf-purple block mt-2">Accountability</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                The annual returns overview confirms the registration statuses listed above.
              </p>
              <ul className="space-y-6">
                {[
                  'CAC registration active',
                  'SCUML certification active',
                  'EFCC compliance verified',
                  'Annual documentation submitted',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-ctf-pink/10 text-ctf-pink flex items-center justify-center group-hover:bg-ctf-crimson group-hover:text-white transition-all">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-ctf-crimson to-ctf-purple p-1 rounded-[40px] shadow-3xl">
                <div className="bg-white p-12 rounded-[38px] flex flex-col gap-8">
                  <div className="text-center border-b border-gray-100 pb-8">
                    <h4 className="text-lg font-black text-ctf-purple uppercase tracking-widest">Compliance Status</h4>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Current snapshot</span>
                  </div>
                  <div className="flex flex-col gap-6">
                    {complianceRows.map((row) => (
                      <div key={row.label} className="flex justify-between items-center bg-gray-50 px-6 py-4 rounded-2xl">
                        <span className="text-sm font-bold uppercase text-gray-600">{row.label}</span>
                        <span className={`text-[10px] font-black uppercase text-white px-3 py-1 rounded-full ${toneClasses[row.color]}`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
