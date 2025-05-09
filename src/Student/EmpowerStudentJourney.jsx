import React from "react";
import { Link } from "react-router-dom";

const EmpowerStudentJourney = () => {
  const cards = [
    {
      title: "Bridge Education and Employment",
      subtitle: "Turn what you can learn into what you can earn.",
      items: [
        "Convert your class into real-world skills.",
        "Build experience with simulated project.",
        "Find internship that match your goal.",
      ],
      img: "/images/girl.png",
      btnText: "Map My Journey",
    },
    {
      title: "Student Advantage Tool",
      subtitle:
        "Build your digital brand and let your work speak itself.",
      items: [
        "Digital profile builder: your story, yourway",
        "Video showcase : Show recruiters who you are",
        "Certification display : Put your wins front and center",
      ],
      img: "/images/boy.png",
      btnText: "Build My Brand →",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f4ff] px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Empower Your Student Journey
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Make your learning count beyond the classroom
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl p-6 w-full md:w-[420px] relative pb-16 min-h-[450px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-5">{card.subtitle}</p>

              <ul className="space-y-3 mb-4">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img
                      src="/images/resume-insights.png"
                      alt="bullet"
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={card.img}
              alt="student"
              className="w-64 h-auto object-contain absolute bottom-0 right-1"
            />

            <button className="absolute bottom-[-20px] left-28 transform -translate-x-1/2 bg-[#5243C2] hover:bg-[#3f31a2] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition">
              <Link to="/pricing">{card.btnText}</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpowerStudentJourney;
