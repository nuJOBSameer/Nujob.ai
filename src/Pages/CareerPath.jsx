import React from "react";
import ExecutiveSearch from "../Career-Path/ExecutiveSearch";
import TopTierCandidates from "../Career-Path/TopTierCandidates";
import ExecutiveServices from "../Career-Path/ExecutiveServices";
import { Helmet } from "react-helmet";

const CareerPath = () => {
  return (
    <>
    <Helmet>
        <title>Career Path | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
    <section className="bg-[#f8f9fc] py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-black mb-4">
        Executive Services That Deliver Results<br />
          <span className="text-[#1d1d1f]">AI-Powered Precision</span>
        </h2>
        <p className="text-gray-700 mb-6">
        nuJOB.AI specializes in securing top-tier executives, board members, and industry leaders. Our AI-driven approach ensures businesses land game-changing talent.
        </p>
        {/* Benefits List */}
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold text-[#0073e6]">High-Impact Leadership</span> <br />
              Find executives who drive real growth.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold text-[#0073e6]">Data-Driven Hiring</span> <br />
              Make smarter choices with AI-powered insights.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
            <p>
              <span className="font-semibold text-[#0073e6]">Faster, Smarter Recruitment</span> <br />
              Cut hiring time and secure the best.
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