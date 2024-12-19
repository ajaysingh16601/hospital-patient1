import React from "react";

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Patient Details" },
    { id: 2, label: "Assign Resources" },
    { id: 3, label: "Doctor Test Report" },
  ];

  return (
    <ol className="flex justify-center items-center w-full text-sm font-medium text-gray-500 sm:text-base">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className={`flex items-center ${index < steps.length - 1 ? "flex-grow" : "flex-shrink-0"}`}>      
              <div className={`flex items-center border  rounded-full py-1 ${ currentStep === step.id
                  ? "bg-[#848D5E] border-[#575F4A]" 
                  : " text-gray-500 border-gray-300 bg-white"}`}>
            <div
              className={`flex items-center justify-center w-8 h-8 text-white font-bold rounded-full mx-2 ${
                currentStep === step.id
                  ? "bg-[#575F4A]" 
                  : "bg-[#B4B4B4] text-gray-500" 
              }`}
            >
              {step.id}
            </div>
            <div
              className={`ml-1 mr-3 ${
                currentStep === step.id ? "text-white" : "text-gray-500"
              }`}
            >
              {step.label}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-[2px] w-16 ${
                currentStep > step.id ? "bg-[#B4B4B4]" : "bg-gray-200"
              }`}
            ></div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default ProgressSteps;
