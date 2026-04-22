import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { UserPlus, Handshake, Heart, MessageSquare, ArrowRight, ShieldCheck, Send, Mail, MapPin, Phone } from 'lucide-react';
import memberImg from '../assets/ctf/campus-group.jpg';
import mentorImg from '../assets/ctf/campus-talk.jpg';
import partnerImg from '../assets/ctf/outreach-abuja.jpg';
import donateImg from '../assets/ctf/scholarship-4.jpg';

const GetInvolved = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    age: '',
    interest: 'Become a CTF Member',
    schoolOrOrg: '',
    message: '',
  });

  const pathways = [
    {
      id: 'member',
      title: 'Become a CTF Member',
      href: 'https://bit.ly/CTFbiodata2026',
      icon: UserPlus,
      color: 'ctf-crimson',
      desc: 'CTF membership provides access to structured mentorship systems, development programs, and a community focused on academic excellence, leadership growth, and spiritual development.',
      details: 'Membership includes a 4-week structured onboarding class.',
    },
    {
      id: 'mentor',
      title: 'Request for a CTF Mentor',
      href: 'https://bit.ly/CTFMentoringPlatform',
      icon: MessageSquare,
      color: 'ctf-purple',
      desc: 'CTF offers structured mentorship for teenagers who desire guidance in academics, personal development, leadership, and spiritual growth.',
      details: 'Mentorship requests are reviewed and matched through CTF coordination systems.',
    },
    {
      id: 'partner',
      title: 'Become a CTF Partner',
      href: 'https://bit.ly/CTFPayPalGift',
      icon: Handshake,
      color: 'ctf-pink',
      desc: 'CTF partners with individuals, schools, and organisations to expand its reach and impact through scholarships, outreaches, and institutional support.',
      details: 'For schools, individuals, and organisations interested in transformation.',
    },
    {
      id: 'donate',
      title: 'Support / Donate',
      href: 'https://bit.ly/CTFPayPalGift',
      icon: Heart,
      color: 'ctf-crimson',
      desc: 'CTF operates through structured financial systems that support its programs, scholarships, and outreach activities.',
      details: 'Verified channels are used to process support and donations.',
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

  const engagementCards = [
    { image: memberImg, title: 'Membership', text: 'Structured onboarding and community formation.' },
    { image: mentorImg, title: 'Mentorship', text: 'Academic guidance and personal development support.' },
    { image: partnerImg, title: 'Partnership', text: 'School outreach and institutional collaboration.' },
    { image: donateImg, title: 'Support', text: 'Scholarship support and program backing.' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`CTF Inquiry: ${form.interest}`);
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nEmail: ${form.email}\nAge: ${form.age}\nSchool / Organization: ${form.schoolOrOrg}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:CTFinquiries@gmail.com?subject=${subject}&body=${body}`;
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
                Get Involved
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
                Christian Teenagers Foundation provides multiple pathways for students, parents, and partners to engage with its programs and initiatives.
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
                <a
                  href={path.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-5 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all ${toneClasses[path.color].button}`}
                >
                  {path.title} <ArrowRight size={20} />
                </a>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <div>
              <h3 className="text-sm font-bold text-ctf-pink tracking-[0.2em] uppercase mb-4">Photo Guide</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase tracking-tighter italic leading-none">
                Pathways in <span className="text-ctf-purple">Focus</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              These images highlight the main ways people connect with CTF.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {engagementCards.map((item, index) => (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`${index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-3'} rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 relative`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full min-h-[320px] object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <p className="text-white font-black uppercase tracking-[0.2em] text-sm">{item.title}</p>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mt-2">{item.text}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card-bg border-t border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold text-ctf-purple tracking-[0.2em] uppercase mb-4">Action Path</h3>
              <h2 className="text-4xl md:text-6xl font-black text-ctf-crimson uppercase tracking-tighter leading-none mb-8">
                Send a Real <span className="text-ctf-purple italic">Inquiry</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                This form opens an email draft with the details already filled in, so the team can respond quickly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Send className="text-ctf-crimson" size={18} />
                  <span className="text-sm font-bold uppercase tracking-widest">Membership, mentoring, partnership, and donations</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck className="text-ctf-purple" size={18} />
                  <span className="text-sm font-bold uppercase tracking-widest">Official links only</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-gray-100 grid md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ctf-crimson/20"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ctf-crimson/20"
                  placeholder="name@example.com"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Age</span>
                <input
                  type="text"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ctf-crimson/20"
                  placeholder="13-19 or parent/guardian"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Interest</span>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ctf-crimson/20 bg-white"
                >
                  <option>Become a CTF Member</option>
                  <option>Request for a CTF Mentor</option>
                  <option>Become a CTF Partner</option>
                  <option>Support / Donate</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">School / Organization</span>
                <input
                  type="text"
                  name="schoolOrOrg"
                  value={form.schoolOrOrg}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ctf-crimson/20"
                  placeholder="School, church, or organization"
                />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ctf-crimson/20 resize-y"
                  placeholder="Tell us what you need..."
                />
              </label>
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-sm text-gray-500">Submitting opens your email client with a prefilled message to the team.</p>
                <button type="submit" className="px-8 py-4 bg-ctf-crimson text-white rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:bg-ctf-pink transition-colors">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
