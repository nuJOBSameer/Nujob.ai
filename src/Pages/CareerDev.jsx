import React, { useRef } from "react";
import TrackInterviews from "../CareerDev/TrackInterviews.jsx";
import Monitor from "../CareerDev/Monitor.jsx";
import Guidance from "../CareerDev/Guidance.jsx";
import Confidence from "../CareerDev/Confidence.jsx";
import MeritBadges from "../CareerDev/MeritBadges.jsx";
import { Helmet } from "react-helmet";

const CareerDev = () => {
  const guidanceRef = useRef(null);

  const scrollToGuidance = () => {
    if (guidanceRef.current) {
      guidanceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Career Dev | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>

      <div className="flex md:flex-row flex-col items-center justify-between py-24 md:py-28 px-5 md:px-28 bg-white">
        {/* Left Text Section */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-700">
            Maximize Your Career Growth
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mt-1">
            Take Control of Your Career with nuJOB.AI
          </h3>
          <p className="text-gray-600 mt-4">
            The job market moves fast—stay ahead with nuJOB.AI. We equip you with the tools to refine your skills, track progress, and stand out. Whether it's interview prep, career growth, or building employer trust, we help you take charge of your future.
          </p>
          <button
            onClick={scrollToGuidance}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
          >
            More Features <span>↗</span>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="max-w-md">
          <img
            src="/images/CareerDev.png"
            alt="Resume Enhancement"
            className="w-64 h-auto"
          />
        </div>
      </div>

      <TrackInterviews />
      <Monitor />

      {/* Attach ref here */}
      <div ref={guidanceRef}>
        <Guidance />
      </div>

      <Confidence />
      <MeritBadges />
    </>
  );
};

export default CareerDev;
