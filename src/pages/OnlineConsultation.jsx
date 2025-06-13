import React, { useState } from 'react';

const OnlineConsultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: ''
    },
    medicalInfo: {
      condition: '',
      symptoms: '',
      duration: '',
      previousTreatment: '',
      currentMedications: ''
    },
    appointment: {
      preferredDate: '',
      preferredTime: '',
      consultationType: 'first-time'
    }
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const consultationTypes = [
    {
      type: 'first-time',
      title: 'First Time Consultation',
      duration: '60-90 minutes',
      price: '₹1500',
      description: 'Comprehensive initial consultation with detailed case taking'
    },
    {
      type: 'follow-up',
      title: 'Follow-up Consultation',
      duration: '30-45 minutes',
      price: '₹800',
      description: 'Review of progress and treatment adjustments'
    },
    {
      type: 'acute',
      title: 'Acute Consultation',
      duration: '20-30 minutes',
      price: '₹600',
      description: 'For immediate health concerns and acute conditions'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-44 bg-center bg-cover" style={{ backgroundImage: "url('/Consultation.jpeg')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Online Consultation
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Get personalized homeopathic treatment from the comfort of your home with our secure online consultation platform.
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className=" pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Step {step} of 4: {
                  step === 1 ? 'Consultation Type' :
                  step === 2 ? 'Personal Information' :
                  step === 3 ? 'Medical Information' :
                  'Appointment Scheduling'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Consultation Type */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
                Choose Your Consultation Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {consultationTypes.map((consultation) => (
                  <div
                    key={consultation.type}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                      formData.appointment.consultationType === consultation.type
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => handleInputChange('appointment', 'consultationType', consultation.type)}
                  >
                    <h3 className="text-xl font-bold text-primary-800 mb-2">{consultation.title}</h3>
                    <p className="text-2xl font-bold text-primary-600 mb-2">{consultation.price}</p>
                    <p className="text-gray-600 mb-3">{consultation.duration}</p>
                    <p className="text-sm text-gray-700">{consultation.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={nextStep}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
                Personal Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.personalInfo.name}
                      onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.personalInfo.email}
                      onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.personalInfo.phone}
                      onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.personalInfo.age}
                      onChange={(e) => handleInputChange('personalInfo', 'age', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <div className="flex space-x-4">
                      {['Male', 'Female', 'Other'].map((gender) => (
                        <label key={gender} className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.personalInfo.gender === gender}
                            onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
                            className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-gray-700">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Medical Information */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
                Medical Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Health Condition *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.medicalInfo.condition}
                      onChange={(e) => handleInputChange('medicalInfo', 'condition', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Describe your main health concern"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Symptoms *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.medicalInfo.symptoms}
                      onChange={(e) => handleInputChange('medicalInfo', 'symptoms', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Describe your symptoms in detail"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration of Symptoms
                    </label>
                    <select
                      value={formData.medicalInfo.duration}
                      onChange={(e) => handleInputChange('medicalInfo', 'duration', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select duration</option>
                      <option value="less-than-week">Less than a week</option>
                      <option value="1-4-weeks">1-4 weeks</option>
                      <option value="1-6-months">1-6 months</option>
                      <option value="6-months-1-year">6 months - 1 year</option>
                      <option value="more-than-year">More than a year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Treatments
                    </label>
                    <textarea
                      rows={3}
                      value={formData.medicalInfo.previousTreatment}
                      onChange={(e) => handleInputChange('medicalInfo', 'previousTreatment', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Describe any previous treatments you've tried"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Medications
                    </label>
                    <textarea
                      rows={3}
                      value={formData.medicalInfo.currentMedications}
                      onChange={(e) => handleInputChange('medicalInfo', 'currentMedications', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="List any medications you're currently taking"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Appointment Scheduling */}
          {step === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
                Schedule Your Appointment
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.appointment.preferredDate}
                      onChange={(e) => handleInputChange('appointment', 'preferredDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      required
                      value={formData.appointment.preferredTime}
                      onChange={(e) => handleInputChange('appointment', 'preferredTime', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">Appointment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Consultation Type:</span>
                      <span className="font-medium">
                        {consultationTypes.find(c => c.type === formData.appointment.consultationType)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">
                        {consultationTypes.find(c => c.type === formData.appointment.consultationType)?.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-medium text-primary-600">
                        {consultationTypes.find(c => c.type === formData.appointment.consultationType)?.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Patient:</span>
                      <span className="font-medium">{formData.personalInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date & Time:</span>
                      <span className="font-medium">
                        {formData.appointment.preferredDate} at {formData.appointment.preferredTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={() => alert('Appointment booked successfully!')}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold text-primary-800">Secure & Confidential</h3>
            </div>
            <p className="text-gray-700">
              Your personal and medical information is protected with industry-standard encryption. 
              All consultations are conducted through secure video platforms with end-to-end encryption 
              to ensure complete privacy and confidentiality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsultation;