import React from "react";
import ResumeBuilder from "../ResumeSkills/ResumeBuilder.jsx";
import ResumeVersion from "../ResumeSkills/ResumeVersion.jsx";
import SkillsSection from "../ResumeSkills/SkillsSection.jsx";

const ResumeSkills = () => {
  return (
    <>
    <div className="flex items-center justify-between py-12 px-16 bg-white">
      {/** Left Text Section **/}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-purple-700">
          Resume & Skills Enhancement
        </h2>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">
          Optimize Your Career Trajectory with nuJOB.AI
        </h3>
        <p className="text-gray-600 mt-4">
          In today’s fast-paced job market, standing out requires more than just a 
          traditional resume. nuJOB.AI empowers you to craft a winning profile that evolves 
          with the needs of employers. Our suite of advanced tools enables you to build, 
          edit, and personalize resumes that capture attention. With AI-driven enhancements, 
          you’ll transform your job applications into powerful reflections of your unique value 
          and expertise. As you upskill and validate your skills, you’ll ensure alignment with 
          market trends, giving you a competitive edge that propels your career forward.
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
