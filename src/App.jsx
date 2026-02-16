import React, { useState } from 'react';
import { StepIndicator } from './components/StepIndicator';
import { Step1 } from './components/steps/Step1';
import { Step2 } from './components/steps/Step2';
import { Step3 } from './components/steps/Step3';
import { Step4 } from './components/steps/Step4';
import { Step5 } from './components/steps/Step5';
import { Step6 } from './components/steps/Step6';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: '',
    industry: '',
    plan: 'pro',
    features: [],
    notifications: true,
  });

  const totalSteps = 6;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const stepTitles = {
    1: 'Account Setup',
    2: 'Personal Information',
    3: 'Company Details',
    4: 'Choose Your Plan',
    5: 'Preferences',
    6: 'Review & Confirm',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl">
        {/* TOP DECORATIVE HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Welcome Aboard
          </h1>
          <p className="text-gray-600 text-lg">Complete your profile setup in 6 easy steps</p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* STEP INDICATOR */}
          <div className="px-8 pt-12 pb-4">
            <StepIndicator step={step} totalSteps={totalSteps} stepTitles={stepTitles} />
          </div>

          {/* PROGRESS BAR */}
          <div className="px-8 pb-8">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="px-8 pb-12 min-h-[420px]">
            {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} />}
            {step === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} />}
            {step === 3 && <Step3 formData={formData} handleInputChange={handleInputChange} />}
            {step === 4 && <Step4 formData={formData} setFormData={setFormData} />}
            {step === 5 && <Step5 formData={formData} handleInputChange={handleInputChange} handleFeatureToggle={handleFeatureToggle} />}
            {step === 6 && <Step6 formData={formData} />}
          </div>

          {/* FOOTER NAVIGATION */}
          <div className="px-8 py-8 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                step === 1
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                  : 'text-gray-700 hover:bg-gray-200 active:scale-95'
              }`}
            >
              ← Back
            </button>

            <div className="text-sm font-semibold text-gray-600">
              Step <span className="text-purple-600">{step}</span> of <span className="text-purple-600">{totalSteps}</span>
            </div>

            <button
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {step === totalSteps ? '✓ Complete Setup' : 'Next Step →'}
            </button>
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Need help? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Contact Support</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;