import React from "react";
import ResumeBuilder from "../ResumeSkills/ResumeBuilder.jsx";
import ResumeVersion from "../ResumeSkills/ResumeVersion.jsx";
import SkillsSection from "../ResumeSkills/SkillsSection.jsx";
import { Helmet } from "react-helmet";

const ResumeSkills = () => {
  return (
    <>
    <Helmet>
        <title>Resume Skills | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
    <div className="flex md:flex-row flex-col items-center justify-between px-5 py-24 md:py-14 md:px-16 bg-white">
      {/** Left Text Section **/}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-purple-700">
        Shape Your Career. Stay Ahead.
        </h2>
        <p className="text-gray-600 mt-4">
        A resume isn’t just a document—it’s a reflection of your expertise. In a market that moves fast, nuJOB.AI helps you craft, refine, and personalize resumes that get noticed. Whether you’re applying for a new role, upskilling, or optimizing your professional brand, our tools ensure you stay competitive.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2">
          Explore Features <span>↗</span>
        </button>
      </div>

      {/** Right Image Section **/}
      <div className="max-w-md">
        <img 
          src="/images/Resume.png" 
          alt="Resume Enhancement" 
          className="w-full h-auto"
        />
      </div>
    </div>
    <ResumeBuilder/>
    <ResumeVersion/>
    <SkillsSection/>
    </>
  );
};

export default ResumeSkills;
