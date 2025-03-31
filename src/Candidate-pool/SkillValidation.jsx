import React from "react";
import { FaUserCheck, FaClock, FaBriefcase } from "react-icons/fa";

const SkillValidation = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-between bg-white max-w-6xl mx-auto py-14 p-6">
      {/* Left Side */}
      <div className="w-full md:w-1/3 space-y-6 pr-6">
        <div className="flex items-start space-x-4 md:mt-0 mt-6">
          <FaUserCheck className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Personalized Guidance
            </h3>
            <p className="text-gray-600 text-sm">
              Tailored advice for your career growth.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaClock className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Real-Time Insights
            </h3>
            <p className="text-gray-600 text-sm">
              AI-powered recommendations keep your profile relevant.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaBriefcase className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Simplified Job Search
            </h3>
            <p className="text-gray-600 text-sm">
              Find the best job matches based on your skills and preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 pl-6">
        <h2 className="text-2xl font-bold text-gray-900">
          AI-Based Skill Validation Service
        </h2>
        <p className="text-gray-600 text-base mt-4">
          nuJOB.AI empowers you to validate your expertise through AI-driven
          live interviews and practical exams that reflect real-world
          challenges. By showcasing verified skills and authentic abilities,
          your profile becomes more trustworthy and competitive. Build
          confidence, earn employer trust, and secure roles that truly match
          your potential with nuJOB.AI.
        </p>
        <p className="text-gray-600 text-base mt-4">
          nuJOB.AI leverages AI-driven insights to highlight your skills,
          experience, and personal brand, ensuring your profile attracts the
          right opportunities and employers. Whether starting fresh or enhancing
          an existing profile, nuJOB.AI helps you stand out in a competitive job
          market.
        </p>
      </div>
    </div>
  );
};

export default SkillValidation;
