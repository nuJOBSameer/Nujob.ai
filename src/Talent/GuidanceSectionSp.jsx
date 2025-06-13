import React from "react";
import GuidanceImage from "/images/Talent2.png"; // Asegúrate de que esta imagen exista en tu proyecto

const GuidanceSectionSp = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-10 px-5">
      {/* Lado Izquierdo - Imagen Completa */}
      <div className="md:w-1/2">
        <img
          src={GuidanceImage}
          alt="Orientación"
          className=""
        />
      </div>

      {/* Lado Derecho - Lista de Características */}
      <div className="md:w-1/2 space-y-6">
        {[
          {
            title: "Orientación Personalizada",
            description:
              "Recibe consejos adaptados específicamente a tus objetivos profesionales, ayudándote a tomar decisiones informadas y seguras.",
            color: "border-pink-500 text-blue-600",
          },
          {
            title: "Información en Tiempo Real",
            description:
              "Mantente a la vanguardia con recomendaciones impulsadas por IA que se adaptan a tu progreso y aspiraciones profesionales.",
            color: "border-blue-500 text-blue-600",
          },
          {
            title: "Búsqueda de Empleo Simplificada",
            description:
              "Ahorra tiempo y esfuerzo mientras la IA selecciona las mejores opciones laborales según tus habilidades, preferencias y trayectoria.",
            color: "border-purple-500 text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border p-4 rounded-md shadow-md ${item.color} bg-[#F8F2FF]`}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidanceSectionSp;
