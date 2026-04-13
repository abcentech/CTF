import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Gavel, ShieldCheck, FileText, Scale, Download } from 'lucide-react';

const Governance = () => {
  const complianceRows = [
    { label: 'CAC Registration', status: 'Active', color: 'ctf-crimson' },
    { label: 'SCUML Certification', status: 'Active', color: 'ctf-purple' },
    { label: 'EFCC Compliance', status: 'Verified', color: 'ctf-pink' },
    { label: 'Annual Reports', status: 'Submitted', color: 'ctf-crimson' },
  ];

  const toneClasses = {
    'ctf-crimson': 'bg-ctf-crimson',
    'ctf-purple': 'bg-ctf-purple',
    'ctf-pink': 'bg-ctf-pink',
  };

  const reportArchive = [
    {
      title: 'Annual Summary 2025',
      description: 'A concise overview of membership growth, outreach milestones, and scholarship support.',
      href: '/reports/annual-summary-2025.txt',
    },
    {
      title: 'Compliance Overview 2026',
      description: 'Current registration status, verification notes, and governance snapshot.',
      href: '/reports/compliance-overview-2026.txt',
    },
    {
      title: 'Impact Brief 2025',
      description: 'A one-page summary of reach, partner schools, and strategic milestones.',
      href: '/reports/impact-brief-2025.txt',
    },
  ];

  return (
    <div className="pt-24 flex flex-col bg-bg">
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
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
              Christian Teenagers Foundation (CTF) operates with structured governance, regulatory compliance, and financial accountability to ensure the safety and empowerment of every member.
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
                Christian Teenagers Foundation (CTF) is a legally registered Nigerian youth development organization with the Corporate Affairs Commission (CAC).
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
                Holds SCUML certification in line with national financial compliance standards, ensuring transparency in all our financial operations.
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
              <h3 className="text-2xl font-black text-ctf-purple uppercase mb-4">Regulatory Compliance</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                We adhere to strict reporting standards and operational guidelines set by Nigerian regulatory bodies for non-profit organizations.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg border-t border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Report Archive</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-6">
                Download <span className="text-ctf-purple italic">Summaries</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These lightweight reports give visitors something concrete to review today. They can later be replaced with polished PDF annual reports when those are ready.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-4">
              {reportArchive.map((report) => (
                <a key={report.title} href={report.href} download className="bg-white p-6 rounded-[28px] shadow-xl border border-gray-100 hover:border-ctf-crimson/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-ctf-crimson/10 text-ctf-crimson flex items-center justify-center mb-4 group-hover:bg-ctf-crimson group-hover:text-white transition-all">
                    <Download size={20} />
                  </div>
                  <h4 className="text-lg font-black text-ctf-purple uppercase mb-3">{report.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{report.description}</p>
                  <span className="text-xs font-black uppercase tracking-widest text-ctf-crimson">Download file</span>
                </a>
              ))}
            </div>
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
                Our governance structure is designed to provide oversight and strategic direction for all CTF programs. The leadership team ensures that resources are allocated efficiently to maximize impact.
              </p>
              <ul className="space-y-6">
                {[
                  'Board of trustees oversight',
                  'Bi-annual financial auditing',
                  'Program impact assessment',
                  'Standardized mentorship procedures',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-ctf-pink/10 text-ctf-pink flex items-center justify-center group-hover:bg-ctf-crimson group-hover:text-white transition-all">
                      <Scale size={16} />
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
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Last Updated: April 2026</span>
                  </div>
                  <div className="flex flex-col gap-6">
                    {complianceRows.map((row) => (
                      <div key={row.label} className="flex justify-between items-center bg-gray-50 px-6 py-4 rounded-2xl">
                        <span className="text-sm font-bold uppercase text-gray-600">{row.label}</span>
                        <span className={`text-[10px] font-black uppercase text-white px-3 py-1 rounded-full ${toneClasses[row.color]}`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-5 bg-ctf-purple text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-ctf-purple/20 hover:bg-ctf-crimson transition-all">
                    Download Annual Report
                  </button>
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
