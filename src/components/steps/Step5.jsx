import { StepHeader } from '../FormInput';

const preferencesIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
  </svg>
);

const featuresList = [
  'Analytics Dashboard',
  'Team Collaboration',
  'API Access',
  'Dark Mode',
  'Mobile App',
  'Advanced Reporting',
];

export const Step5 = ({ formData, handleInputChange, handleFeatureToggle }) => {
  return (
    <div className="animate-fade-in space-y-6">
      <StepHeader
        icon={preferencesIcon}
        title="Customize Preferences"
        description="Set up your communication preferences"
      />

      <div className="space-y-4 mt-8">
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Choose Features</h3>
          {featuresList.map((feature) => (
            <label
              key={feature}
              className="flex items-center gap-3 p-2 cursor-pointer hover:bg-green-100 rounded-lg transition"
            >
              <input
                type="checkbox"
                checked={formData.features.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
              />
              <span className="text-gray-700">{feature}</span>
            </label>
          ))}
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleInputChange}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <div>
              <div className="font-semibold text-gray-900">Email Notifications</div>
              <div className="text-sm text-gray-600">
                Receive updates about new features and improvements
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
