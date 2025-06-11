import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-primary-50 to-blue-100 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us for appointments, consultations, or any questions about homeopathic treatment.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-primary-800 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="consultation">General Consultation</option>
                      <option value="information">Treatment Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please describe your condition or inquiry in detail..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-primary-800 mb-8">Contact Information</h2>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">Clinic Address</h3>
                    <p className="text-gray-600">
                      201 Benimadhab Nagar, S B gorai road,<br />
                      Bharat petrol pump, Behind Nataraj apartment, Asansol 713301
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">📞</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919775000993" className="hover:text-primary-600">
                        (+91) 97750 00993
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Available 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">✉️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:drshazrahomoeopathyclinic@gmail.com" className="hover:text-primary-600">
                        drshazrahomoeopathyclinic@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">⏰</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">Clinic Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 11:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-20 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Our clinic is conveniently located in the heart of the medical district.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.984634146903!2d86.95715637478973!3d23.676507491610145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f12cfd3d513%3A0x727de579d5f4252e!2sDr.Somit%20Hazra%20Homeopathy!5e0!3m2!1sen!2sin!4v1749622121457!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Dr. Somit Hazra Homeopathy, Benimadhab Nagar, SB Gorai Road, Asansol, West Bengal 713301
          </p>
        </div>
      </motion.section>

      {/* Emergency Section */}
      <motion.section
        className="py-16 bg-red-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 border border-red-200 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              🚨
              <h3 className="text-xl font-bold text-red-800 ml-2">Emergency Notice</h3>
            </div>
            <p className="text-red-700 mb-4">
              For medical emergencies, please contact emergency services immediately or visit the nearest hospital.
            </p>
            <p className="text-red-600 font-medium">
              Emergency: 108 | Hospital: (+91) 97750 00993
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
