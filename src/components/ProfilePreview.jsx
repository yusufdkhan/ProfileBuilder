import React from "react";

const ProfilePreview = ({ data }) => {
  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Profile Preview</h2>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          Live
        </span>
      </div>

      {data.profileImage && (
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow">
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="bg-blue-400 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Basic Information</h3>
          <div className="space-y-2">
            <p className="text-md">
              <span className="font-medium text-gray-900">Name:</span>{" "}
              <span className="text-gray-50">
                {data.name || "Not specified"}
              </span>
            </p>
            <p className="text-md">
              <span className="font-medium text-gray-900">Bio:</span>{" "}
              <span className="text-gray-50">
                {data.bio || "Not specified"}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-blue-400 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">
            Professional Details
          </h3>
          <div className="space-y-2">
            <p className="text-md">
              <span className="font-medium text-gray-900">
                Specializations:
              </span>{" "}
              <span className="text-gray-50">
                {data.specializations.length
                  ? data.specializations.join(", ")
                  : "None listed"}
              </span>
            </p>
            <p className="text-md">
              <span className="font-medium text-gray-900">Services:</span>{" "}
              <span className="text-gray-50">
                {data.services.length
                  ? data.services.join(", ")
                  : "None listed"}
              </span>
            </p>
            <p className="text-md">
              <span className="font-medium text-gray-900">Experience:</span>{" "}
              <span className="text-gray-50">
                {data.experience ? `${data.experience} years` : "Not specified"}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-blue-400 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">
            Contact Information
          </h3>
          <div className="space-y-2">
            <p className="text-md">
              <span className="font-medium text-gray-900">Email:</span>{" "}
              <span className="text-gray-50">
                {data.email || "Not specified"}
              </span>
            </p>
            <p className="text-md">
              <span className="font-medium text-gray-900">Phone:</span>{" "}
              <span className="text-gray-50">
                {data.phone || "Not specified"}
              </span>
            </p>
          </div>
        </div>

        {data.availability.length > 0 && (
          <div className="bg-blue-400 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Availability</h3>
            <div className="flex flex-wrap gap-2">
              {data.availability.map((day, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePreview;
