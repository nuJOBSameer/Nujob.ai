import React from "react";
import Competetive from "../Analysis/Competitive";
import Comparison from "../Analysis/Comparison";

const Analysis = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto px-6 py-24">
      {/* Left Content */}
      <div className="w-full md:w-2/3 space-y-4 mt-9">
        <h2 className="text-4xl font-bold text-gray-900">Why nuJOB.AI?</h2>
        <p className="text-gray-600 text-sm pr-24">
        At nuJOB.AI, we’re flipping the script on job hunting. No more endless applications or outdated hiring tactics. Our AI-driven platform connects talent with the right opportunities—fast, smart, and bias-free. Whether you're hiring or job-seeking, we make the process seamless and efficient.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
        <img 
          src="/images/Analysis1.png" 
          alt="AI Driven Interviews" 
          className="relative z-10 w-full"
        />
      </div>
    </div>
    <Competetive/>
    <Comparison/>
    </>
  );
};

export default Analysis;
