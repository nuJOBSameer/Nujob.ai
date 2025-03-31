import React from "react";

const Boxes = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "AI Interview Analysis",
      description:
        "Evaluates responses, tone, and engagement."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Resume Consistency Check",
      description:
        "Flags experience mismatches."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Trust & Confidence Scores",
      description:
        "Instant credibility assessment."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Detailed Hiring Reports",
      description:
        "Clear insights, smarter decisions."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
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

export default Boxes;
