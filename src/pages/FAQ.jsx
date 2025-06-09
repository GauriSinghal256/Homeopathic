import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Homeopathy?',
      answer: 'Homeopathy is a natural system of medicine that stimulates the body\'s own healing mechanisms. It uses highly diluted substances to trigger the body\'s natural system of healing and is based on the principle of "like cures like".'
    },
    {
      question: 'Is Homeopathy safe?',
      answer: 'Yes, homeopathic medicines are extremely safe when prescribed by a qualified practitioner. They have no side effects and can be safely used by people of all ages, including babies, children, pregnant women, and the elderly.'
    },
    {
      question: 'How long does homeopathic treatment take?',
      answer: 'The duration of treatment varies depending on the condition, its severity, and how long you\'ve had it. Acute conditions may respond quickly, while chronic conditions may take several months. Your progress will be monitored regularly.'
    },
    {
      question: 'Can I take homeopathic medicines with conventional medicines?',
      answer: 'Generally, yes. Homeopathic medicines can be taken alongside conventional medicines. However, it\'s important to inform Dr. Madhav about all medications you\'re taking to ensure the best treatment plan.'
    },
    {
      question: 'What should I expect during my first consultation?',
      answer: 'Your first consultation will be comprehensive, lasting 60-90 minutes. Dr. Madhav will take a detailed history of your symptoms, medical history, lifestyle, and emotional state to prescribe the most suitable homeopathic remedy.'
    },
    {
      question: 'Are there any dietary restrictions during homeopathic treatment?',
      answer: 'Generally, there are minimal dietary restrictions. However, it\'s recommended to avoid strong flavors like mint, coffee, and garlic around the time of taking medicines as they may interfere with the remedy\'s effectiveness.'
    },
    {
      question: 'How do online consultations work?',
      answer: 'Online consultations are conducted via video call at your scheduled appointment time. You\'ll receive the same comprehensive consultation as an in-person visit, and medicines can be shipped to your location.'
    },
    {
      question: 'What conditions can be treated with homeopathy?',
      answer: 'Homeopathy can treat a wide range of conditions including chronic diseases like diabetes, hypertension, skin conditions, digestive issues, respiratory problems, mental health conditions, and many acute illnesses.'
    },
    {
      question: 'How much does treatment cost?',
      answer: 'Treatment costs vary depending on the consultation type and duration of treatment. We offer competitive pricing and package deals for chronic conditions. Please contact us for detailed pricing information.'
    },
    {
      question: 'Do you provide follow-up support?',
      answer: 'Yes, follow-up care is an essential part of homeopathic treatment. Regular follow-ups are scheduled to monitor progress and adjust treatment as needed. We also provide ongoing support via phone and email.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about homeopathic treatment and our services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-primary-800 pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary-600 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any questions 
              about homeopathic treatment or our services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+918447093878"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Call Us Now
              </a>
              <a
                href="mailto:drmadhav.homeoclinic@gmail.com"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Phone Support</h3>
              <p className="text-gray-600">
                Call us directly for immediate assistance and appointment booking.
              </p>
              <p className="text-primary-600 font-medium mt-2">(+91) 08447 93878</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Email Support</h3>
              <p className="text-gray-600">
                Send us your questions and we'll respond within 24 hours.
              </p>
              <p className="text-primary-600 font-medium mt-2">drmadhav.homeoclinic@gmail.com</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">Online Consultation</h3>
              <p className="text-gray-600">
                Book an online consultation for convenient, personalized care.
              </p>
              <p className="text-primary-600 font-medium mt-2">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;