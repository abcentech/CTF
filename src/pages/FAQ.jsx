import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import faqImg1 from '../assets/ctf/campus-group.jpg';
import faqImg2 from '../assets/ctf/outreach-covenant.jpg';
import faqImg3 from '../assets/ctf/scholarship-2.jpg';

const FAQ = () => {
  const faqs = [
    { q: 'What is Christian Teenagers Foundation?', a: 'CTF is a legally registered Nigerian youth development organization focused on mentoring, leadership formation, academic excellence, and faith-based character development.' },
    { q: 'What is the mission of CTF?', a: 'To equip teenagers with the skillset and resources to attain the highest level of excellence in their academics, finance, social lives, leadership, and spirituality.' },
    { q: 'What are the flagship programs?', a: 'Life on Campus (LOC), Course of Study Finder (COS), Digital Detergent, Scholarship Program, Teacher of the Year, Rebuilders Academy, and Monthly Conferences & Prayer Chain.' },
    { q: 'Is CTF registered?', a: 'Yes. The organization is registered with the Corporate Affairs Commission (CAC) and holds SCUML certification.' },
    { q: 'How can I join or support CTF?', a: 'Use the Get Involved page for membership, mentorship, partnership, or support options.' },
    { q: 'Where can I read more about governance?', a: 'The Governance page provides summaries of CTF&apos;s compliance and organizational information.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="pt-24 flex flex-col bg-bg overflow-hidden">
      <section className="py-24 bg-white relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-sm"
              >
                Frequently Asked Questions
              </Motion.h3>
              <Motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-12"
              >
                Questions <br /> <span className="text-ctf-purple italic">Answered</span>
              </Motion.h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[faqImg1, faqImg2, faqImg3].map((img, i) => (
                <div key={i} className="rounded-[28px] overflow-hidden shadow-2xl border border-white/60">
                  <img src={img} alt={`CTF reference ${i + 1}`} className="w-full h-full min-h-[180px] object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg shadow-gray-200/50"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className={`shrink-0 mt-1 transition-colors ${activeIndex === i ? 'text-ctf-crimson' : 'text-ctf-purple'}`} size={20} />
                    <span className="text-lg font-black text-ctf-purple uppercase tracking-tight leading-tight">{faq.q}</span>
                  </div>
                  <div className={`p-2 rounded-xl transition-all ${activeIndex === i ? 'bg-ctf-crimson text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                    {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-gray-600 leading-relaxed font-light italic border-t border-gray-50 mt-4">
                        {faq.a}
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
