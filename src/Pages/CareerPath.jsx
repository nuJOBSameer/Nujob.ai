import React from "react";
import ExecutiveSearch from "../Career-Path/ExecutiveSearch";
import TopTierCandidates from "../Career-Path/TopTierCandidates";
import ExecutiveServices from "../Career-Path/ExecutiveServices";

const CareerPath = () => {
  return (
    <>
    <section className="bg-[#f8f9fc] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-black mb-4">
          Build a Standout Profile with <br />
          <span className="text-[#1d1d1f]">AI-Powered Precision</span>
        </h2>
        <p className="text-gray-700 mb-6">
          Your professional profile is the gateway to new career opportunities, and at nuJOB.AI,
          we empower you to craft one that truly stands out. Our advanced AI-driven platform
          guides you through every step of building a profile that not only highlights your
          unique strengths but also showcases your personal brand in a way that resonates with
          employers. From optimizing your skills and experience to boosting your visibility,
          nuJOB.AI ensures your profile is designed to capture attention.
        </p>
        {/* Benefits List */}
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold text-[#0073e6]">Professional Presentation</span> <br />
              Ensure your profile is polished and presents you in the best light.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold text-[#0073e6]">Increased Visibility</span> <br />
              A well-optimized profile gets noticed by recruiters and hiring managers.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold text-[#0073e6]">Skills Highlighting</span> <br />
              Focus on the skills and achievements that are most relevant to your career goals.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src="/images/CareerPath.png" alt="Profile Showcase" className="w-full max-w-lg" />
      </div>
    </section>
    <ExecutiveSearch/>
    <TopTierCandidates/>
    <ExecutiveServices/>
    </>
  );
};

export default CareerPath;