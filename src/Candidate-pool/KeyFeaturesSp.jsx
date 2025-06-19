import React from "react";

const KeyFeaturesSp = () => {
  const features = [
    {
      title: "Evaluación de Habilidades en Tiempo Real",
      description:
        "Obtén una puntuación de preparación laboral basada en tendencias del mercado.",
    },
    {
      title: "Alineación Tecnológica",
      description:
        "Identifica áreas para mejorar con información sobre herramientas y tecnologías en tendencia.",
    },
    {
      title: "Guía para Mejorar Habilidades",
      description:
        "Recibe recomendaciones personalizadas para certificaciones, cursos y laboratorios.",
    },
    {
      title: "Actualizaciones Dinámicas de Puntuación",
      description:
        "Refleja tu crecimiento a medida que adquieres nuevas habilidades o credenciales.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Características Clave</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-[#F9F5FF] to-[#F5F3FF] shadow-lg rounded-lg p-6 text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="text-orange-500 font-bold mr-1">*IA</span>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeaturesSp;
