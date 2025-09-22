import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import FormNavigation from "./components/FormNavigation";
import ProfilePreview from "./components/ProfilePreview";

const App = () => {
  // Project Option 4: Provider Profile Builder (Simplified)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profileImage: null,
    specializations: [],
    services: [],
    experience: "",
    email: "",
    phone: "",
    availability: [],
  });

  const prevStep = () => setStep((prev) => prev - 1);
  const nextStep = () => setStep((prev) => prev + 1);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#59b9db] to-[#30b7e8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-50 tracking-wide mb-3">
            Provider Profile Builder
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 p-6 sm:p-8 border-r border-gray-200">
              {step === 1 && <Step1 data={formData} onChange={handleChange} />}
              {step === 2 && <Step2 data={formData} onChange={handleChange} />}
              {step === 3 && <Step3 data={formData} onChange={handleChange} />}
            </div>

            <div className="w-full lg:w-1/3 h-full">
              <ProfilePreview data={formData} />
            </div>
          </div>

          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
            <FormNavigation
              prev={prevStep}
              next={nextStep}
              step={step}
              onSubmit={() => {
                console.log("Form Submitted : ", formData);
                alert("Form has been Successfully Submitted");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
