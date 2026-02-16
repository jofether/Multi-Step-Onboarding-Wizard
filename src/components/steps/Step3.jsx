import { FormInput, FormSelect, StepHeader } from '../FormInput';

const companyIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path>
  </svg>
);

export const Step3 = ({ formData, handleInputChange }) => {
  const industryOptions = [
    { label: 'Technology', value: 'tech' },
    { label: 'Finance', value: 'finance' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Retail', value: 'retail' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Other', value: 'other' },
  ];

  const companySizeOptions = [
    { label: '1-10 employees', value: '1-10' },
    { label: '11-50 employees', value: '11-50' },
    { label: '51-200 employees', value: '51-200' },
    { label: '200+ employees', value: '200+' },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <StepHeader
        icon={companyIcon}
        title="Company Information"
        description="Details about your organization"
      />

      <div className="space-y-4 mt-8">
        <FormInput
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Acme Corporation"
        />
        <FormSelect
          label="Company Size"
          name="companySize"
          options={companySizeOptions}
          placeholder="Select company size"
        />
        <FormSelect
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          options={industryOptions}
          placeholder="Select an industry"
        />
        <FormInput
          label="Website (Optional)"
          name="website"
          type="url"
          placeholder="https://example.com"
        />
      </div>
    </div>
  );
};
