import React from "react";
import Mission from "../Model/Mission";
import Business from "../Model/Business";
import Bottom from "../About/Bottom";

const Method = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Left Content */}
      <div className="w-full md:w-2/3 space-y-4 mt-9">
        <h2 className="text-4xl font-bold text-gray-900">Our Method</h2>
        <p className="text-gray-600 text-sm">
        Real skill validation and opportunity creation through AI-powered simulations and assessments. We don’t just fill positions—we create opportunities. nuJOB.AI merges AI-powered insights with real-world skill validation, ensuring that talent is more than just a keyword match. By integrating simulations, data-driven assessments, and unbiased evaluations, we take recruitment beyond resumes. Here, skills are tested, potential is unlocked, and careers take off.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
        <img 
          src="/images/Method.png" 
          alt="AI Driven Interviews" 
          className="relative z-10 w-full"
        />
      </div>
    </div>
    <Mission/>
    <Business/>
    <Bottom/>
    </>
  );
};

export default Method;
