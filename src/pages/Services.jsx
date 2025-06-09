import React from 'react';
import { Link } from 'react-router-dom';

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
      title: 'Women\'s Health',
      description: 'Specialized care for PCOS, menstrual disorders, menopause, and pregnancy support.',
      icon: '👩‍⚕️',
      details: ['PCOS Treatment', 'Menstrual Disorders', 'Menopause Support', 'Pregnancy Care']
    },
    {
      title: 'Children\'s Health',
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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Our Homeopathic Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive natural healing solutions for a wide range of health conditions using safe, 
            effective homeopathic treatments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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
                  className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  Book Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">
              Our Treatment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure the best possible outcomes for your health and well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Detailed case taking and understanding your health history and current symptoms.'
              },
              {
                step: '02',
                title: 'Analysis & Diagnosis',
                description: 'Comprehensive analysis using homeopathic principles and modern diagnostic methods.'
              },
              {
                step: '03',
                title: 'Treatment Plan',
                description: 'Personalized treatment plan with carefully selected homeopathic remedies.'
              },
              {
                step: '04',
                title: 'Follow-up Care',
                description: 'Regular monitoring and adjustments to ensure optimal healing and recovery.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Benefits of Homeopathic Treatment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'No Side Effects',
                    description: 'Natural remedies that work with your body without harmful side effects.'
                  },
                  {
                    title: 'Treats Root Cause',
                    description: 'Addresses the underlying cause of illness, not just symptoms.'
                  },
                  {
                    title: 'Safe for All Ages',
                    description: 'Gentle treatment suitable for babies, children, adults, and elderly.'
                  },
                  {
                    title: 'Cost-Effective',
                    description: 'Affordable treatment option with long-lasting results.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Homeopathic medicines"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Natural Healing?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Start your journey to better health with personalized homeopathic treatment.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
          >
            Book Your Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;