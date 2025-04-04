import React from "react";

const Business = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Left Content */}
      <div className="w-full md:w-2/3 space-y-4 mt-9">
        <h2 className="text-4xl font-bold text-gray-900">Business Model</h2>
        <p className="text-gray-600 text-sm">
        nuJOB.AI is built for the future of hiring. We don’t just match candidates to jobs—we validate skills, optimize career paths, and streamline the entire recruitment process. Our AI-driven approach replaces outdated resume filters with hands-on assessments, immersive technical training, and real-time insights.F. Our mission is to make hiring fair, efficient, and deeply personalized.
For job seekers, it’s about proving their worth beyond a piece of paper. For companies, it’s about hiring with confidence. We’re not just filling roles—we’re shaping careers and transforming how talent meets demand.
Whether you're leveling up your career or building a powerhouse team, we help you make bold, data-driven moves. Let’s ditch outdated hiring methods and redefine what’s possible.

        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
        <img 
          src="/images/Business.png" 
          alt="AI Driven Interviews" 
          className="relative z-10 w-72 rounded-lg"
        />
      </div>
    </div>
    </>
  );
};

export default Business;
