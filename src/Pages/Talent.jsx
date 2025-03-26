import React from "react";
import JobOffersSection from "../Talent/JobOffersSection";
import WhyChooseNuJob from "../Talent/WhyChooseNuJob";
import Boxes from "../Talent/Boxes";
import GuidanceSection from "../Talent/GuidanceSection";


const Talent = () => {
  return (
    <>
    <div className="flex items-center justify-between py-12 px-16 bg-white">
      {/** Left Text Section **/}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-700">
        Talent Management
        </h2> 
        <p className="text-gray-600 mt-4">
        At nuJOB.AI we specialize in recruiting, developing, and retaining top talent through advanced competency detection, ethical assessments, and streamlined hiring processes. Empower your workforce with excellence and integrity.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2">
          Explore More <span>↗</span>
        </button>
      </div>

      {/** Right Image Section **/}
      <div className="max-w-md">
        <img 
          src="/images/Talent.png" 
          alt="Resume Enhancement" 
          className="w-full h-auto"
        />
      </div>
    </div>
    <JobOffersSection/>
    <WhyChooseNuJob/>
    <Boxes/>
    <GuidanceSection/>
    </>
  );
};

export default Talent;
