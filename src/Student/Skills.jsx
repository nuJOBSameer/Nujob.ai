import React from "react";

const Skills = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Real-Time Skill Analysis",
      description:
        "Practice, score, repeat"
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Hands-on Skill Exams",
      description:
        "Prove it with real tasks"
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Resume Builder/Navigator",
      description:
        "Let nuJOB.AI build your resume"
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold mb-2">Validate Your Skills</h2>
      <h1 className="text-xl mb-10">Show what you’re made of-no fluff.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg md:text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 my-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-lg mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
