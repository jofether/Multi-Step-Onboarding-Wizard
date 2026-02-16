import { FormInput, StepHeader } from '../FormInput';

const accountIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const Step1 = ({ formData, handleInputChange }) => {
  return (
    <div className="animate-fade-in space-y-6">
      <StepHeader
        icon={accountIcon}
        title="Create Your Account"
        description="Set up your login credentials securely"
      />

      <div className="space-y-4 mt-8">
        {/* [BUG - LAYOUT] Grid has too many columns, breaking layout */}
        {/* [FIX] Remove grid-cols-3 or change to grid-cols-1 */}
        <div className="grid grid-cols-3 gap-4">
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
          />
          <FormInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Choose your username"
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create a strong password"
          />
        </div>
        <p className="text-xs text-gray-500">
          Must be at least 8 characters with a mix of letters and numbers
        </p>
      </div>
    </div>
  );
};
