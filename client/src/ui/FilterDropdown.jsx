export const FilterDropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="filter-dropdown">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="block w-full bg-white border border-red-500 text-gray-700 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 custom-select"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
