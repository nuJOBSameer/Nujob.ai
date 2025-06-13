import React from "react";
import { FaUserCheck, FaClock, FaBriefcase } from "react-icons/fa";

const SkillValidationSp = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-between bg-white max-w-6xl mx-auto py-14 p-6">
      {/* Lado Izquierdo */}
      <div className="w-full md:w-1/3 space-y-6 pr-6">
        <div className="flex items-start space-x-4 md:mt-0 mt-6">
          <FaUserCheck className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Orientación Personalizada
            </h3>
            <p className="text-gray-600 text-sm">
              Consejos adaptados para tu crecimiento profesional.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaClock className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Información en Tiempo Real
            </h3>
            <p className="text-gray-600 text-sm">
              Recomendaciones impulsadas por IA que mantienen tu perfil relevante.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaBriefcase className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Búsqueda de Empleo Simplificada
            </h3>
            <p className="text-gray-600 text-sm">
              Encuentra los mejores empleos según tus habilidades y preferencias.
            </p>
          </div>
        </div>
      </div>

      {/* Lado Derecho */}
      <div className="w-full md:w-2/3 pl-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Servicio de Validación de Habilidades Basado en IA
        </h2>
        <p className="text-gray-600 text-base mt-4">
          nuJOB.AI te permite validar tu experiencia mediante entrevistas en vivo y exámenes prácticos impulsados por IA que reflejan desafíos reales. Al mostrar habilidades verificadas y auténticas, tu perfil se vuelve más confiable y competitivo. Construye confianza, gana credibilidad con los empleadores y accede a puestos que realmente se ajusten a tu potencial con nuJOB.AI.
        </p>
        <p className="text-gray-600 text-base mt-4">
          nuJOB.AI utiliza información basada en IA para resaltar tus habilidades, experiencia y marca personal, asegurando que tu perfil atraiga las oportunidades y empleadores adecuados. Ya sea que estés comenzando o mejorando tu perfil, nuJOB.AI te ayuda a destacar en un mercado laboral competitivo.
        </p>
      </div>
    </div>
  );
};

export default SkillValidationSp;
