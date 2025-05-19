import React from "react";
import OnboardingImage from "/images/Onboarding.png"; // Ensure this image exists in your project folder
import Boxes from "../Onboarding/Boxes";
import SkillsValidationSection from "../Onboarding/SkillsValidationSection";
import Features from "../Onboarding/Features";
import KeyFeatures from "../Onboarding/KeyFeatures";
import Labs from "../Onboarding/Labs";
import { Helmet } from "react-helmet";

const OnBoard = () => {
  return (
    <>
    <Helmet>
  <title>nuJOB.AI | Effective Onboarding</title>
  <meta name="description" content="Accelerate new hires' integration with tools that validate skills and provide practical training for a smooth transition." />
</Helmet>
   
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-24">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-[#3E57DA]">
          Empowering Success through <br />
          <span className="text-black">Onboarding & Skills</span>
        </h2>
        <p className="text-gray-700 mt-4">
          Accelerate your journey to success with AI-powered tools that simplify
          onboarding, validate skills, and provide hands-on practice. nuJOB.AI
          ensures a smooth transition into new roles while helping candidates
          and teams unlock their full potential through personalized guidance
          and real-world skill development.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-6">
          Streamline Candidate Onboarding with AI-Powered Precision
        </h3>
        <p className="text-gray-700 mt-2">
          nuJOB.AI simplifies the onboarding process, ensuring candidates
          transition smoothly into their roles with AI-driven tools for task
          management, training, and seamless integration.
        </p>
      </div>

      {/* Right Image with Underline */}
      <div className="md:w-1/2">
        <img
          src={OnboardingImage}
          alt="Onboarding"
          className="w-full h-auto"
        />
      </div>
    </div>
    <Boxes/>
    <SkillsValidationSection/>
    <Features/>
    <KeyFeatures/>
    <Labs/>
    </>

  );
};

export default OnBoard;
