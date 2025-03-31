import React from "react";
import SoftSkillsImage from "/images/OB.png"; // Ensure this image exists in your project folder
import StarIcon from "/images/Star.png"; // Ensure this image exists in your project folder

const SkillsValidationSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-10">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src={SoftSkillsImage}
          alt="Soft Skills"
          className="w-full h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-blue-800">
          Validate and Demonstrate Your Skills
        </h2>
        <p className="text-gray-700 mt-4">
          In today’s competitive job market, proving your expertise goes beyond 
          listing qualifications. nuJOB.AI empowers you to validate and showcase 
          your skills through innovative, AI-driven tools and assessments, designed 
          to give you an edge in your career. Our platform enables candidates to 
          demonstrate their readiness for real-world challenges, making it easier 
          for recruiters and employers to recognize your true potential.
        </p>

        {/* Skill Validation Section */}
        <div className="mt-6 flex items-start">
          <img src={StarIcon} alt="Star" className="w-5 h-5 mt-1" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Why Skill Validation Matters?
            </h3>
            <p className="text-gray-700 mt-2">
              As the demand for skilled professionals grows, employers are 
              increasingly focused on practical expertise. nuJOB.AI’s skill validation 
              framework ensures that your abilities are more than theoretical—they’re 
              proven in real-world scenarios. This not only enhances your credibility 
              but also builds trust with potential employers, giving you a significant 
              advantage over other candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsValidationSection;
