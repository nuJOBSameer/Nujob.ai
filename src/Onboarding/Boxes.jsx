import React from "react";

const Boxes = () => {
  return (
    <div className="text-center py-12 relative bg-gray-300">
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold ">Personalized Guidance</h3>
          <p className="text-gray-600 text-sm">
          Navigate your career journey with confidence through tailored insights and recommendations. nuJOB.AI’s AI-driven platform analyzes your skills, preferences, and career goals to deliver customized guidance at every step. From selecting the right opportunities to enhancing your professional growth.
          </p>
        </div>
        {/** Card 2 **/}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Real-Time Insights</h3>
          <p className="text-gray-600 text-sm">
          Stay ahead with actionable, AI-driven insights delivered instantly. nuJOB.AI provides real-time feedback on your progress, helping you identify strengths and areas for improvement. Monitor your performance, track milestones, and make informed decisions with data-driven recommendations designed to optimize your career growth and job readiness.
          </p>
        </div>
        {/** Card 3 **/}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Simplified Processes</h3>
          <p className="text-gray-600 text-sm">
          Streamline your journey with intuitive, AI-powered tools that make complex tasks effortless. nuJOB.AI automates and simplifies processes such as onboarding, skill assessments, and profile enhancement. With a user-friendly interface and step-by-step guidance, you can focus on achieving your goals without the hassle of managing tedious tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
