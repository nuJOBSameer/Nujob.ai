import React from "react";
import GuidanceImage from "/images/Features.png"; // Asegúrate de que esta imagen exista en tu carpeta del proyecto

const FeaturesSp = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-10">

      {/* Lado Derecho - Lista de Funcionalidades */}
      <div className="md:w-1/2 space-y-6 md:ml-14">
        <h2 className="text-3xl font-bold">Funcionalidades</h2>
        {[
          {
            title: "Simulaciones Prácticas",
            description:
              "Escenarios laborales reales impulsados por IA.",
            color: "border-pink-500 text-blue-600",
          },
          {
            title: "Evaluaciones Específicas por Rol",
            description:
              "Adaptadas a industrias y tecnologías.",
            color: "border-blue-500 text-blue-600",
          },
          {
            title: "Retroalimentación Instantánea",
            description:
              "Información en tiempo real para mejorar.",
            color: "border-purple-500 text-blue-600",
          },
          {
            title: "Credibilidad del Perfil",
            description:
              "Aumenta tu atractivo ante los reclutadores.",
            color: "border-purple-500 text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border p-2 rounded-md shadow-md ${item.color} bg-[#F8F2FF]`}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Lado Izquierdo - Imagen */}
      <div className="md:ml-20 w-80 md:w-1/2">
        <img
          src={GuidanceImage}
          alt="Guía"
          className="h-96 w-96"
        />
      </div>
    </div>
  );
};

export default FeaturesSp;
