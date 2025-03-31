import React, { useState } from "react";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("upleveling");

  return (
    <div className="flex justify-center py-12 md:px-6 bg-[#F8F9FB]">
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
            <h3 className="text-blue-600 font-semibold">AI-Based Gap Analysis</h3>
            <p className="text-gray-600 mt-2">
            Understand where you stand. Our AI evaluates your skills against market demands, identifying areas for improvement and helping you focus on what matters.
            </p>
          </div>

          <div className="border-b py-4 text-center">
            <h3 className="text-blue-600 font-semibold">Curated Learning Resources</h3>
            <p className="text-gray-600 mt-2">
            Access handpicked courses, industry insights, and certifications that align with evolving job trends—because staying relevant is a strategy, not a challenge.
            </p>
          </div>

          <div className="pt-4 text-center">
            <h3 className="text-blue-600 font-semibold">Progress Tracking</h3>
            <p className="text-gray-600 mt-2">
            Measure your growth with real-time insights. Identify milestones, refine your approach, and ensure every step moves you forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
