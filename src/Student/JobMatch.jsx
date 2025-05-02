import React from 'react';
import { Link } from 'react-router-dom';

const JobMatch = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between px-8 mb-12 md:px-16 py-10 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/Photo.png')" }} // background image from /public/images
    >
      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0  p-6 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-bold my-5">
          Find Your Perfect <br />
          <span className="text-black">Job Match</span>
        </h2>

        <h1 className='text-xl'>No more endless scrolling.</h1>
        <h1  className='text-xl'>Get matched with roles that fit your vibe and your skills.</h1>

        <ul className="mt-6">
          {[
            "AI-driven resume insights that make you stand out",
            "Role fit scores and skill-gap tips, personalized for you",
            "Career path recommendations that actually make sense",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 py-3 border-b border-gray-300"
            >
              <span className="text-indigo-600">
                <img src="/images/down.png" alt="arrow" className="h-5" />
              </span>
              <p className="text-gray-700 text-lg">{item}</p>
            </li>
          ))}
        </ul>

        <button className="mt-6 px-6 py-3 bg-black flex items-center text-white font-medium rounded-lg hover:bg-gray-800 transition">
          <Link to="#">Optimize My Resume</Link>
          <span>
            <img src="/images/Arrow.png" alt="" className="ml-2 h-4" />
          </span>
        </button>
      </div>

      {/* Left Section */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
        <img
          src="/images/offers.jpg"
          alt="Business Recruitment"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default JobMatch;
