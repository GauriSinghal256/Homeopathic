import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Dr. Somit Hazra', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden sm:block bg-blue-950/80 text-white py-2 text-sm backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
    <div className="mb-1 sm:mb-0 text-yellow-300 font-medium text-center sm:text-left">
      Consult Dr. Somit Hazra Online – Schedule Your Appointment Now
    </div>
    <div className="flex items-center space-x-4 text-white">
      <span>Phone: (+91) 97750 00993</span>
      <span>|</span>
      <span>Email: drshazrahomoeopathyclinic@gmail.com</span>
    </div>
  </div>
</div>


      {/* Main Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-white font-bold text-xl">DSH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-700">Dr. Somit Hazra</h1>
                <p className="text-sm text-blue-600">Homoeopathy</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/consultation"
                className="ml-4 bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Book an Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-600 hover:text-blue-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded text-base font-medium ${
                    isActive(item.href)
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/consultation"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-blue-900 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-800"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
