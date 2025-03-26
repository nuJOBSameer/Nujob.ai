import React from "react";
import Talent1 from "/images/Talent1.png"; // Make sure this path is correct

const JobOffersSection = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-11">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img src={Talent1} alt="Talent" className="w-full max-h-[300px] object-cover" />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 p-6 bg-purple-50 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          We Offer <span className="ml-2 border-b-2 border-purple-600 w-12"></span>
        </h3>
        <h2 className="text-xl font-bold text-purple-600 mt-2">
          1 <span className="text-purple-600">Job Offers Centralization</span>
        </h2>
        <p className="text-gray-700 mt-2">
          Explore AI-Matched Job Offers and Strategize for Success
        </p>
        <p className="text-gray-600 mt-2">
          nuJOB.AI’s Job Offers Central provides candidates with a centralized hub for AI-matched job opportunities, enabling them to discover roles tailored to their skills and career aspirations.
        </p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-full flex items-center gap-2 w-fit">
          Explore More <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default JobOffersSection;
