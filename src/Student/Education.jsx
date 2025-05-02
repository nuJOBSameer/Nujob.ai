import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="flex justify-center py-12 px-6">
      <div className="bg-blue-50 py-12 px-6 text-center md:w-[80%] rounded-lg">

        <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-8">
          {/* Card 1 */}
          <div className="md:w-96 md:h-56 w-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-900">Education - Employment Bridge</h3>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Converts school courses to marketable skills
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Experience builder (simulated projects)
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Internship finder engine
              </li>
            </ul>
            <button className=" mt-3 px-4 py-1 bg-black flex text-white font-medium rounded-lg hover:bg-gray-800 transition">
                    <Link to="#"> Map My Journey </Link>
            </button>
          </div>

          {/* Card 2 */}
          <div className="md:w-96 md:h-56 w-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-900">Student Advantage Tools</h3>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Digital Profile Builder
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Video Showcase.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Certifications Display
              </li>
            </ul>
            <button className=" mt-3 px-4 py-1 bg-black flex text-white font-medium rounded-lg hover:bg-gray-800 transition">
                    <Link to="#"> Build My Brand </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
