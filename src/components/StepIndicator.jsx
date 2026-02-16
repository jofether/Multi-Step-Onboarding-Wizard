export const StepIndicator = ({ step, totalSteps, stepTitles }) => {
  return (
    <div className="flex justify-between mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((num) => (
        <div key={num} className="flex flex-col items-center flex-1">
          {/* [BUG - LAYERS] Absolute positioning without parent relative causes misalignment */}
          {/* [FIX] Remove absolute or wrap parent div with relative */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 absolute ${
              step >= num
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {num === step ? (
              <span className="text-lg font-bold">{num}</span>
            ) : step > num ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <span className="text-lg font-bold">{num}</span>
            )}
          </div>
          <div className="text-xs font-semibold text-gray-600 mt-2 text-center">
            {stepTitles[num]}
          </div>
        </div>
      ))}
    </div>
  );
};
