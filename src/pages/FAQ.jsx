import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { q: "Who is a typical CTF teenager?", a: "A teenager between the ages of 13-19 years, who aligns with the values and frameworks of the foundation." },
    { q: "Who is the founder of CTF?", a: "Pst Oluwatosin Noiki (Mr. Tee)." },
    { q: "When was the foundation inaugurated?", a: "Official inauguration was Feb 19, 2018 with 7 members in Egbeda, Lagos." },
    { q: "What is CTF's vision?", a: "Raising a generation of Spirit-Filled teenagers who will transform their world." },
    { q: "What is the mandate of CTF?", a: "“Oluwatosin, raise me a people without blemish” — derived from 1 Timothy 4:12." },
    { q: "Is CTF a registered organization?", a: "Yes, it is registered with the Corporate Affairs Commission (CAC) and holds SCUML certification." },
    { q: "What is the PRIZE framework?", a: "Academic framework: Productivity, Responsibility, Integrity, Zeal, Excellence." },
    { q: "What is the CASHIER framework?", a: "Financial framework: Budgeting, Avoiding Scams, Savings, Hard work, Integrity, Entrepreneurship, Reaping & Sowing." },
    { q: "What is the FRIENDS framework?", a: "Social framework: Family first, Respect for mentors, Intentional networking, Emotional intelligence, Networking, Social media discipline." },
    { q: "What is the Vowels framework?", a: "Leadership framework: Authenticity, Empathy, Inspiration, Originality, Understanding Strengths." },
    { q: "What is the GROW framework?", a: "Spirituality framework: Gospel commitment, Renewal of Mind, Outreach/Service, Worship & the Word." },
    { q: "What are the flagship systems of CTF?", a: "Life on Campus (LOC), Course of Study Finder (COS), and Digital Detergent." },
    { q: "What is Life On Campus (LOC)?", a: "A structured university transition system for SS3 students, featuring a video library of university students sharing real experiences." },
    { q: "What is the Course of Study Finder (COS)?", a: "A tool to help students identify purpose-aligned university courses based on their strengths." },
    { q: "How many scholarships has CTF awarded?", a: "41+ scholarships have been awarded to outstanding teenagers." },
    { q: "How many teenagers has CTF reached?", a: "Over 600,000 teenagers across Nigeria and beyond." },
    { q: "In how many states does CTF operate?", a: "CTF has reached 9 states in Nigeria." },
    { q: "Where can I find the CTF library?", a: "The first standalone community library was established in Egbeda, Lagos in 2021." },
    { q: "Does CTF have a global presence?", a: "Yes, CTF alumni are currently studying in the US, UK, Canada, Ukraine, and Germany." },
    { q: "How can I support CTF?", a: "Through mentoring, financial support (Union Bank), or institutional partnerships." },
    { q: "How can I contact CTF?", a: "Official email: CTFinquiries@gmail.com. Or through our strategic partner schools." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="pt-24 flex flex-col bg-bg overflow-hidden">
      {/* Header */}
      <section className="py-24 bg-white relative">
        <div className="container relative z-10 text-center">
            <Motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-sm"
            >
              Have Questions?
            </Motion.h3>
          <Motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-12"
            >
              Frequently <br /> Asked <span className="text-ctf-purple italic">Questions</span>
          </Motion.h1>
        </div>
      </section>

      {/* FAQ Accordion */}
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

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="container">
           <div className="bg-ctf-purple p-16 rounded-[60px] text-white flex flex-col md:flex-row gap-12 items-center justify-between">
              <div className="text-center md:text-left">
                 <h2 className="text-4xl font-black uppercase mb-4 italic">Still have questions?</h2>
                 <p className="text-white/70 font-light">Get in touch with our team for more clarification.</p>
              </div>
              <a 
                href="mailto:CTFinquiries@gmail.com"
                className="px-12 py-6 bg-white text-ctf-purple rounded-full font-black uppercase tracking-widest hover:bg-ctf-pink hover:text-white transition-all shadow-2xl"
              >
                 Contact Us
              </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
