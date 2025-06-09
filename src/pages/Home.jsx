import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Natural Healing',
      description: 'Safe and effective homeopathic treatments using natural remedies.',
      icon: '🌿'
    },
    {
      title: 'Personalized Care',
      description: 'Individual treatment plans tailored to your specific health needs.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Experienced Doctor',
      description: 'Over 15 years of experience in homeopathic medicine and patient care.',
      icon: '⭐'
    },
    {
      title: 'Online Consultation',
      description: 'Convenient online consultations from the comfort of your home.',
      icon: '💻'
    }
  ];

  const services = [
    'Chronic Disease Management',
    'Skin & Hair Disorders',
    'Digestive Issues',
    'Respiratory Problems',
    'Mental Health Support',
    'Women\'s Health',
    'Children\'s Health',
    'Lifestyle Diseases'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-800 mb-6">
                Holistic Healing with <span className="text-red-500">Homoeopathy</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Experience natural healing with Dr. Madhav's personalized homeopathic treatments. 
                Safe, effective, and gentle care for your complete wellness journey.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/consultation"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-center"
                >
                  Book an Appointment
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Call Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Doctor consulting with patient"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Why Choose Dr. Madhav's Homoeopathy?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of natural healing with our comprehensive homeopathic approach to healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">
                Comprehensive Homeopathic Services
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We provide holistic treatment for a wide range of health conditions using safe, 
                natural homeopathic remedies tailored to each patient's unique needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Homeopathic medicines and herbs"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Read about the healing experiences of our satisfied patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-primary-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Dr. Madhav's homeopathic treatment has been life-changing. The natural approach 
                  to healing really works, and I feel healthier than ever."
                </p>
                <div className="font-semibold text-primary-800">- Patient Name</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Book your consultation today and experience the gentle, effective power of homeopathic medicine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/consultation"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Book Online Consultation
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;