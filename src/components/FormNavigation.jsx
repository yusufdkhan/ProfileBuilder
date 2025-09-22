import React from "react";

const FormNavigation = ({ step, prev, next, onSubmit }) => {
  return (
    <div className="flex justify-between mt-6">
      {step > 1 && (
        <button
          onClick={prev}
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
      )}
      {step < 3 ? (
        <button
          onClick={next}
          className="bg-blue-600 text-white px-4 py-2 rounded ml-auto"
        >
          Next
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
