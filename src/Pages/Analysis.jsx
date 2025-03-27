import React from "react";
import Competetive from "../Analysis/Competitive";
import Comparison from "../Analysis/Comparison";

const Analysis = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Left Content */}
      <div className="w-full md:w-2/3 space-y-4 mt-9">
        <h2 className="text-4xl font-bold text-gray-900">Why to choose nuJOB.AI?</h2>
        <p className="text-gray-600 text-sm">
        At nuJOB.AI, we’re redefining the way people connect with opportunities. Our platform combines cutting-edge AI technology with a deep understanding of career needs, making the job search process smarter, faster, and more personalized. Whether you’re looking to grow your team or find your next big role, nuJOB.AI offers:
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
