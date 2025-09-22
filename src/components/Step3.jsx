import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const Step3 = ({ data, onChange }) => {
  const toggleDay = (key, value) => {
    const updatedDay = data[key].includes(value)
      ? data[key].filter((item) => item !== value)
      : [...data[key], value];
    onChange(key, updatedDay);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Contact & Availability
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>

      {/* Phone Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+1 (123) 456-7890"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
        />
      </div>

      {/* Availability Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Preferred Working Days
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Select the days you're typically available
        </p>
        <div className="flex flex-wrap gap-3">
          {days.map((day) => (
            <label
              key={day}
              className={`inline-flex items-center justify-center px-4 py-2 border rounded-full cursor-pointer transition-all ${
                data.availability.includes(day)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={data.availability.includes(day)}
                onChange={() => toggleDay("availability", day)}
              />
              <span className="font-medium">{day}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
