import React from "react";

const Boxes = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "AI Interview Observation",
      description:
        "The AI analyzes responses, body language, and tone during interviews to detect inconsistencies or unusual patterns that could indicate dishonesty."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Resume Consistency Analysis",
      description:
        "The AI scans resumes to identify inconsistent use of technology, job titles, or experience, cross-referencing with a database of flagged companies."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Trust Score & Confidence Score",
      description:
        "Candidates receive a Trust Score and a Confidence Score based on perceived honesty, confidence, and overall interview performance."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Detailed Recruiter Reports",
      description:
        "Recruiters receive a textual summary of observations, including specific behaviors, language patterns, and discrepancies, helping them make informed hiring decisions."
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
