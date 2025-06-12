import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  viewport: { once: true },
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                DSH
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Dr. Somit Hazra</h3>
                <p className="text-gray-400">Homoeopathy</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Providing holistic healing through homeopathy with personalized care and natural treatment solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition duration-300">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition duration-300">Services</Link></li>
              <li><Link to="/consultation" className="hover:text-white transition duration-300">Online Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Chronic Disease Treatment</li>
              <li>Skin Conditions</li>
              <li>Digestive Disorders</li>
              <li>Respiratory Issues</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>
                  201 Benimadhab Nagar, S B Gorai Road,<br />
                  Bharat Petrol Pump, Behind Nataraj Apartment, Asansol 713301
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919775000993" className="hover:text-white transition duration-300">
                  (+91) 97750 00993
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:drshazrahomoeopathyclinic@gmail.com" className="hover:text-white transition duration-300">
                  drshazrahomoeopathyclinic@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm"
        >
          © 2024 Dr. Somit Homoeopathy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
