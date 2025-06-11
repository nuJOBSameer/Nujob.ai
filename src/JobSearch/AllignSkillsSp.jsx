import React from "react";

const AlignSkillsSp = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Análisis de Habilidades en Tiempo Real",
      description:
        "La IA evalúa tus habilidades en comparación con las últimas tendencias del mercado, proporcionando una puntuación que refleja tu preparación y competitividad laboral actual."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Alineación Tecnológica",
      description:
        "El sistema de puntuación tiene en cuenta tu experiencia con tecnologías emergentes y sugiere áreas de mejora para aumentar tu puntuación."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Mejora de Habilidades",
      description:
        "Recibe recomendaciones específicas de cursos, blogs y certificaciones que pueden aumentar tu preparación para el mercado y ayudarte a mantenerte en demanda."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Actualizaciones Dinámicas de Puntuación",
      description:
        "A medida que adquieres nuevas habilidades o certificaciones, el sistema de puntuación de NuJob AI se actualiza en tiempo real para reflejar tu nuevo nivel de preparación laboral."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold">Alinea Tus Habilidades con las Tendencias del Mercado</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Evalúa tus habilidades, alinéate con las tendencias del mercado y asegúrate de estar siempre en demanda con la herramienta dinámica de puntuación de nuJOB.AI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg md:text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlignSkillsSp;
