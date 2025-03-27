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
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 ">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-blue-800">
        Build a Robust Candidate Pool with nuJOB.AI <br />
        </h2>
        <p className="text-gray-700 mt-4">
        nuJOB.AI empowers hiring managers and recruiters to efficiently build and manage a high-quality candidate pool tailored to organizational needs. With AI-driven insights, you can quickly identify, engage, and track top talent while minimizing manual effort. Our platform streamlines the hiring process by offering data-driven tools that enhance decision-making, reduce time-to-hire, and ensure the best candidate fit for every role.
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
