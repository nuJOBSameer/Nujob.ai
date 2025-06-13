import React from "react";
import { Link } from "react-router-dom";

const JobMatchSP = () => {
  return (
    // 👇 Contenedor de fondo de ancho completo
    <div className="w-full bg-white py-20">
      
      {/* 👇 Contenedor centrado del contenido */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-8">
        
        {/* Contenido de texto a la izquierda */}
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug text-[#1A1A1A]">
            Encuentra el Trabajo<br />
            <span className="text-[#1A1A1A]">Perfecto para Ti</span>
          </h2>
          <p className="text-gray-600 text-base mt-4 md:mt-6 max-w-lg">
            No más desplazamientos infinitos. Encuentra empleos que encajen con tu estilo y habilidades.
          </p>

          <div className="mt-8 space-y-4">
            {/* Función 1 */}
            <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <img src="/images/resume-insights.png" alt="Información del CV" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-semibold">Información de CV impulsada por IA</p>
                <p className="text-sm text-gray-600">que te hace destacar</p>
              </div>
            </div>

            {/* Función 2 */}
            <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <img src="/images/role-fit.png" alt="Ajuste de Rol" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-semibold">Puntajes de ajuste de rol</p>
                <p className="text-sm text-gray-600">y consejos sobre brechas de habilidades personalizados para ti</p>
              </div>
            </div>

            {/* Función 3 */}
            <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <img src="/images/career-path.png" alt="Ruta Profesional" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-semibold">Recomendaciones de carrera</p>
                <p className="text-sm text-gray-600">que realmente tienen sentido</p>
              </div>
            </div>
          </div>

          {/* Botón */}
          <div className="flex justify-start">
            <button className="mt-10 bg-[#5243C2] hover:bg-[#3732b6] text-white px-6 py-3 rounded-full shadow-md transition">
              <Link to="/pricing">Optimizar Mi CV →</Link>
            </button>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 w-full relative mt-10 md:mt-0">
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/images/jobmatch-people.png"
              alt="Colaboración de Equipo"
              className="w-full h-auto"
            />

            {/* Insignia arriba izquierda */}
            <div className="absolute top-3 left-3 bg-white shadow px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
              <img src="/images/ball.png" alt="punto" className="w-2 h-2" /> 98% Tasa de Coincidencia
            </div>

            {/* Insignia abajo derecha */}
            <div className="absolute bottom-7 right-3 bg-white shadow px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
              <img src="/images/star1.png" alt="estrella" className="w-4 h-4" />
              88% Tasa de Coincidencia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatchSP;
