import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-16 py-20 bg-[#F6F9FF]">
      {/* Video Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="relative rounded-xl overflow-hidden shadow-lg max-w-xl mx-auto">
        <video
            src="/images/Students.MP4"
            className="w-full h-full object-cover"
            loop
            muted
            controls
            playsInline
          />
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
           <Link to="/pricing"> Start Your Journey</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
