import { StepHeader } from '../FormInput';

const planIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$29',
    features: ['5 Projects', '2GB Storage', 'Basic Support'],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$79',
    features: ['Unlimited Projects', '100GB Storage', 'Priority Support'],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    features: ['Everything', 'Custom Storage', 'Dedicated Support'],
  },
];

export const Step4 = ({ formData, setFormData }) => {
  return (
    <div className="animate-fade-in space-y-6">
      <StepHeader
        icon={planIcon}
        title="Select Your Plan"
        description="Choose the perfect plan for your needs"
      />

      <div className="grid grid-cols-3 gap-4 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setFormData({ ...formData, plan: plan.id })}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col-reverse ${
              formData.plan === plan.id
                ? 'border-purple-500 bg-purple-50 shadow-lg'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            {plan.popular && (
              <div className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full mb-3">
                Most Popular
              </div>
            )}
            <h3 className="font-bold text-lg text-gray-900">{plan.name}</h3>
            <div className="text-3xl font-bold text-purple-600 my-3">
              {plan.price}
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
