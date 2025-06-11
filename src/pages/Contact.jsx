import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
    <div className="pt-24 overflow-x-hidden bg-gray-50">
     {/* Hero Section */}
<motion.section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/Hospital.jpg')",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/70 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white leading-relaxed drop-shadow-lg"
          variants={itemVariants}
        >
          Reach out for appointments, consultations, or inquiries about our homeopathic treatments.
        </motion.p>
      </div>
    </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send Us a Message</h2>
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 bg-blue-50 p-8 rounded-2xl shadow-lg"
                variants={containerVariants}
                whileHover={hoverVariants.hover}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="consultation">General Consultation</option>
                      <option value="information">Treatment Information</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Please describe your condition or inquiry in detail..."
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>
              <motion.div
                className="flex items-start p-6 bg-blue-50 rounded-2xl"
                variants={itemVariants}
                whileHover={hoverVariants.hover}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Clinic Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    201 Benimadhab Nagar, S B Gorai Road,<br />
                    Bharat Petrol Pump, Behind Nataraj Apartment, Asansol 713301
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-6 bg-blue-50 rounded-2xl"
                variants={itemVariants}
                whileHover={hoverVariants.hover}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919775000993" className="hover:text-blue-600 transition-colors duration-200">
                      (+91) 97750 00993
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Available 9 AM - 7 PM</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-6 bg-blue-50 rounded-2xl"
                variants={itemVariants}
                whileHover={hoverVariants.hover}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white text-2xl">
                  ✉️
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Email Address</h3>
                  <p className="text-gray-600">
                    <a href="mailto:drshazrahomoeopathyclinic@gmail.com" className="hover:text-blue-600 transition-colors duration-200">
                      drshazrahomoeopathyclinic@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start p-6 bg-blue-50 rounded-2xl"
                variants={itemVariants}
                whileHover={hoverVariants.hover}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white text-2xl">
                  ⏰
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Clinic Hours</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-24 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our clinic is conveniently located in the heart of the medical district.
            </p>
          </motion.div>
          <motion.div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg"
            style={{ paddingTop: '56.25%' }}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.984634146903!2d86.95715637478973!3d23.676507491610145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f12cfd3d513%3A0x727de579d5f4252e!2sDr.Somit%20Hazra%20Homeopathy!5e0!3m2!1sen!2sin!4v1749622121457!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <motion.p
            className="text-sm text-gray-500 text-center mt-4"
            variants={itemVariants}
          >
            Dr. Somit Hazra Homeopathy, Benimadhab Nagar, SB Gorai Road, Asansol, West Bengal 713301
          </motion.p>
        </div>
      </motion.section>

      {/* Emergency Section */}
      <motion.section
        className="py-16 bg-red-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-red-100 border border-red-200 rounded-2xl p-8 shadow-lg"
            variants={itemVariants}
            whileHover={hoverVariants.hover}
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">🚨</span>
              <h3 className="text-xl font-bold text-red-900">Emergency Notice</h3>
            </div>
            <p className="text-red-700 mb-4 leading-relaxed">
              For medical emergencies, please contact emergency services immediately or visit the nearest hospital.
            </p>
            <p className="text-red-600 font-medium">
              Emergency: 108 | Hospital: (+91) 97750 00993
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;