import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ''));
    if (start === end) return;

    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {/\D+$/.exec(target)?.[0] || ''}
    </span>
  );
};

const About = () => {
  const qualifications = [
    'BHMS (Bachelor of Homeopathic Medicine & Surgery)',
    'MD in Homeopathic Medicine',
    'Member of Central Council of Homeopathy',
    'Certified in Classical Homeopathy',
    '15+ Years of Clinical Experience',
  ];

  const expertise = [
    'Classical Homeopathy',
    'Constitutional Treatment',
    'Acute & Chronic Diseases',
    'Miasmatic Analysis',
    'Case Taking & Repertorization',
    'Holistic Health Approach',
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-40 bg-center bg-cover" style={{ backgroundImage: "url('/aboutbg.webp')" }}>
        <div className="absolute inset-0 bg-blue-900 opacity-50 z-0" />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Dr. Somit</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to healing through natural homeopathic medicine with compassionate care and expertise.
          </p>
        </motion.div>
      </section>

      {/* Doctor Profile */}
      <motion.section className="py-20 bg-white" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={staggerContainer}>
            <motion.div variants={fadeInVariant}>
              <img src="/Somit.jpg" alt="Dr. Somit" className="rounded-2xl shadow-lg w-full h-96 object-cover" />
            </motion.div>
            <motion.div variants={fadeInVariant}>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Meet Dr. Somit Hazra</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Somit is a highly experienced homeopathic physician with over 15 years of dedicated practice
                in natural healing. His approach combines classical homeopathic principles with modern understanding
                of health and wellness.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Committed to providing personalized care, Dr. Somit believes in treating the individual as a whole,
                addressing not just symptoms but the root cause of illness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a passion for homeopathic medicine and continuous learning, Dr. Somit stays updated with
                the latest developments in the field to provide the best possible care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Qualifications & Expertise */}
      <motion.section className="py-20 bg-primary-50" variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" variants={staggerContainer}>
            <motion.div variants={fadeInVariant}>
              <h3 className="text-2xl font-bold text-primary-800 mb-8">Qualifications & Certifications</h3>
              <div className="space-y-4">
                {qualifications.map((item, index) => (
                  <motion.div key={index} className="flex items-start" variants={fadeInVariant}>
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInVariant}>
              <h3 className="text-2xl font-bold text-primary-800 mb-8">Areas of Expertise</h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <motion.div key={index} className="flex items-start" variants={fadeInVariant}>
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section
  className="relative py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
  variants={fadeInVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Decorative blur effect */}
  <div className="absolute top-[-80px] right-[-100px] w-[250px] h-[250px] bg-blue-600 opacity-20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <motion.div className="text-center mb-12" variants={fadeInVariant}>
      <h3 className="text-4xl font-bold text-white mb-4">Treatment Philosophy</h3>
      <p className="text-blue-100 max-w-2xl mx-auto">
        Rooted in compassion and science, our approach to healing is personalized, natural, and deeply holistic.
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={staggerContainer}
    >
      {[
        {
          icon: '🎯',
          title: 'Individualized Treatment',
          desc: 'Every patient is unique, and so is their treatment plan. We focus on personalized care tailored to individual health needs and constitution.',
        },
        {
          icon: '🌱',
          title: 'Natural Healing',
          desc: "Using the body's natural healing mechanisms, homeopathic remedies stimulate the immune system to restore health without side effects.",
        },
        {
          icon: '🤝',
          title: 'Holistic Approach',
          desc: 'We treat the whole person — mind, body, and spirit — addressing root causes rather than just suppressing symptoms.',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="h-full"
          variants={fadeInVariant}
        >
          <div className="h-full flex flex-col justify-between p-6 bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl transition duration-300 group text-center">
            <div className="w-16 h-16 bg-yellow-300 text-blue-900 text-2xl font-semibold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
            <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>


      {/* Statistics */}
      <motion.section
  className="min-h-[400px] flex items-center bg-cover bg-center bg-no-repeat text-white"
  style={{
    backgroundImage: "url('/bg2.jpg')", 
    backgroundColor: "rgba(0, 0, 0, 0.1)",     
    backgroundBlendMode: "overlay",            
  }}
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full">
      {[
        { number: '15+', label: 'Years Experience' },
        { number: '1000+', label: 'Patients Treated' },
        { number: '95%', label: 'Success Rate' },
        { number: '24/7', label: 'Support Available' },
      ].map((stat, i) => (
        <motion.div key={i} variants={fadeInVariant}>
          <div className="text-4xl font-bold mb-2">
            <AnimatedNumber target={stat.number} />
          </div>
          <div className="text-primary-200">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>

    </div>
  );
};

export default About;
