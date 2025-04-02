import React from "react";
import OnboardingImage from "/images/Pool.png"; // Ensure this image exists in your project folder
import FeatureCards from "../Candidate-pool/FeatureCards";
import AdvertiseSkills from "../Candidate-pool/AdvertiseSkills";
import Market from "../Candidate-pool/Market";
import KeyFeatures from "../Candidate-pool/KeyFeatures";
import Pool from "../Candidate-pool/Pool";
import SkillValidation from "../Candidate-pool/SkillValidation";

const CandidatePool = () => {
  return (
    <>    
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center pt-24 px-5 md:pt-10 gap-8 ">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-blue-800">
        Build a High-Impact Candidate Pool with nuJOB.AI <br />
        </h2>
        <p className="text-gray-700 mt-4">
        Finding the right talent shouldn’t be a guessing game. nuJOB.AI gives hiring managers and recruiters AI-powered tools to identify, engage, and track top candidates with precision and speed. Reduce manual effort, cut hiring time, and ensure the best fit for every role—all while making data-driven decisions that set your organization up for success.
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
    <FeatureCards/>
    <AdvertiseSkills/>
    <Market/>
    <KeyFeatures/>
    <Pool/>
    <SkillValidation/>
    </>

  );
};

export default CandidatePool;
