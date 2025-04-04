import React from "react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Real-Time Skill Assessment",
      description: "Get a job-readiness score based on market trends",
    },
    {
      title: "Technology Alignment",
      description:
        "Identify areas to improve with insights on trending tools and technologies.",
    },
    {
      title: "Skill Enhancement Guidance",
      description:
        "Receive tailored recommendations for certifications, courses, and labs.",
    },
    {
      title: "Dynamic Scoring Updates",
      description:
        "Reflects your growth as you gain new skills or credentials.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-[#F9F5FF] to-[#F5F3FF] shadow-lg rounded-lg p-6 text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="text-orange-500 font-bold mr-1">*AI</span>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
