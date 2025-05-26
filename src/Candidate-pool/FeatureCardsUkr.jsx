import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Images (Make sure these exist in your project)
import SkillsList from "/images/Candidate1.png";
import MarketScoring from "/images/Candidate2.png";
import CandidatesMatching from "/images/Candidate3.png";
import AISkillsValidation from "/images/Candidate4.png";
import ProfilesBase from "/images/Candidate5.png";

const FeatureCardsUkr = () => {
  const features = [
    { title: "Список навичок", image: SkillsList },
    { title: "Оцінювання ринку", image: MarketScoring },
    { title: "Зіставлення кандидатів", image: CandidatesMatching },
    { title: "Перевірка навичок за допомогою ШІ", image: AISkillsValidation },
    { title: "База профілів", image: ProfilesBase },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10 px-4">
      {features.map((feature, index) => (
        <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
          {/* Background Image */}
          <img src={feature.image} alt={feature.title} className="w-full h-52 object-cover group-hover:brightness-110 transition duration-300" />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition duration-300"></div>

          {/* Text & Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center p-4">
            <h3 className="text-base font-semibold">{feature.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCardsUkr;
