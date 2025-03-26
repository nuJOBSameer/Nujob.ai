import React from "react";

const Reasons = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: " Personalized Guidance",
      description:
        "Tailored simulations and insights for specific job roles."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Enhanced Accuracy",
      description:
        "Resumes and assessments truly reflect your abilities and potential."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Real-Time Insights",
      description:
        "AI-driven recommendations and performance analysis to keep you on track."
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold">Align Your Skills with Market Trends</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Assess your skills, align with market trends, and ensure you're always in demand with nuJOB.AI's dynamic scoring tool.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-centre">
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
