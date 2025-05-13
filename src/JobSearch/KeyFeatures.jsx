import React from "react";

const KeyFeatures = () => {
  return (
    <div className="text-center py-12 relative">
      <h2 className="text-2xl font-bold">Key Features</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Skill Gap Insights</h3>
          <p className="text-gray-600 text-sm">
            Identify critical skill gaps within your team using AI-driven analysis, empowering you to focus on areas that need improvement for enhanced productivity.
          </p>
        </div>

        {/** Card 2 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Tailored Learning</h3>
          <p className="text-gray-600 text-sm">
            Get personalized training recommendations and curated learning journeys for each team member, aligning their growth with organizational goals.
          </p>
        </div>

        {/** Card 3 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Actionable Metrics</h3>
          <p className="text-gray-600 text-sm">
            Leverage real-time performance metrics and AI-generated insights to make data-backed decisions that drive your team's success.
          </p>
        </div>
      </div>

      {/** Line after the boxes **/}
      <div className="w-[1030px] hidden md:flex border-t border-gray-300 mt-8 ml-8"></div>
    </div>
  );
};

export default KeyFeatures;
