import React from "react";

const KeyFeaturesSp = () => {
  return (
    <div className="text-center py-12 relative">
      <h2 className="text-2xl font-bold">Características Clave</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Tarjeta 1 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Análisis de Brechas de Habilidades</h3>
          <p className="text-gray-600 text-sm">
            Identifica brechas críticas de habilidades dentro de tu equipo mediante análisis impulsados por IA, lo que te permite enfocarte en áreas que necesitan mejora para aumentar la productividad.
          </p>
        </div>

        {/** Tarjeta 2 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Aprendizaje Personalizado</h3>
          <p className="text-gray-600 text-sm">
            Obtén recomendaciones de formación personalizadas y rutas de aprendizaje diseñadas para cada miembro del equipo, alineando su desarrollo con los objetivos organizacionales.
          </p>
        </div>

        {/** Tarjeta 3 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Métricas Accionables</h3>
          <p className="text-gray-600 text-sm">
            Aprovecha métricas de rendimiento en tiempo real e información generada por IA para tomar decisiones respaldadas por datos que impulsen el éxito de tu equipo.
          </p>
        </div>
      </div>

      {/** Línea después de las tarjetas **/}
      <div className="w-[1030px] hidden md:flex border-t border-gray-300 mt-8 ml-8"></div>
    </div>
  );
};

export default KeyFeaturesSp;
