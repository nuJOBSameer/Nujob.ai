import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CheckIcon from "/images/Check.png"; // Ensure this image exists in your project folder

const KeyFeatures = () => {
  return (
    <div className="max-w-6xl bg-gray-200 mx-auto flex flex-col md:flex-row justify-between items-center gap-10 py-12 px-14">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
        <p className="text-gray-700 mt-4">
          nuJOB.AI empowers hiring managers and recruiters to efficiently build 
          and manage a high-quality candidate pool tailored to organizational needs. 
          Our platform streamlines the hiring process by offering data-driven tools 
          that enhance decision-making, reduce time-to-hire, and ensure the best 
          candidate fit for every role.
        </p>
        <Link to="/pricing">
        <button className="mt-6 px-5 py-2 bg-black text-white rounded-full flex items-center gap-2">
          Explore More <img src="/images/Arrow.png" alt="" />
        </button>
        </Link>
      </div>

      {/* Right Section - Features Grid */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { title: "Hands-On Learning", desc: "Practice programming, networking, industry-specific tasks." },
          { title: "Instant Feedback", desc: "Refine your abilities with actionable insights." },
          { title: "Technical Mastery", desc: "Sharpen real-world skills in a safe environment." },
          { title: "Profile Credibility", desc: "Boost your attractiveness to recruiters." },
        ].map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={CheckIcon} alt="Check" className="w-5 h-5 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
