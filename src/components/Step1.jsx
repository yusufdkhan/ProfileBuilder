import React from "react";
import AvatarImg from "../assets/avatar.png";
const Step1 = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>

      <div>
        <label className="block text-md font-medium text-[#1f2937] mb-1">
          Provider Name
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          type="text"
          placeholder="Enter your full name"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-md font-medium text-[#1f2937] mb-1">
          Profile Bio
        </label>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[120px]"
          placeholder="Tell us about yourself and your professional background"
          value={data.bio}
          onChange={(e) => onChange("bio", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-md font-medium text-[#1f2937] mb-3">
          Profile Picture
        </label>
        <div className="flex items-center gap-4">
          <button
            className="relative overflow-hidden bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors px-6 py-10 w-full text-center"
            onClick={() => onChange("profileImage", AvatarImg)}
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-md text-gray-600">
                Click to upload profile photo
              </span>
              <span className="text-xs text-gray-500">
                JPG or PNG (max. 2MB)
              </span>
            </div>
          </button>

          {data.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={data.profileImage}
                alt="Profile Preview"
                className=" w-30 h-30 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1;
