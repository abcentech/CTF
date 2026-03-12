import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, FileBadge, Users2, Landmark, Image } from 'lucide-react';

const Impact = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Our Impact Overview',
      content: 'Since inception, CTF has touched the lives of over 50,000 teenagers across Africa. Our indices show a marked improvement in the academic performance and spiritual consistency of our members.',
      icon: BarChart3
    },
    {
      id: 'reports',
      title: 'Annual Reports',
      content: 'Transparent records of our journey. Our annual reports provide a comprehensive look at our growth, initiatives, and the stories of change from the previous year.',
      icon: FileBadge
    },
    {
      id: 'recipients',
      title: 'Scholarship Recipients',
      content: 'Meet the brilliant minds who have been empowered through our scholarship program. These students are currently excelling in various fields across top Nigerian universities.',
      icon: Users2
    },
    {
      id: 'expansion',
      title: 'University Expansion',
      content: 'We are rapidly growing! From starting in just two states, CTF now has a presence in almost every major university campus in Nigeria, with plans to expand globally.',
      icon: Landmark
    },
    {
      id: 'gallery',
      title: 'Media & Gallery',
      content: 'A visual journey of our conferences, campus outreaches, and award ceremonies. Witness the energy and passion of a generation on fire for God.',
      icon: Image
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-primary py-24 text-white">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl mb-6"
          >
            The <span className="text-accent">Impact</span> We Make
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Measuring our success by the lives transformed and the leaders built.
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.id} id={section.id} className={`section-padding scroll-mt-20 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-accent"><section.icon size={28} /></div>
                <h2 className="text-3xl">{section.title}</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {section.content}
              </p>
              
              {/* Conditional Rendering for specific sections */}
              {section.id === 'gallery' ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-slate-200 rounded-2xl overflow-hidden hover:opacity-80 transition-opacity flex items-center justify-center text-slate-400 font-bold uppercase text-xs">
                       Media {i}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-10">
                   <div className="w-full md:w-1/3 aspect-video bg-accent/10 rounded-2xl flex items-center justify-center text-accent/50">
                      <section.icon size={48} />
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary mb-4">Empowerment highlight for {section.id}</h4>
                      <p className="text-slate-500 mb-6 italic">"Through CTF, I found a community that challenged me to be my best both in my studies and in my walk with God."</p>
                      <button className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
                        Read full story →
                      </button>
                   </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Impact;
