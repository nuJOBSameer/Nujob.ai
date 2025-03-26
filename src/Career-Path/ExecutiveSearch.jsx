import React from "react";

const ExecutiveSearch = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/CareerPath1.png"
          alt="Executive Search Visualization"
          className="w-full max-w-md"
        />
      </div>
      
      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700">
          Unlock Top Talent with AI-Driven Executive Search Services
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          At nuJOB.AI, we harness the power of advanced AI technology to connect your
          organization with top-tier leadership talent. Our Executive Search Services transcend
          traditional recruitment by offering data-driven insights and tailored matches, ensuring
          that your next executive hire is an ideal fit. Whether you're filling a key leadership role
          or planning for strategic growth, our cutting-edge tools streamline the hiring process,
          saving you both time and resources while delivering outstanding results. Let AI elevate your
          executive search and drive your company’s success to new heights.
        </p>
        
        {/* Benefits Section */}
        <div className="mt-6 shadow-xl p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800">Benefits</h3>
          <ul className="mt-3 space-y-3 text-gray-700">
            <li className="flex items-start">
              <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mr-2" />
              <span>
                <strong>Identify Top-Tier Talent Efficiently:</strong> AI tools find qualified executives swiftly
              </span>
            </li>
            <li className="flex items-start">
              <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mr-2" />
              <span>
                <strong>Tailored Candidate Matching:</strong> Match candidates based on skills and leadership qualities.
              </span>
            </li>
            <li className="flex items-start">
              <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mr-2" />
              <span>
                <strong>Enhanced Evaluation with AI Insights:</strong> Analyze profiles for better hiring decisions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearch;
