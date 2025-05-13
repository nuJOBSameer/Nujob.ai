import React, { useRef } from "react";
import OnboardingImage from "/images/Pool.png";
import FeatureCards from "../Candidate-pool/FeatureCards";
import AdvertiseSkills from "../Candidate-pool/AdvertiseSkills";
import Market from "../Candidate-pool/Market";
import KeyFeatures from "../Candidate-pool/KeyFeatures";
import Pool from "../Candidate-pool/Pool";
import SkillValidation from "../Candidate-pool/SkillValidation";
import { Helmet } from "react-helmet";

const CandidatePool = () => {
  const keyFeaturesRef = useRef(null);

  const scrollToKeyFeatures = () => {
    if (keyFeaturesRef.current) {
      keyFeaturesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Candidate Pool | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>

      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center pt-24 px-5 md:pt-10 gap-8">
        <div className="md:w-1/2 ">
          <h2 className="text-4xl font-bold text-blue-800">
            Build a High-Impact Candidate Pool with nuJOB.AI
          </h2>
          <p className="text-gray-700 mt-4">
            Finding the right talent shouldn’t be a guessing game. nuJOB.AI gives hiring managers and recruiters AI-powered tools to identify, engage, and track top candidates with precision and speed...
          </p>
        </div>

        <div className="md:w-1/2">
          <img src={OnboardingImage} alt="Onboarding" className="w-full h-auto" />
        </div>
      </div>

      <FeatureCards />
      <AdvertiseSkills />
      <Market onExploreClick={scrollToKeyFeatures} />
      <div ref={keyFeaturesRef}>
        <KeyFeatures />
      </div>
      <Pool />
      <SkillValidation />
    </>
  );
};

export default CandidatePool;
