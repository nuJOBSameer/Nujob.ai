import React from "react";

const ResumeBuilder = () => {
  return (
    <div className="flex justify-center py-12 px-6">
      <div className="bg-pink-50 py-12 px-6 text-center md:w-[80%] rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900">Resume Builder & Editing</h2>

        <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-8">
          {/* Card 1 */}
          <div className="md:w-96 md:h-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img src="/images/Resume1.png" alt="Resume Builder" className="w-12 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mt-2">Resume Builder</h3>
            <p className="text-gray-600 mt-1">
              A well-structured, ATS-friendly resume in minutes. No clutter, just impact
            </p>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Professionally designed templates tailored for every industry.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Step-by-step guidance to highlight your strengths.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Real-time previews to perfect every detail before submission.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="md:w-96 md:h-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img src="/images/Resume2.png" alt="Resume Editor" className="w-12 h-12 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900">Resume Editor</h3>
            <p className="text-gray-600 mt-2">
              Refine, restructure, and position yourself for the right opportunities.
            </p>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                AI-powered suggestions for phrasing.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Keyword optimization to align with recruiter expectations.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Clean, professional formatting designed for readability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
