import React from "react";

const Guidance = () => {

  return (
    <div className="flex justify-center py-12 px-6 bg-[#F8F9FB]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] text-center">
        <img src="/images/Guidance.png" alt="Guidance" className="mx-auto h-36 w-36"/>
        <h2 className="text-2xl font-bold text-gray-900">
        Personalized Career Guidance
        </h2>

        {/** Content Section **/}
        <div className="mt-6 text-left">
          <div className="border-b pb-4 text-center">
            <h3 className="text-blue-600 font-semibold">Tailored Insights to Align with Your Career Aspirations</h3>
            <p className="text-gray-600 mt-2">
            nuJOB.AI provides personalized guidance to help you achieve your career goals. By analyzing your skills, experience, and industry preferences, we offer insights that align with your unique aspirations. This ensures you focus on opportunities that best match your potential and long-term objectives.
            </p>
          </div>

          <div className="border-b py-4 text-center">
            <h3 className="text-blue-600 font-semibold">Step-by-Step Support for Industry</h3>
            <p className="text-gray-600 mt-2">
            Transitions or Role Advancements Whether you're looking to transition to a new industry or advance within your current field, nuJOB.AI is here to guide you. Our platform provides a clear roadmap, with actionable steps and targeted resources to help you make informed decisions and confidently navigate your career journey.
            </p>
          </div>

          <div className="pt-4 text-center">
            <h3 className="text-blue-600 font-semibold">Insights into Emerging Trends to Keep You Competitive</h3>
            <p className="text-gray-600 mt-2">
            Stay ahead in an ever-changing job market with insights into the latest industry trends. nuJOB.AI keeps you informed about in-demand skills, emerging roles, and technological advancements, ensuring you remain competitive and ready to seize future opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
