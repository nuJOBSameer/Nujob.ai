import React from "react";

const Skills = () => {
  return (
    <div className="py-20 px-5 md:px-16 bg-gradient-to-b from-[#FFF6FC] to-white text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">Validate Your Skills</h2>
      <p className="text-gray-600 text-base mb-10">Show what you’re made of – no fluff.</p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 max-w-xs bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg duration-300">
          <img
            src="/images/resume-builder.png" // Replace with your image
            alt="Resume Builder"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-[#1A1A1A] font-semibold text-lg mb-1">Resume Builder/ Navigator</h3>
            <p className="text-gray-600 text-sm">Build Your Dream Resume, No Experience</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 max-w-xs bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg duration-300">
          <img
            src="/images/mock-interview.png" // Replace with your image
            alt="Mock Interview Coach"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-[#1A1A1A] font-semibold text-lg mb-1">Mock interview coach</h3>
            <p className="text-gray-600 text-sm">Master interview like a Pro</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 max-w-xs bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg duration-300">
          <img
            src="/images/skill-validation.png" // Replace with your image
            alt="Skill Validation"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-[#1A1A1A] font-semibold text-lg mb-1">Skill Validation</h3>
            <p className="text-gray-600 text-sm">Prove your abilities with confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
