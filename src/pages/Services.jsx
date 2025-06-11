import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Chronic Disease Management',
      description: 'Comprehensive treatment for diabetes, hypertension, arthritis, and other chronic conditions.',
      icon: '🩺',
      details: ['Diabetes Management', 'Hypertension Control', 'Arthritis Treatment', 'Heart Disease Care']
    },
    {
      title: 'Skin & Hair Disorders',
      description: 'Natural solutions for acne, eczema, psoriasis, hair loss, and other dermatological issues.',
      icon: '✨',
      details: ['Acne Treatment', 'Eczema & Psoriasis', 'Hair Loss Solutions', 'Skin Allergies']
    },
    {
      title: 'Digestive Health',
      description: 'Effective treatment for IBS, acid reflux, constipation, and digestive disorders.',
      icon: '🌿',
      details: ['IBS Management', 'Acid Reflux Treatment', 'Constipation Relief', 'Digestive Wellness']
    },
    {
      title: 'Respiratory Issues',
      description: 'Relief from asthma, allergies, bronchitis, and other respiratory conditions.',
      icon: '🌬️',
      details: ['Asthma Management', 'Allergy Treatment', 'Bronchitis Care', 'Respiratory Health']
    },
    {
      title: 'Mental Health Support',
      description: 'Natural approach to anxiety, depression, stress, and emotional well-being.',
      icon: '🧠',
      details: ['Anxiety Relief', 'Depression Support', 'Stress Management', 'Emotional Balance']
    },
    {
      title: "Women's Health",
      description: 'Specialized care for PCOS, menstrual disorders, menopause, and pregnancy support.',
      icon: '👩‍⚕️',
      details: ['PCOS Treatment', 'Menstrual Disorders', 'Menopause Support', 'Pregnancy Care']
    },
    {
      title: "Children's Health",
      description: 'Safe and gentle treatment for common childhood ailments and developmental issues.',
      icon: '👶',
      details: ['Growth Disorders', 'Behavioral Issues', 'Common Childhood Ailments', 'Immune Support']
    },
    {
      title: 'Lifestyle Diseases',
      description: 'Treatment for obesity, metabolic disorders, and lifestyle-related health issues.',
      icon: '⚖️',
      details: ['Weight Management', 'Metabolic Disorders', 'Lifestyle Counseling', 'Preventive Care']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="relative py-40 bg-center bg-cover"
        style={{ backgroundImage: "url('/Services.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50 z-0" />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Homeopathic Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive natural healing solutions for a wide range of health conditions using safe,
            effective homeopathic treatments.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-500 hover:-translate-y-1"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="text-5xl mb-4 animate-pulse" aria-hidden>{service.icon}</div>
                <h3 className="text-xl font-extrabold text-primary-800 mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/consultation"
                  className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg"
                >
                  Book Consultation
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
