import React from "react";
import Pool1 from "/images/Pool1.png";
import Star from "/images/Star.png";

const AdvertiseSkillsSp = () => {
  return (
    <div className="w-full bg-[#F7F5F5] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Sección izquierda - Imágenes apiladas */}
        <div className="relative md:flex flex-row items-center justify-center w-full md:w-1/2 hidden">
          <img
            src={Pool1}
            alt="Pool 1"
            className="absolute w-[400px] h-[400px]"
          />
        </div>

        {/* Sección derecha - Contenido */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Publicita tus habilidades y descubre talento de primer nivel con{" "}
            <span className="text-blue-600">nuJOB.AI</span>
          </h2>

          <h3 className="mt-6 text-lg font-semibold">Para Buscadores de Empleo</h3>
          <ul className="mt-2 space-y-3 text-gray-700">
            {[
              {
                text: "Muestra tu experiencia: crea un perfil destacado con información impulsada por IA que resalte tus fortalezas.",
              },
              {
                text: "Atrae los roles adecuados: recibe coincidencias con oportunidades alineadas con tus habilidades y metas profesionales.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img src={Star} alt="Estrella" className="w-4 h-4 mr-2 mt-1" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Para Reclutadores</h3>
          <ul className="mt-2 space-y-3 text-gray-700">
            {[
              {
                text: "Encuentra talento de calidad más rápido: utiliza búsqueda avanzada con IA para conectar con los candidatos adecuados fácilmente.",
              },
              {
                text: "Optimiza tu proceso: las recomendaciones impulsadas por IA te ayudan a tomar decisiones de contratación inteligentes sin suposiciones.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img src={Star} alt="Estrella" className="w-4 h-4 mr-2 mt-1" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700">
            nuJOB.AI es tu plataforma definitiva para mostrar tu experiencia y conectar con los mejores empleadores, al mismo tiempo que te permite encontrar talento excepcional para tus necesidades de reclutamiento.
            Ya seas un profesional que desea destacar tus habilidades o un reclutador en busca de candidatos calificados, nuJOB.AI simplifica el proceso con precisión impulsada por IA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseSkillsSp;
