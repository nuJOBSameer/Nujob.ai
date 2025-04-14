import React from "react";
import Reasons from "../Interview/Reasons";
import InterviewSection from "../Interview/InterviewSection";
import { Helmet } from "react-helmet";

const Interview = () => {
  return (
    <>
    <Helmet>
        <title>Interview | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
    <div className="flex md:flex-row flex-col items-center justify-between pt-24 md:py-12 px-5 md:px-16 bg-white">
      {/** Left Text Section **/}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-700">
        Interview & Assessment
        </h2> 
        <p className="text-gray-600 mt-4">
        At nuJOB.AI, we revolutionize the interview and assessment process with a streamlined, AI-powered approach that saves time and delivers deeper insights. Our platform facilitates live, interactive interviews and realistic scenario-based assessments, ensuring a comprehensive evaluation of skills and potential. By empowering recruiters and candidates with advanced tools, we enable efficient, fair, and data-driven hiring decisions that benefit everyone involved.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2">
          More Features <span>↗</span>
        </button>
      </div>

      {/** Right Image Section **/}
      <div className="max-w-md">
        <img 
          src="/images/interview.png" 
          alt="Resume Enhancement" 
          className="w-full h-auto"
        />
      </div>
    </div>
    <Reasons/>
    <InterviewSection/>
    </>
  );
};

export default Interview;
