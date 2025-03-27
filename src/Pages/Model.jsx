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
          At nuJOB.AI, we employ a comprehensive and data-driven approach to 
          revolutionize the executive search process. Our methods are crafted 
          to ensure efficiency, fairness, and the highest quality in talent 
          acquisition. By leveraging cutting-edge AI technology, advanced 
          analytics, and deep industry expertise, we streamline recruitment, 
          identify top talent with precision, and provide a transparent, 
          unbiased hiring process for our clients.
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
