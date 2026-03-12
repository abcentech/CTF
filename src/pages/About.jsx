import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, MapPin, Search } from 'lucide-react';

const About = () => {
  const sections = [
    {
      id: 'overview',
      title: 'About CTF',
      content: 'The Christian Teenagers Foundation (CTF) was established with a clear mandate: to nurture Christian teenagers into well-rounded leaders who excel spiritually, academically, and socially. Founded on biblical principles, we recognize the pivotal role of these formative years in shaping a lifetime of impact.',
      bgColor: 'bg-white'
    },
    {
      id: 'leadership',
      title: 'Founder & Leadership',
      content: 'Led by visionaries passionate about youth development, our leadership team brings together decades of experience in ministry, education, and social advocacy. Our founder\'s vision of a "Rebuilt Generation" continues to drive everything we do.',
      bgColor: 'bg-slate-50'
    },
    {
      id: 'mission',
      title: 'Our Mission & Values',
      items: [
        { title: 'Vision', text: 'To see a generation of Christian youth ruling their world through divine wisdom and excellence.', icon: Target },
        { title: 'Mission', text: 'To empower 1 million Christian teenagers by 2030 through spiritual fellowship and academic support.', icon: Shield },
        { title: 'Core Values', text: 'Integrity, Excellence, Faith, Service, and Community.', icon: Award }
      ],
      bgColor: 'bg-white'
    },
    {
      id: 'locations',
      title: 'Where We Operate',
      content: 'CTF is currently active in over 30 states across Nigeria, with growing chapters in leading federal and state universities. We are expanding our reach to ensure every Christian student has access to a community of builders.',
      bgColor: 'bg-slate-50'
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      faqs: [
        { q: 'How can I join CTF?', a: 'You can join through any of our campus chapters or register online through the Rebuilders Academy.' },
        { q: 'Is CTF a church?', a: 'No, we are an inter-denominational foundation focused on youth empowerment and spiritual growth.' }
      ],
      bgColor: 'bg-white'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-6"
          >
            About <span className="text-accent">Us</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Discover the heart behind the Christian Teenagers Foundation and the team driving a new generation of leaders.
          </p>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className={`section-padding scroll-mt-20 ${section.bgColor}`}>
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl mb-10 pb-4 border-b border-accent/20">{section.title}</h2>
              
              {/* Content types */}
              {section.content && (
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  {section.content}
                </p>
              )}

              {section.items && (
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  {section.items.map((item, i) => (
                    <div key={i} className="p-8 bg-white shadow-lg rounded-2xl border-t-4 border-accent">
                      <div className="text-accent mb-4"><item.icon size={32} /></div>
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.faqs && (
                <div className="space-y-6 mt-8">
                  {section.faqs.map((faq, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border-l-4 border-accent">
                      <h4 className="text-lg font-bold text-primary mb-2 flex gap-3">
                        <span className="text-accent">Q:</span> {faq.q}
                      </h4>
                      <p className="text-slate-600 pl-8">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default About;
