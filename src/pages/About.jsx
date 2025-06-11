import React from 'react';

const About = () => {
  const qualifications = [
    'BHMS (Bachelor of Homeopathic Medicine & Surgery)',
    'MD in Homeopathic Medicine',
    'Member of Central Council of Homeopathy',
    'Certified in Classical Homeopathy',
    '15+ Years of Clinical Experience'
  ];

  const expertise = [
    'Classical Homeopathy',
    'Constitutional Treatment',
    'Acute & Chronic Diseases',
    'Miasmatic Analysis',
    'Case Taking & Repertorization',
    'Holistic Health Approach'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
              About Dr. Somit
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Dedicated to healing through natural homeopathic medicine with compassionate care and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/Somit.jpg"
                alt="Dr. Somit"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Meet Dr. Somit Hazra
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Somit is a highly experienced homeopathic physician with over 15 years of dedicated practice 
                in natural healing. His approach combines classical homeopathic principles with modern understanding 
                of health and wellness.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Committed to providing personalized care, Dr. Madhav believes in treating the individual as a whole, 
                addressing not just symptoms but the root cause of illness. His gentle yet effective treatment 
                methodology has helped thousands of patients achieve optimal health naturally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a passion for homeopathic medicine and continuous learning, Dr. Madhav stays updated with 
                the latest developments in the field to provide the best possible care to his patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-8">Qualifications & Certifications</h3>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-8">Areas of Expertise</h3>
              <div className="space-y-4">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-800 mb-6">Treatment Philosophy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-primary-800 mb-3">Individualized Treatment</h4>
              <p className="text-gray-700">
                Every patient is unique, and so is their treatment plan. We focus on personalized care 
                tailored to individual health needs and constitution.
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-semibold text-primary-800 mb-3">Natural Healing</h4>
              <p className="text-gray-700">
                Using the body's natural healing mechanisms, homeopathic remedies stimulate the 
                immune system to restore health without side effects.
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-primary-800 mb-3">Holistic Approach</h4>
              <p className="text-gray-700">
                We treat the whole person - mind, body, and spirit - addressing root causes 
                rather than just suppressing symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-200">Patients Treated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;