import React from "react";

const JobMatch = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-20 bg-white">
      
      {/* Left Text Content */}
      <div className="md:w-1/2 w-full text-left">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug text-[#1A1A1A]">
          Find Your Perfect <br />
          <span className="text-[#1A1A1A]">Job Match</span>
        </h2>
        <p className="text-gray-600 text-base mt-4 md:mt-6 max-w-lg">
          No more endless scrolling. Get matched with roles that fit your vibe and your skills.
        </p>

        <div className="mt-8 space-y-4">
          {/* Feature 1 */}
          <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <img src="/images/resume-insights.png" alt="Resume Insights" className="w-6 h-6 mt-1 mr-3" />
            <div>
              <p className="font-semibold">AI-driven resume insights</p>
              <p className="text-sm text-gray-600">that make you stand out</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <img src="/images/role-fit.png" alt="Role Fit" className="w-6 h-6 mt-1 mr-3" />
            <div>
              <p className="font-semibold">Role fit scores</p>
              <p className="text-sm text-gray-600">and skill-gap tips, personalized for you</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <img src="/images/career-path.png" alt="Career Path" className="w-6 h-6 mt-1 mr-3" />
            <div>
              <p className="font-semibold">Career path recommendations</p>
              <p className="text-sm text-gray-600">that actually make sense</p>
            </div>
          </div>
        </div>

        {/* Button - Left aligned on all screens */}
        <div className="flex justify-start">
          <button className="mt-10 bg-[#5243C2] hover:bg-[#3732b6] text-white px-6 py-3 rounded-full shadow-md transition">
            Optimize My Resume →
          </button>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="md:w-1/2 w-full relative mt-10 md:mt-0">
        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/images/jobmatch-people.png"
            alt="Team Collaboration"
            className="w-full h-auto"
          />
          
          {/* Top Left Badge */}
          <div className="absolute top-3 left-3 bg-white shadow px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
            <img src="/images/ball.png" alt="dot" className="w-2 h-2" /> 98% Match Rate
          </div>

          {/* Bottom Right Badge */}
          <div className="absolute bottom-7 right-3 bg-white shadow px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
            <img src="/images/star1.png" alt="star" className="w-4 h-4" />
            88% Match Rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatch;
