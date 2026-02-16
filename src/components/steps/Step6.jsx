import { StepHeader } from '../FormInput';

const reviewIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const Step6 = ({ formData }) => {
  return (
    <div className="animate-fade-in space-y-6">
      <StepHeader
        icon={reviewIcon}
        title="Review Your Information"
        description="Make sure everything looks correct"
      />

      <div className="space-y-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs uppercase font-bold text-gray-500 mb-1">Email</p>
            <p className="font-semibold text-gray-900">{formData.email || 'Not provided'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs uppercase font-bold text-gray-500 mb-1">Username</p>
            <p className="font-semibold text-gray-900">{formData.username || 'Not provided'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs uppercase font-bold text-gray-500 mb-1">Name</p>
            <p className="font-semibold text-gray-900">
              {formData.firstName && formData.lastName
                ? `${formData.firstName} ${formData.lastName}`
                : 'Not provided'}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs uppercase font-bold text-gray-500 mb-1">Company</p>
            <p className="font-semibold text-gray-900">{formData.company || 'Not provided'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs uppercase font-bold text-gray-500 mb-1">Industry</p>
            <p className="font-semibold text-gray-900">{formData.industry || 'Not selected'}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-xs uppercase font-bold text-gray-500 mb-1">Plan</p>
            <p className="font-semibold text-gray-900 capitalize">{formData.plan}</p>
          </div>
        </div>

        {formData.features.length > 0 && (
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <p className="text-xs uppercase font-bold text-emerald-700 mb-2">
              Selected Features
            </p>
            <div className="flex flex-wrap gap-2">
              {formData.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">You're All Set!</h3>
          <p className="text-gray-600">
            Click "Complete Setup" below to finalize your account and start exploring.
          </p>
        </div>
      </div>
    </div>
  );
};
