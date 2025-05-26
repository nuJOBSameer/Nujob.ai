import React, { useRef } from "react";
import OnboardingImage from "/images/Pool.png";
import AdvertiseSkills from "../Candidate-pool/AdvertiseSkills";
import Pool from "../Candidate-pool/Pool";
import SkillValidation from "../Candidate-pool/SkillValidation";
import { Helmet } from "react-helmet";
import FeatureCardsUkr from "../Candidate-pool/FeatureCardsUkr";
import KeyFeaturesUkr from "../Candidate-pool/KeyFeaturesUkr";
import MarketUkr from "../Candidate-pool/MarketUkr";
import PoolUkr from "../Candidate-pool/PoolUkr";
import SkillValidationUkr from "../Candidate-pool/SkillValidationUkr";
import AdvertiseSkillsUkr from "../Candidate-pool/AdvertiseSkillsUkr";

const CandidatePoolUkr = () => {
  const keyFeaturesRef = useRef(null);

  const scrollToKeyFeatures = () => {
    if (keyFeaturesRef.current) {
      keyFeaturesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
  <title>nuJOB.AI | Build Your Talent Pool</title>
  <meta name="description" content="Access a curated pool of candidates, leveraging insights to make informed hiring decisions." />
</Helmet>


      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center pt-24 px-5 md:pt-10 gap-8">
        <div className="md:w-1/2 ">
          <h2 className="text-4xl font-bold text-blue-800">
           Створіть високоефективну базу кандидатів з nuJOB.AI
          </h2>
          <p className="text-gray-700 mt-4">
            Пошук правильного таланту не повинен бути грою наосліп. nuJOB.AI надає рекрутерам та менеджерам із найму інструменти на базі ШІ для точного та швидкого виявлення, залучення й відстеження найкращих кандидатів…
          </p>
        </div>

        <div className="md:w-1/2">
          <img src={OnboardingImage} alt="Onboarding" className="w-full h-auto" />
        </div>
      </div>

      <FeatureCardsUkr />
      <AdvertiseSkillsUkr />
      <MarketUkr onExploreClick={scrollToKeyFeatures} />
      <div ref={keyFeaturesRef}>
        <KeyFeaturesUkr />
      </div>
      <PoolUkr />
      <SkillValidationUkr />
    </>
  );
};

export default CandidatePoolUkr;
