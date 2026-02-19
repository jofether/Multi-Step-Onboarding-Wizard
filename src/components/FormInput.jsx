export const FormInput = ({ 
  label, 
  name, 
  type = 'text',
  placeholder,
  value,
  onChange,
  colSpan = 1
}) => {
  return (
    <div className={colSpan > 1 ? `col-span-${colSpan}` : ''}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-gray-20 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
      />
    </div>
  );
};

export const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option'
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-red-5"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const StepHeader = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
};
