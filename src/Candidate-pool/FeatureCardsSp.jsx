import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Imágenes (asegúrate de que existan en tu proyecto)
import SkillsList from "/images/Candidate1.png";
import MarketScoring from "/images/Candidate2.png";
import CandidatesMatching from "/images/Candidate3.png";
import AISkillsValidation from "/images/Candidate4.png";
import ProfilesBase from "/images/Candidate5.png";

const FeatureCardsSp = () => {
  const features = [
    { title: "Lista de Habilidades", image: SkillsList },
    { title: "Puntuación del Mercado", image: MarketScoring },
    { title: "Coincidencia de Candidatos", image: CandidatesMatching },
    { title: "Validación de Habilidades con IA", image: AISkillsValidation },
    { title: "Base de Perfiles", image: ProfilesBase },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10 px-4">
      {features.map((feature, index) => (
        <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
          {/* Imagen de fondo */}
          <img src={feature.image} alt={feature.title} className="w-full h-52 object-cover group-hover:brightness-110 transition duration-300" />
          
          {/* Capa oscura */}
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition duration-300"></div>

          {/* Texto y botón */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center p-4">
            <h3 className="text-base font-semibold">{feature.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCardsSp;
