import React from "react";

const AlignSkills = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Real-Time Skill Analysis",
      description:
        "The AI evaluates your skills against the latest market trends, providing a score that reflects your current job-readiness and competitiveness."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Technology Alignment",
      description:
        "The scoring system factors in your experience with trending technologies and suggests areas for improvement to increase your score."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Skill Enhancement",
      description:
        "Receive targeted recommendations for courses, blogs, and certifications that can boost your market readiness and help you stay in demand."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Dynamic Scoring Updates",
      description:
        "As you acquire new skills or certifications, the NuJob AI Linked Score adjusts in real-time to reflect your updated job-readiness level."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold">Align Your Skills with Market Trends</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Assess your skills, align with market trends, and ensure you're always in demand with nuJOB.AI's dynamic scoring tool.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg md:text-left">
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlignSkills;
