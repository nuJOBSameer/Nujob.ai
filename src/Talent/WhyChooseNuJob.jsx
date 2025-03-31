import React from "react";
import ArrowD from "/images/ArrowD.png"; // Ensure this image exists in your project folder

const WhyChooseNuJob = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
      {/* Heading - Now Above Both Sections */}
      <h2 className="text-2xl font-bold text-gray-900 text-center">
        Why Choose <span className="text-black">nuJOB.AI</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 w-80 md:w-full">
        {/* Left Section - Benefits List */}
        <div className="md:w-1/2">
          <h3 className="text-xl text-blue-600 font-semibold">Benefits</h3>
          <ul className="mt-4 space-y-4 text-gray-700">
            {[
              "Skills over buzzwords – AI evaluates ability, not just keywords.",
              "Precision matching – Opportunities tailored to your expertise.",
              "Real-time insights – Stay updated with industry demand.",
              "Profile positioning – Show what sets you apart.",
              "Streamlined tracking – No more scattered applications..",
            ].map((benefit, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-center">
                  <img src={ArrowD} alt="Arrow" className="w-4 h-4 mr-2" />
                  <span>{benefit}</span>
                </div>
                <div className="w-full border-t border-gray-400 mt-2"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Image (With Blue Overlay) */}
        <div className="md:w-1/2">
          <img
            src='/images/Why.png'
            alt="Benefits"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNuJob;
