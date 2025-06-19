import React from "react";

const ResumeBuilderSp = () => {
  return (
    <div className="flex justify-center py-12 px-6">
      <div className="bg-pink-50 py-12 px-6 text-center md:w-[80%] rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900">Creador y Editor de Currículum</h2>

        <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-8">
          {/* Tarjeta 1 */}
          <div className="md:w-96 md:h-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img src="/images/Resume1.png" alt="Creador de Currículum" className="w-12 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mt-2">Creador de Currículum</h3>
            <p className="text-gray-600 mt-1">
              Un currículum bien estructurado y compatible con ATS en minutos. Sin desorden, solo impacto.
            </p>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Estrella" className="w-4 h-4 mr-2" />
                Plantillas diseñadas profesionalmente para cada industria.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Estrella" className="w-4 h-4 mr-2" />
                Guía paso a paso para resaltar tus fortalezas.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Estrella" className="w-4 h-4 mr-2" />
                Vistas previas en tiempo real para perfeccionar cada detalle antes de enviarlo.
              </li>
            </ul>
          </div>

          {/* Tarjeta 2 */}
          <div className="md:w-96 md:h-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img src="/images/Resume2.png" alt="Editor de Currículum" className="w-12 h-12 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900">Editor de Currículum</h3>
            <p className="text-gray-600 mt-2">
              Refina, reestructura y posiciónate para las oportunidades correctas.
            </p>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Estrella" className="w-4 h-4 mr-2" />
                Sugerencias impulsadas por IA para mejorar el lenguaje.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Estrella" className="w-4 h-4 mr-2" />
                Optimización de palabras clave alineadas con lo que buscan los reclutadores.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Estrella" className="w-4 h-4 mr-2" />
                Formato limpio y profesional diseñado para la legibilidad.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderSp;
