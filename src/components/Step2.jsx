import React from "react";

const specializationsList = ["Dyslexia", "ADHD", "Autism"];
const servicesList = ["Tutoring", "Therapy", "Coaching"];

const Step2 = ({ data, onChange }) => {
  const toggleSelection = (key, value) => {
    const updated = data[key].includes(value)
      ? data[key].filter((item) => item !== value)
      : [...data[key], value];
    onChange(key, updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Services & Expertise</h2>
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800">Specializations</h3>
        <p className="text-sm text-gray-500">Select all that apply</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {specializationsList.map((item) => (
            <label
              key={item}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                data.specializations.includes(item)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={data.specializations.includes(item)}
                onChange={() => toggleSelection("specializations", item)}
              />
              <div
                className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                  data.specializations.includes(item)
                    ? "bg-blue-500"
                    : "bg-white border border-gray-300"
                }`}
              >
                {data.specializations.includes(item) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800">Services Offered</h3>
        <p className="text-sm text-gray-500">Select all that apply</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {servicesList.map((item) => (
            <label
              key={item}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                data.services.includes(item)
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={data.services.includes(item)}
                onChange={() => toggleSelection("services", item)}
              />
              <div
                className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                  data.services.includes(item)
                    ? "bg-blue-500"
                    : "bg-white border border-gray-300"
                }`}
              >
                {data.services.includes(item) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Years of Experience
        </label>
        <input
          type="number"
          min="0"
          max="50"
          placeholder="Enter years of experience"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          value={data.experience}
          onChange={(e) => onChange("experience", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Step2;
