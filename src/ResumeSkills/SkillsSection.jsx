import React, { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("upleveling");

  return (
    <div className="flex justify-center py-12 px-6 bg-[#F8F9FB]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Skills Upleveling & Validation Section
        </h2>

        {/** Tab Switcher **/}
        <div className="flex justify-center mt-6">
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "upleveling"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("upleveling")}
          >
            SKILLS UPLEVELING
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ml-2 ${
              activeTab === "validation"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("validation")}
          >
            SKILLS VALIDATION
          </button>
        </div>

        {/** Content Section **/}
        <div className="mt-6 text-left">
          <div className="border-b pb-4 text-center">
            <h3 className="text-blue-600 font-semibold">1. AI-Based Gap Analysis</h3>
            <p className="text-gray-600 mt-2">
              Identify the skills you need to succeed in your desired role. Our AI-powered tools analyze your
              existing abilities, compare them with job requirements, and pinpoint areas for improvement. Gain a 
              clear roadmap to close the gaps and achieve your career goals.
            </p>
          </div>

          <div className="border-b py-4 text-center">
            <h3 className="text-blue-600 font-semibold">2. Curated Learning Materials</h3>
            <p className="text-gray-600 mt-2">
              Access personalized learning resources tailored to your skill gaps. From industry-relevant articles 
              and tutorials to online courses and certifications, our platform connects you to the most effective 
              tools for continuous professional development.
            </p>
          </div>

          <div className="pt-4 text-center">
            <h3 className="text-blue-600 font-semibold">3. Progress Tracking</h3>
            <p className="text-gray-600 mt-2">
              Stay motivated and monitor your growth with real-time progress tracking. Our tools help you visualize 
              milestones, measure improvements, and celebrate achievements as you work toward mastering new skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
