import React, { useState } from "react";

const SkillsSectionSp = () => {
  const [activeTab, setActiveTab] = useState("upleveling");

  return (
    <div className="flex justify-center py-12 md:px-6 bg-[#F8F9FB]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Sección de Mejora y Validación de Habilidades
        </h2>

        {/* Cambiador de pestañas */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "upleveling"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("upleveling")}
          >
            MEJORA DE HABILIDADES
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ml-2 ${
              activeTab === "validation"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("validation")}
          >
            VALIDACIÓN DE HABILIDADES
          </button>
        </div>

        {/* Contenido */}
        <div className="mt-6 text-left">
          {activeTab === "upleveling" ? (
            <>
              <div className="border-b pb-4 text-center">
                <h3 className="text-blue-600 font-semibold">Análisis de Brechas con IA</h3>
                <p className="text-gray-600 mt-2">
                  Comprende tu situación. Nuestra IA evalúa tus habilidades frente a las demandas del mercado, identificando áreas de mejora y ayudándote a enfocarte en lo que importa.
                </p>
              </div>

              <div className="border-b py-4 text-center">
                <h3 className="text-blue-600 font-semibold">Recursos de Aprendizaje Curados</h3>
                <p className="text-gray-600 mt-2">
                  Accede a cursos seleccionados, conocimientos de la industria y certificaciones que se alinean con las tendencias laborales en evolución. Mantenerse relevante es una estrategia, no un desafío.
                </p>
              </div>

              <div className="pt-4 text-center">
                <h3 className="text-blue-600 font-semibold">Seguimiento del Progreso</h3>
                <p className="text-gray-600 mt-2">
                  Mide tu crecimiento con información en tiempo real. Identifica hitos, ajusta tu enfoque y asegúrate de que cada paso te acerque a tus metas.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="border-b pb-4 text-center">
                <h3 className="text-blue-600 font-semibold">Evaluaciones de Habilidades Bajo Demanda</h3>
                <p className="text-gray-600 mt-2">
                  Pon a prueba tus habilidades con evaluaciones específicas para cada rol, basadas en escenarios reales. Demuestra tus fortalezas y lo que te diferencia en un mercado laboral competitivo.
                </p>
              </div>

              <div className="border-b py-4 text-center">
                <h3 className="text-blue-600 font-semibold">Certificaciones y Distintivos Verificados</h3>
                <p className="text-gray-600 mt-2">
                  Obtén certificados y distintivos verificados por Nujob que puedes añadir a tu currículum, perfil o portafolio: una prueba de que no solo tienes habilidades, sino que están validadas por estándares de la industria.
                </p>
              </div>

              <div className="pt-4 text-center">
                <h3 className="text-blue-600 font-semibold">Comparación con Pares</h3>
                <p className="text-gray-600 mt-2">
                  Observa cómo te comparas. Compara tus resultados con otros en tu campo y obtén una visión clara de tus fortalezas y áreas de mejora.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsSectionSp;
