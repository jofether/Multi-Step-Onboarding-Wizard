import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-xl overflow-hidden">
        
        {/* PROGRESS HEADER */}
        <div className="bg-gray-100 p-6 border-b border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Step {step} of {totalSteps}</span>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{Math.round((step / totalSteps) * 100)}% Completed</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="p-8 min-h-[300px]">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800">Account Setup</h2>
              <p className="text-gray-500">First, let's create your username and password.</p>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <input type="text" placeholder="Username" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-800">Personal Details</h2>
              <p className="text-gray-500">Tell us a bit more about yourself.</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                <input type="text" placeholder="Job Title" className="col-span-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">All Set!</h2>
              <p className="text-gray-500">Review your information and click Finish to create your account.</p>
              <div className="bg-gray-50 p-4 rounded-lg text-left text-sm text-gray-600 mt-4 border border-gray-200">
                <p><strong>Plan:</strong> Professional Tier</p>
                <p><strong>Billed:</strong> Annually</p>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER CONTROLS */}
        <div className="p-6 border-t border-gray-200 flex justify-between bg-gray-50">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg font-medium transition ${step === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            Back
          </button>
          
          <button 
            onClick={nextStep}
            className="px-8 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
          >
            {step === totalSteps ? 'Finish' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;