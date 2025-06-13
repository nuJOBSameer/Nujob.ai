import React from "react";
import ArrowD from "/images/ArrowD.png"; // Asegúrate de que esta imagen exista en tu proyecto

const WhyChooseNuJobSp = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
      {/* Encabezado - Ahora sobre ambas secciones */}
      <h2 className="text-2xl font-bold text-gray-900 text-center">
        ¿Por qué elegir <span className="text-black">nuJOB.AI</span>?
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 w-80 md:w-full">
        {/* Sección Izquierda - Lista de Beneficios */}
        <div className="md:w-1/2">
          <h3 className="text-xl text-blue-600 font-semibold">Beneficios</h3>
          <ul className="mt-4 space-y-4 text-gray-700">
            {[
              "Habilidades sobre palabras de moda: la IA evalúa capacidades reales, no solo palabras clave.",
              "Coincidencia precisa: oportunidades adaptadas a tu experiencia.",
              "Información en tiempo real: mantente actualizado con la demanda del sector.",
              "Posicionamiento del perfil: destaca lo que te diferencia.",
              "Seguimiento simplificado: olvídate de las postulaciones dispersas.",
            ].map((benefit, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-center">
                  <img src={ArrowD} alt="Flecha" className="w-4 h-4 mr-2" />
                  <span>{benefit}</span>
                </div>
                <div className="w-full border-t border-gray-400 mt-2"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección Derecha - Imagen (Con superposición azul) */}
        <div className="md:w-1/2">
          <img
            src="/images/Why.png"
            alt="Beneficios"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNuJobSp;
