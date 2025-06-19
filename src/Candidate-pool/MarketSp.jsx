import React from 'react';

const MarketSp = ({ onExploreClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6 mx-auto max-w-5xl mt-12 mb-12">
      {/* Sección de contenido izquierdo */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">
          Mantente listo para el mercado con <span className="text-black">nuJOB.AI</span>
        </h2>
        <p className="text-gray-600 text-sm">
          Tus habilidades son tu moneda: asegúrate de que estén valoradas.
          La Puntuación Vinculada al Mercado de nuJOB.AI evalúa tus habilidades,
          experiencia y certificaciones frente a las demandas reales del sector,
          brindándote una ventaja competitiva con:
        </p>
        <button
          onClick={onExploreClick}
          className="bg-black text-white px-5 py-2 rounded-lg flex items-center md:mx-0 mx-auto space-x-2"
        >
          Explorar Más <span>→</span>
        </button>
      </div>

      {/* Sección de imagen derecha */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src='/images/Market.png' alt="Etiquetas de habilidades" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default MarketSp;
