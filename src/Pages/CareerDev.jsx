import React from "react";
import TrackInterviews from "../CareerDev/TrackInterviews.jsx";
import Monitor from "../CareerDev/Monitor.jsx";
import Guidance from "../CareerDev/Guidance.jsx";
import Confidence from "../CareerDev/Confidence.jsx";
import MeritBadges from "../CareerDev/MeritBadges.jsx";

const CareerDev = () => {
  return (
    <>
    <div className="flex items-center justify-between py-12 px-16 bg-white">
      {/** Left Text Section **/}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-700">
        Unlock Your Full Career Potential
        </h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">
          Optimize Your Career Trajectory with nuJOB.AI
        </h3>
        <p className="text-gray-600 mt-4">
        In today’s fast-paced and competitive job market, navigating your career path can feel overwhelming. That’s where we come in. With a suite of tools designed to support every stage of your professional development, we help you identify strengths, overcome challenges, and stand out from the crowd. Whether you’re preparing for interviews, seeking recognition for your achievements, or looking to build trust with employers, our platform empowers you with the insights and resources you need to succeed.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2">
          More Features <span>↗</span>
        </button>
      </div>

      {/** Right Image Section **/}
      <div className="max-w-md">
        <img 
          src="/images/CareerDev.png" 
          alt="Resume Enhancement" 
          className="w-full h-auto"
        />
      </div>
    </div>
    <TrackInterviews/>
    <Monitor/>
    <Guidance/>
    <Confidence/>
    <MeritBadges/>
    </>
  );
};

export default CareerDev;
