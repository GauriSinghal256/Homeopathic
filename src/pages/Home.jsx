
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    heading: 'Holistic Healing with Homoeopathy',
    subText: "Experience natural healing with Dr. Madhav's personalized homeopathic treatments. Safe, effective, and gentle care for your complete wellness journey.",
    bg: '/herobg2.jpg',
  },
  {
    heading: 'Empathy, Care & Cure',
    subText: 'Rediscover health through compassionate, customized homeopathic care—designed for long-lasting well-being.',
    bg: '/aboutbg.webp',
  },
  {
    heading: 'Natural Recovery for Every Body',
    subText: 'Let nature guide your healing process with time-tested remedies and gentle support tailored to your needs.',
    bg: '/herobg3.jpg',
  },
];

const testimonials = [
  {
    text: `"Dr. Somit’s approach is unlike anything I've experienced before. Within weeks, I felt a complete shift in my energy and overall health."`,
    name: 'Priya Sharma',
  },
  {
    text: `"I was suffering from chronic migraines for years. Dr. Somit's remedies helped me reduce the frequency drastically. Highly recommended!"`,
    name: 'Amit Verma',
  },
  {
    text: `"Natural healing felt slow initially, but now I understand the value of balance and patience. Thank you, Dr. Somit!"`,
    name: 'Ritika Joshi',
  },
  {
    text: `"The clinic is clean, the staff is supportive, and the consultation felt personal. I trust his judgment fully."`,
    name: 'Rohan Mehta',
  },
  {
    text: `"After trying several doctors, I finally found lasting relief through homeopathy. I am grateful for Dr. Somit's care."`,
    name: 'Neha Kapoor',
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(testimonialTimer);
  }, []);

  const currentSlide = slides[current];

  const features = [
    { title: 'Natural Healing', description: 'Safe and effective homeopathic treatments using natural remedies.', icon: '🌿' },
    { title: 'Personalized Care', description: 'Individual treatment plans tailored to your specific health needs.', icon: '👨‍⚕️' },
    { title: 'Experienced Doctor', description: 'Over 15 years of experience in homeopathic medicine and patient care.', icon: '⭐' },
    { title: 'Online Consultation', description: 'Convenient online consultations from the comfort of your home.', icon: '💻' },
  ];

  const services = [
    'Chronic Disease Management',
    'Skin & Hair Disorders',
    'Digestive Issues',
    'Respiratory Problems',
    'Mental Health Support',
    "Women's Health",
    "Children's Health",
    'Lifestyle Diseases',
  ];

  return (
    <div className="pt-24 bg-slate-100 text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.bg})` }}
          >
            <div className="absolute inset-0 bg-blue-950/50" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-[92vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={currentSlide.heading}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-blue-300">{currentSlide.heading}</span>
              </h1>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">{currentSlide.subText}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/consultation" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                  Book an Appointment
                </Link>
                <Link to="/about" className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300">
                  Call Now
                </Link>
              </div>
            </motion.div>

            {/* Image removed */}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover the unique benefits of a holistic approach to health through homeopathy.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-slate-100 hover:bg-slate-200 transition duration-300 shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">Homeopathic Services</h2>
              <p className="text-lg text-gray-700 mb-8">Treating chronic and acute conditions with safe, individualized remedies.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                View All Services
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <img src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Homeopathic medicine" className="rounded-xl shadow-lg w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
     <section
  className="relative py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/testimonialbg.jpg')" }} // Replace with your image
>
  {/* Dark Overlay for better contrast */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

  {/* Foreground Content */}
  <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        Patient Testimonials
      </h2>
      <p className="text-lg text-gray-200">
        What our patients say about their journey to wellness.
      </p>
    </motion.div>

    <div className="relative h-56 md:h-48">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute w-full h-full bg-white p-8 shadow-xl rounded-2xl border border-blue-100"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic leading-relaxed text-center">
            {testimonials[index].text}
          </p>
          <div className="font-semibold text-primary-800 text-center">
            - {testimonials[index].name}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>



      {/* Call to Action */}
      <section className="relative h-[80vh] flex items-center justify-center text-white" style={{ backgroundImage: `url('/bg2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-blue-950/80"></div>
        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">Book your consultation today and experience the gentle, effective power of homeopathic medicine.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/consultation" className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition duration-300">
              Book Online Consultation
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition duration-300">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;