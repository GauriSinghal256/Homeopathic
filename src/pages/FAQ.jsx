import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is homeopathy?',
    answer:
      'Homeopathy is a natural system of medicine that stimulates the body\'s own healing mechanisms. It uses highly diluted substances to trigger the body\'s natural system of healing and is based on the principle of "like cures like".'
  },
  {
    question: 'Is Homeopathy safe?',
    answer:
      'Yes, homeopathic medicines are extremely safe when prescribed by a qualified practitioner. They have no side effects and can be safely used by people of all ages, including babies, children, pregnant women, and the elderly.'
  },
  {
    question: 'How long does homeopathic treatment take?',
    answer:
      'The duration of treatment varies depending on the condition, its severity, and how long you\'ve had it. Acute conditions may respond quickly, while chronic conditions may take several months. Your progress will be monitored regularly.'
  },
  {
    question: 'Can I take homeopathic medicines with conventional medicines?',
    answer:
      'Generally, yes. Homeopathic medicines can be taken alongside conventional medicines. However, it\'s important to inform Dr. Madhav about all medications you\'re taking to ensure the best treatment plan.'
  },
  {
    question: 'What should I expect during my first consultation?',
    answer:
      'Your first consultation will be comprehensive, lasting 60-90 minutes. Dr. Madhav will take a detailed history of your symptoms, medical history, lifestyle, and emotional state to prescribe the most suitable homeopathic remedy.'
  },
  {
    question: 'Are there any dietary restrictions during homeopathic treatment?',
    answer:
      'Generally, there are minimal dietary restrictions. However, it\'s recommended to avoid strong flavors like mint, coffee, and garlic around the time of taking medicines as they may interfere with the remedy\'s effectiveness.'
  },
  {
    question: 'How do online consultations work?',
    answer:
      'Online consultations are conducted via video call at your scheduled appointment time. You\'ll receive the same comprehensive consultation as an in-person visit, and medicines can be shipped to your location.'
  },
  {
    question: 'What conditions can be treated with homeopathy?',
    answer:
      'Homeopathy can treat a wide range of conditions including chronic diseases like diabetes, hypertension, skin conditions, digestive issues, respiratory problems, mental health conditions, and many acute illnesses.'
  },
  {
    question: 'How much does treatment cost?',
    answer:
      'Treatment costs vary depending on the consultation type and duration of treatment. We offer competitive pricing and package deals for chronic conditions. Please contact us for detailed pricing information.'
  },
  {
    question: 'Do you provide follow-up support?',
    answer:
      'Yes, follow-up care is an essential part of homeopathic treatment. Regular follow-ups are scheduled to monitor progress and adjust treatment as needed. We also provide ongoing support via phone and email.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="relative py-40 bg-center bg-cover"
        style={{ backgroundImage: "url('/faqBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50 z-0" />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about homeopathic treatment and our services.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-primary-800 pr-8">{faq.question}</h3>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-${index}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
