import React from "react";
import Talent1 from "/images/Talent1.png"; // Asegúrate de que esta ruta sea correcta

const JobOffersSectionSp = ({ onScrollToBoxes }) => {
  return (
    <div className="md:max-w-4xl max-w-80 mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-11">
      {/* Imagen Izquierda */}
      <div className="md:w-1/2">
        <img src={Talent1} alt="Talento" className="w-full max-h-[350px] object-cover" />
      </div>

      {/* Contenido Derecho */}
      <div className="md:w-1/2 p-6 bg-purple-50 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          Ofrecemos <span className="ml-2 border-b-2 border-purple-600 w-12"></span>
        </h3>
        <h2 className="text-xl font-bold text-purple-600 mt-2">
          <span className="text-purple-600">Centralización de Ofertas de Trabajo</span>
        </h2>
        <p className="text-gray-700 mt-2">
          Obtén roles que realmente se adapten a ti. El Centro de Ofertas de Trabajo selecciona oportunidades según tus habilidades y objetivos profesionales.
        </p>
        <p className="text-gray-600 mt-2">
          •Coincidencias Inteligentes – La IA filtra ofertas irrelevantes.
          <br />•Información Estratégica – Compara ofertas con datos reales del mercado.
          <br />•Un Solo Panel – Haz seguimiento y gestiona tus postulaciones fácilmente.
        </p>
        <button onClick={onScrollToBoxes} className="mt-4 px-4 py-2 bg-black text-white rounded-full flex items-center gap-2 w-fit">
          Explorar Más <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default JobOffersSectionSp;
