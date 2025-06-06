import React from "react";

const MissionSp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Sección de Imagen Izquierda con Superposición */}
      <div className="relative w-full md:w-1/3">
        <img 
          src="/images/Mission.png" 
          alt="Consultores guiando a clientes" 
          className="w-auto h-96 rounded-lg"
        />
      </div>

      {/* Sección de Contenido Derecho */}
      <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Misión
          </span>
        </h2>
        <p className="text-gray-600 italic text-base mt-2">
          “Hacer que la contratación sea justa, eficiente y profundamente personalizada. Conectamos el talento adecuado con los roles adecuados utilizando IA.” - Dmitry Bokotey, CEO
        </p>
      </div>
    </div>
  );
};

export default MissionSp;
