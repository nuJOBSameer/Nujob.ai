import React from "react";
import JobMatch from "../Student/JobMatch";
import Skills from "../Student/Skills";
import Education from "../Student/Education";

const Student = () => {
  return (
    <div className="overflow-x-hidden">
    <div className="flex flex-col md:flex-row min-h-screen w-full pt-16 pb-10"> {/* pt for navbar space, pb for footer */}
      
      {/* Left Section */}
      <div className="bg-white flex flex-col justify-center items-start pl-8 py-10 md:w-1/3 w-full text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Launch Your Career <br className="hidden md:block" /> with Confidence
        </h2>
        <p className="text-gray-600 text-base mt-4 pr-8">
        Skip the waiting game. nuJOB gives you the tools to build your future, your way-before you even graduate.<br className="hidden md:block" /> Smart, AI-powered, and built for how you actually work.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Explore For Students
          </button>
          {/* <button className="border border-gray-300 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition">
            Watch Demo
          </button> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="relative md:w-2/3 w-full h-[400px] md:h-auto"> {/* Fixed height on mobile to avoid overflow */}
        <img
          src="/images/Student.jpeg"
          alt="Kelly Hamilton"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <JobMatch/>
    <Skills/>
    <Education/>
    </div>
  );
};

export default Student;
