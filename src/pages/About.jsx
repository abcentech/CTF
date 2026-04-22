import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Shield, Target, Eye, Users, History, Award, Building2 } from 'lucide-react';
import founderFeatureImg from '../assets/ctf/founder-feature.jpg';
import founderPortraitImg from '../assets/ctf/founder-portrait.jpg';
import bisolaImg from '../assets/ctf/bisola.jpg';
import deborahImg from '../assets/ctf/deborah.jpg';
import elegbedeImg from '../assets/ctf/elegbede.jpg';
import faithfulImg from '../assets/ctf/faithful.jpg';
import favourImg from '../assets/ctf/favour.jpg';
import greatpeaceImg from '../assets/ctf/greatpeace.jpg';
import oreImg from '../assets/ctf/ore.jpg';
import temiloluwaImg from '../assets/ctf/temiloluwa.jpg';
import tuwaseImg from '../assets/ctf/tuwase.jpg';

const About = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsFounderModalOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const founderProfile = {
    name: 'Pst. Oluwatosin Noiki',
    alias: 'Mr. Tee',
    title: 'Founder, Christian Teenagers Foundation',
    intro:
      'Pst. Oluwatosin Noiki is the visionary founder of Christian Teenagers Foundation (CTF), a movement committed to raising spirit-filled teenagers who are equipped to influence their world with purpose, excellence, and integrity.',
    details: [
      'Founded CTF on February 19, 2018.',
      'Leads a multi-campus and multi-platform youth development movement.',
      'Champions spiritual growth, academic excellence, leadership development, and real-world relevance.',
      'Holds a bold vision of influencing senior secondary school students across Nigeria.',
    ],
    closing:
      'His leadership reflects a commitment to raising teenagers who are spiritually alive, intellectually equipped, socially responsible, and globally relevant.',
  };

  const executiveTeam = [
    { name: 'Pst. Oluwatosin Noiki', office: 'Founder', image: founderPortraitImg },
    { name: 'Amarachi Aririsichukwu', office: 'General Secretary', image: null },
    { name: 'Greatpeace Edionwele', office: 'Prayer Director', image: greatpeaceImg },
    { name: 'Tuwase David', office: 'Outreach Director', image: tuwaseImg },
    { name: 'Ore Martins', office: 'Digital & Creative Director', image: oreImg },
    { name: 'Ifeanyi Emmanuel', office: 'Finance Director', image: null },
    { name: 'Abore Simisola', office: 'Welfare & Birthday Director', image: null },
  ];

  const portraitGallery = [
    { name: 'Bisola Olaseni', office: 'CTF Alumni Executive 1', image: bisolaImg },
    { name: 'Deborah Omotayo', office: 'CTF International Rep', image: deborahImg },
    { name: 'Elegbede Joshua', office: 'CTF Alumni Executive 2', image: elegbedeImg },
    { name: 'Faithful Oluwagbemi', office: 'CTF Alumni Executive 4', image: faithfulImg },
    { name: 'Favour Kuyebi', office: 'CTF Alumni Executive 4', image: favourImg },
    { name: 'Temiloluwa Olanipekun', office: 'CTF Alumni Executive 3', image: temiloluwaImg },
  ];

  const reportHighlights = [
    { icon: Users, title: '2,000+ Active Members', text: 'A growing community of student members continues to participate in CTF programs and mentorship.' },
    { icon: History, title: '2018 Inauguration', text: 'Founded on February 19, 2018, in Egbeda, Lagos State.' },
    { icon: Shield, title: 'CAC / SCUML / EFCC', text: 'CTF is registered and operates within the required compliance framework.' },
    { icon: Award, title: '19.5M+ Mobilized', text: 'Funding and program support continue to drive CTF activities.' },
    { icon: Eye, title: 'Global Footprint', text: 'Alumni are currently studying in the United States, United Kingdom, Canada, Ukraine, and Germany.' },
  ];

  return (
    <div className="pt-24 flex flex-col bg-white">
      <section id="story" className="py-24 bg-card-bg relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-ctf-pink font-black uppercase tracking-[0.4em] mb-6 text-sm"
              >
                About CTF
              </Motion.h3>
              <Motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-9xl font-black text-ctf-crimson uppercase tracking-tighter leading-none"
              >
                Our <span className="text-ctf-purple italic">Story</span>
              </Motion.h1>
              <p className="text-2xl text-gray-600 font-light leading-relaxed italic border-t border-gray-100 pt-10">
                Christian Teenagers Foundation (CTF) is a legally registered Nigerian youth development organization focused on mentoring, leadership formation, academic excellence, and faith-based character development.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-ctf-pink mb-2">Founded</p>
                  <p className="text-2xl font-black text-ctf-crimson">February 19, 2018</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-ctf-pink mb-2">Headquarters</p>
                  <p className="text-2xl font-black text-ctf-crimson">Egbeda, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ctf-crimson/20 to-ctf-purple/20 blur-3xl rounded-[40px]" />
                <button
                  type="button"
                  onClick={() => setIsFounderModalOpen(true)}
                  className="relative overflow-hidden rounded-[40px] shadow-2xl border border-white/60 text-left w-full group"
                >
                  <img src={founderFeatureImg} alt="Pst. Oluwatosin Noiki addressing a CTF audience" className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-ctf-pink mb-2">Founder Spotlight</p>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{founderProfile.name}</h3>
                    <p className="text-white/80 mt-3 max-w-md">
                      {founderProfile.intro}
                    </p>
                    <span className="inline-flex mt-5 text-xs font-black uppercase tracking-[0.3em] bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      Click to read more
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
      </section>

      <section id="highlights" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-ctf-crimson uppercase tracking-tighter italic">
              Key <span className="text-ctf-purple">Highlights</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto mt-5 text-lg leading-relaxed">
              CTF&apos;s story is rooted in mentoring, school outreach, academic support, and a growing global footprint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportHighlights.map((item, i) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card-bg p-8 rounded-[36px] border border-gray-100 shadow-xl shadow-gray-200/40"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-ctf-pink mb-6 shadow-lg">
                  <item.icon size={30} />
                </div>
                <h3 className="text-2xl font-black text-ctf-purple uppercase mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 bg-card-bg border-y border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl font-black text-ctf-crimson uppercase tracking-tighter italic">
                Founder & <span className="text-ctf-purple">Leadership</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The leadership team serves as the administrative and strategic backbone of the foundation. Portraits are shown where available, and names with offices are listed where a portrait is not available.
              </p>
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl">
                <h3 className="text-lg font-black text-ctf-purple uppercase mb-3">Leadership Reference</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  CTF was founded in 2018 to build a structured mentorship and leadership development system for teenagers navigating academic, social, and spiritual challenges.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {executiveTeam.map((member, i) => (
                <Motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100"
                >
                  <button
                    type="button"
                    onClick={member.name === founderProfile.name ? () => setIsFounderModalOpen(true) : undefined}
                    className="aspect-[4/5] bg-gray-50 w-full text-left"
                    disabled={member.name !== founderProfile.name}
                  >
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ctf-crimson/10 to-ctf-purple/10 text-ctf-crimson text-6xl font-black">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </button>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-ctf-crimson uppercase mb-1">{member.name}</h3>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-ctf-purple">{member.office}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {portraitGallery.map((item, i) => (
              <Motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card-bg rounded-[32px] overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="aspect-[4/4]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-ctf-purple uppercase">{item.name}</h3>
                  <p className="text-sm font-bold text-ctf-crimson uppercase tracking-widest mt-2">{item.office}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {isFounderModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setIsFounderModalOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-[36px] bg-white shadow-2xl border border-white/30"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="founder-modal-title"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-full">
                <img src={founderFeatureImg} alt="Pst. Oluwatosin Noiki" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-ctf-pink mb-2">{founderProfile.title}</p>
                  <h3 id="founder-modal-title" className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                    {founderProfile.name}
                  </h3>
                  <p className="text-white/70 text-sm mt-2">Also known as {founderProfile.alias}</p>
                </div>
              </div>

              <div className="p-8 md:p-10 lg:p-12 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-ctf-pink mb-3">Founder Profile</p>
                  <p className="text-gray-600 leading-relaxed text-lg">{founderProfile.intro}</p>
                </div>

                <div className="space-y-4">
                  {founderProfile.details.map((detail) => (
                    <div key={detail} className="flex gap-3 items-start rounded-2xl bg-card-bg px-4 py-4">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-ctf-crimson shrink-0" />
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-ctf-crimson/5 p-5 border border-ctf-crimson/10">
                  <p className="text-sm text-gray-700 leading-relaxed">{founderProfile.closing}</p>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFounderModalOpen(false)}
                    className="px-6 py-3 rounded-full bg-ctf-crimson text-white font-black uppercase tracking-widest text-xs hover:bg-ctf-pink transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
