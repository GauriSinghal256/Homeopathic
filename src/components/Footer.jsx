import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">DSH</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Somit Hazra</h3>
                <p className="text-primary-200">Homoeopathy</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm mb-4">
              Providing holistic healing through homeopathy with personalized care and natural treatment solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-primary-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/consultation" className="text-primary-200 hover:text-white transition-colors">Online Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-200">
              <li>Chronic Disease Treatment</li>
              <li>Skin Conditions</li>
              <li>Digestive Disorders</li>
              <li>Respiratory Issues</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">123 Health Street, Medical District, City 12345</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">(+91) 08447 93878</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">drmadhav.homeoclinic@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-200 text-sm">
            © 2024 Dr. Madhav Homoeopathy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;