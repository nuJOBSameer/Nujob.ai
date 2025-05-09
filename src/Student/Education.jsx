import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-16 py-20 bg-[#F6F9FF]">
      {/* Video Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="relative rounded-xl overflow-hidden shadow-lg max-w-xl mx-auto">
          <img
            src="/images/video-placeholder.png" // Replace with your placeholder image
            alt="Education Video"
            className="w-full object-cover"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-[#5243C2] w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Video duration */}
          <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded-md opacity-90">
            3:45
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          Your Future <span className="text-[#5243C2]">Starts Here</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
          Watch how nuJOB helps students build smarter careers before they graduate. Join thousands of
          successful graduates who launched their careers through our platform.
        </p>

        {/* Stats */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <div className="bg-white rounded-lg px-10 py-3 shadow">
            <p className="text-[#5243C2] font-bold text-lg">94%</p>
            <p className="text-sm text-gray-600">Placement Rate</p>
          </div>
          <div className="bg-white rounded-lg px-10 py-3 shadow">
            <p className="text-[#5243C2] font-bold text-lg">10k+</p>
            <p className="text-sm text-gray-600">Students Placed</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-[#5243C2] hover:bg-[#4132a0] text-white px-6 py-3 rounded-full shadow-md transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
