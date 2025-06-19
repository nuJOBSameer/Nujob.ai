import React from "react";

const PoolSp = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Análisis de Habilidades en Tiempo Real",
      description:
        "La IA evalúa tus habilidades en relación con las últimas tendencias del mercado, proporcionando una puntuación que refleja tu preparación laboral y competitividad actual."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Alineación Tecnológica",
      description:
        "El sistema de puntuación tiene en cuenta tu experiencia con tecnologías en tendencia y sugiere áreas de mejora para aumentar tu puntuación."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Mejora de Habilidades",
      description:
        "Recibe recomendaciones específicas sobre cursos, blogs y certificaciones que pueden mejorar tu preparación para el mercado y mantenerte en demanda."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Actualizaciones Dinámicas de Puntuación",
      description:
        "A medida que adquieres nuevas habilidades o certificaciones, el NuJob AI Linked Score se actualiza en tiempo real para reflejar tu nivel actual de preparación laboral."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg md:text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolSp;
