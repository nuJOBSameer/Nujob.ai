import React, { useRef } from "react";
import OnboardingImage from "/images/Pool.png";
import FeatureCards from "../Candidate-pool/FeatureCards";
import AdvertiseSkills from "../Candidate-pool/AdvertiseSkills";
import Market from "../Candidate-pool/Market";
import KeyFeatures from "../Candidate-pool/KeyFeatures";
import Pool from "../Candidate-pool/Pool";
import SkillValidation from "../Candidate-pool/SkillValidation";
import { Helmet } from "react-helmet";
import FeatureCardsSp from "../Candidate-pool/FeatureCardsSp";
import AdvertiseSkillsSp from "../Candidate-pool/AdvertiseSkillsSp";
import MarketSp from "../Candidate-pool/MarketSp";
import KeyFeaturesSp from "../Candidate-pool/KeyFeaturesSp";
import PoolSp from "../Candidate-pool/PoolSp";
import SkillValidationSp from "../Candidate-pool/SkillValidationSp";

const CandidatePoolSp = () => {
  const keyFeaturesRef = useRef(null);

  const scrollToKeyFeatures = () => {
    if (keyFeaturesRef.current) {
      keyFeaturesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Construye tu Pool de Talento</title>
        <meta
          name="description"
          content="Accede a un grupo curado de candidatos, aprovechando los conocimientos para tomar decisiones de contratación informadas."
        />
      </Helmet>

      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center pt-24 px-5 md:pt-10 gap-8">
        <div className="md:w-1/2 ">
          <h2 className="text-4xl font-bold text-blue-800">
            Construye un Pool de Candidatos de Alto Impacto con nuJOB.AI
          </h2>
          <p className="text-gray-700 mt-4">
            Encontrar el talento adecuado no debería ser un juego de adivinanzas. nuJOB.AI brinda a los gerentes de contratación y reclutadores herramientas impulsadas por IA para identificar, interactuar y rastrear a los mejores candidatos con precisión y rapidez...
          </p>
        </div>

        <div className="md:w-1/2">
          <img src={OnboardingImage} alt="Incorporación" className="w-full h-auto" />
        </div>
      </div>

      <FeatureCardsSp />
      <AdvertiseSkillsSp />
      <MarketSp onExploreClick={scrollToKeyFeatures} />
      <div ref={keyFeaturesRef}>
        <KeyFeaturesSp />
      </div>
      <PoolSp />
      <SkillValidationSp />
    </>
  );
};

export default CandidatePoolSp;
