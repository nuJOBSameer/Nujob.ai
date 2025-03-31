import React from "react";
import Talent1 from "/images/Talent1.png"; // Make sure this path is correct

const JobOffersSection = () => {
  return (
    <div className="md:max-w-4xl max-w-80 mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-11">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img src={Talent1} alt="Talent" className="w-full max-h-[350px] object-cover" />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 p-6 bg-purple-50 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          We Offer <span className="ml-2 border-b-2 border-purple-600 w-12"></span>
        </h3>
        <h2 className="text-xl font-bold text-purple-600 mt-2">
          <span className="text-purple-600">Job Offers Centralization</span>
        </h2>
        <p className="text-gray-700 mt-2">
          Get roles that actually fit. Job Offers Central curates opportunities based on your skills and career goals.
        </p>
        <p className="text-gray-600 mt-2">
        •Smart Matching – AI filters out irrelevant listings.
          <br />•Strategic Insights – Compare offers with real market data.
          <br />•One Dashboard – Track and manage applications effortlessly.
        </p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-full flex items-center gap-2 w-fit">
          Explore More <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default JobOffersSection;
