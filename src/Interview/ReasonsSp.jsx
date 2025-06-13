import React from "react";

const ReasonsSp = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Guía Personalizada",
      description:
        "Simulaciones e ideas adaptadas a roles laborales específicos."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Precisión Mejorada",
      description:
        "Los currículums y evaluaciones reflejan verdaderamente tus habilidades y potencial."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Información en Tiempo Real",
      description:
        "Recomendaciones y análisis de rendimiento impulsados por IA para mantenerte enfocado."
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold">Alinea tus habilidades con las tendencias del mercado</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Evalúa tus habilidades, alinéate con las tendencias del mercado y asegúrate de estar siempre en demanda con la herramienta de puntuación dinámica de nuJOB.AI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsSp;
