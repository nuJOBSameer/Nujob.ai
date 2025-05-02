import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="flex justify-center py-12 px-6">
      <div className="bg-blue-50 py-12 px-6 text-center md:w-[80%] rounded-lg">

        <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-8">
          {/* Card 1 */}
          <div className="md:w-96 md:h-80 w-96 p-6 rounded-lg items-center bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-900">Bridge Education and Employment</h3>
            <h2 className="text-sm">Turn what you learn into what you can earn.</h2>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Convert your classes into real-world skills
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Build experience with simulated projects
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Find internships that match your goals
              </li>
            </ul>
            <button className=" mt-3 px-4 py-1 bg-black flex text-white font-medium rounded-lg hover:bg-gray-800 transition">
                    <Link to="#"> Map My Journey </Link>
            </button>
          </div>

          {/* Card 2 */}
          <div className="md:w-96 md:h-80  w-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-900">Student Advantage Tools</h3>
            <h2 className="text-sm">Build your digital brand and let your work speak for itself.</h2>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Digital profile builder: Your story, your way
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Video showcase: Show recruiters who you are
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Star" className="w-4 h-4 mr-2" />
                Certifications display: Put your wins front and center
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
