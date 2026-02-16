import { FormInput, StepHeader } from '../FormInput';

const personalIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
  </svg>
);

export const Step2 = ({ formData, handleInputChange }) => {
  return (
    <div className="animate-fade-in space-y-6">
      {/* [BUG - COLOR & CONTRAST] Description text is light gray on light background - invisible */}
      {/* [FIX] Change text-gray-500 to text-gray-700 or text-gray-800 */}
      <StepHeader
        icon={personalIcon}
        title="Tell Us About You"
        description="Help us personalize your experience"
      />

      <div className="space-y-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="John"
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Doe"
          />
        </div>
        <FormInput
          label="Job Title"
          name="jobTitle"
          placeholder="e.g., Product Manager"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
        />
      </div>
    </div>
  );
};
