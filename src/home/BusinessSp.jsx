import React from "react";
import { Link } from "react-router-dom";

export default function BusinessSp() {
  return (
    <div className="bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Sección Izquierda */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/images/Sarah.png"
            alt="Reclutamiento Empresarial"
            className="w-full max-w-md"
          />
        </div>

        {/* Sección Derecha */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <p className="text-indigo-600 font-medium uppercase text-sm">
            El Futuro de la Contratación
          </p>
          <h2 className="text-5xl font-bold mt-2">
            <span className="text-indigo-600">Soluciones</span> Perfectas Para <br />
            <span className="text-black">Empresas y Reclutamiento</span>
          </h2>

          <ul className="mt-6">
            {[
              "Captura candidatos en 15 minutos – sin complicaciones, rápido y eficiente.",
              "Evalúa las habilidades en 5 horas – evaluaciones precisas sin esperas.",
              "Valida currículums en 1 hora – verificación con IA que separa hechos de ficción.",
              "Contrata en 7 días – velocidad y precisión para un proceso de contratación eficaz.",
              "Cubre vacantes en 4 días – porque el candidato ideal no debe esperar.",
            ].map((item, index) => {
              const [boldText, normalText] = item.split(" – ");
              return (
                <li
                  key={index}
                  className="flex items-start space-x-3 py-3 border-b border-gray-300"
                >
                  <span className="text-indigo-600">
                    <img src="/images/down.png" alt="flecha" className="h-5" />
                  </span>
                  <p className="text-gray-700 text-lg">
                    <strong className="font-semibold">{boldText}</strong> – {normalText}
                  </p>
                </li>
              );
            })}
          </ul>

          <button className="mt-6 px-6 py-3 bg-black flex items-center text-white font-medium rounded-lg hover:bg-gray-800 transition">
            <Link to="/Contact">Habla con Nosotros</Link>
            <img src="/images/Arrow.png" alt="" className="ml-2 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
