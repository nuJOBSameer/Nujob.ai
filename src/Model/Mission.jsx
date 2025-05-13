import React from "react";

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Left Image Section with Overlay */}
      <div className="relative w-full md:w-1/3">
        <img 
          src="/images/Mission.png" 
          alt="Consultants guiding clients" 
          className="w-auto h-96 rounded-lg"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Mission
          </span>
        </h2>
        <p className="text-gray-600 italic text-base mt-2">
        “To make hiring fair, efficient, and deeply personalized. We connect the right talent with the right roles using AI.” - Dmitry Bokotey, CEO
        </p>
      </div>
    </div>
  );
};

export default Mission;
