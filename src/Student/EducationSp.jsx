import React from "react";
import { Link } from "react-router-dom";

const EducationSP = () => {
  return (
    <div className="w-full bg-[#F6F9FF] py-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-8">
        
        {/* Sección de video */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="relative rounded-xl overflow-hidden shadow-lg max-w-xl mx-auto">
            <video
              src="/images/Students.MP4"
              className="w-full h-full object-cover"
              loop
              muted
              controls
              playsInline
            />
          </div>
        </div>

        {/* Sección de contenido */}
        <div className="w-full md:w-1/2 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Tu Futuro <span className="text-[#5243C2]">Comienza Aquí</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
            Mira cómo nuJOB ayuda a los estudiantes a construir carreras inteligentes antes de graduarse.
            Únete a miles de egresados exitosos que lanzaron sus carreras a través de nuestra plataforma.
          </p>

          {/* Estadísticas */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <div className="bg-white rounded-lg px-10 py-3 shadow">
              <p className="text-[#5243C2] font-bold text-lg">94%</p>
              <p className="text-sm text-gray-600">Tasa de colocación</p>
            </div>
            <div className="bg-white rounded-lg px-10 py-3 shadow">
              <p className="text-[#5243C2] font-bold text-lg">10k+</p>
              <p className="text-sm text-gray-600">Estudiantes contratados</p>
            </div>
          </div>

          {/* Botón */}
          <div className="mt-6">
            <button className="bg-[#5243C2] hover:bg-[#4132a0] text-white px-6 py-3 rounded-full shadow-md transition">
              <Link to="/pricingsp">Comienza Tu Camino</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSP;
