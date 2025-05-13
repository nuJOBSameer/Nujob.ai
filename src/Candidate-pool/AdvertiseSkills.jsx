import React from "react";
import Pool1 from "/images/Pool1.png";
import Star from "/images/Star.png";

const AdvertiseSkills = () => {
  return (
    // 👇 Full-width background container
    <div className="w-full bg-[#F7F5F5] py-10 px-4">
      {/* 👇 Centered content container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Stacked Images */}
        <div className="relative md:flex flex-row items-center justify-center w-full md:w-1/2 hidden">
          <img
            src={Pool1}
            alt="Pool 1"
            className="absolute w-[400px] h-[400px]"
          />
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Advertise Your Skills & Discover Top Talent with{" "}
            <span className="text-blue-600">nuJOB.AI</span>
          </h2>

          <h3 className="mt-6 text-lg font-semibold">For Job Seekers</h3>
          <ul className="mt-2 space-y-3 text-gray-700">
            {[
              {
                text: "Showcase Your Expertise – Build a standout profile with AI-driven insights that highlight your strengths.",
              },
              {
                text: "Attract the Right Roles – Get matched with opportunities that align with your skills and career goals.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img src={Star} alt="Star" className="w-4 h-4 mr-2 mt-1" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">For Job Recruiters</h3>
          <ul className="mt-2 space-y-3 text-gray-700">
            {[
              {
                text: "Find Top Talent Faster – Use advanced AI search to connect with the right candidates effortlessly.",
              },
              {
                text: "Streamline Your Process – AI-driven recommendations help you make smart hiring decisions with zero guesswork.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img src={Star} alt="Star" className="w-4 h-4 mr-2 mt-1" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700">
            nuJOB.AI is your ultimate platform to showcase your expertise and connect with top employers while also enabling you to find exceptional talent for your recruitment needs.
            Whether you're a professional looking to highlight your skills or a recruiter seeking skilled candidates, nuJOB.AI simplifies the process with AI-powered precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseSkills;
