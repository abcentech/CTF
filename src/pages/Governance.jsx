import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, PieChart, Lock } from 'lucide-react';

const Governance = () => {
  const sections = [
    {
      id: 'compliance',
      title: 'Governance & Compliance',
      content: 'Christian Teenagers Foundation is fully registered and compliant with all relevant regulatory bodies in Nigeria. We maintain the highest standards of ethical conduct and legal adherence in all our operations.',
      icon: ShieldCheck
    },
    {
      id: 'structure',
      title: 'Organizational Structure',
      content: 'Our foundation is guided by a Board of Trustees, an Advisory Council of seasoned ministers and professionals, and an Executive Management Team responsible for day-to-day operations.',
      icon: FileText
    },
    {
      id: 'financial',
      title: 'Financial Transparency',
      content: 'We believe in absolute accountability. Our annual financial statements are audited by reputable firms and made available to our partners and donors to ensure trust and transparency.',
      icon: PieChart
    },
    {
      id: 'safeguarding',
      title: 'Safeguarding Commitment',
      content: 'The safety and well-being of every teenager in our care is our top priority. We have a robust safeguarding policy that guides all interactions between students, mentors, and staff.',
      icon: Lock
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-24 text-white">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6"
          >
            Our <span className="text-accent">Governance</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Built on integrity and accountability. Explore how we manage our foundation to ensure lasting impact.
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.id} id={section.id} className={`section-padding scroll-mt-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <section.icon size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-6">{section.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                  {section.content}
                </p>
                <div className="mt-10 p-8 border border-slate-100 rounded-2xl bg-white shadow-sm italic text-slate-500 text-sm">
                  "Integrity is the bedrock of our foundation. We are committed to transparency in every naira spent and every life influenced."
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Governance;
