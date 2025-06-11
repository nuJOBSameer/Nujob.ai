import React from "react";

const ResumeVersionSp = () => {
  return (
    <div className="text-center py-6">
      <h2 className="text-3xl text-blue-600 font-bold">Múltiples Versiones de Currículum</h2>
      <p className="text-gray-600 text-wrap px-5 md:px-52 mt-2">
        Adáptate a diferentes roles sin empezar desde cero.
      </p>

      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/* Tarjeta 1 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version1.png" alt="Icono de Plantilla" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Ahorra tiempo con plantillas reutilizables y estructuradas.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Elimina el problema de empezar desde cero en cada solicitud. Nuestras plantillas personalizables y prediseñadas te permiten crear currículums profesionales en minutos. Guarda y reutiliza tu trabajo fácilmente para futuras postulaciones, asegurando consistencia y profesionalismo, y reduciendo el tiempo dedicado al formato y estructura.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version2.png" alt="Icono de Personalización" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Personaliza cada versión para los requisitos del puesto.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Destácate adaptando tu currículum a las demandas específicas de cada oferta laboral. Resalta logros, habilidades y experiencias relevantes que se alineen con el rol, aumentando tus posibilidades de captar la atención de los reclutadores. Con nuestras herramientas, puedes ajustar fácilmente tu contenido a las necesidades de la industria o cumplir con los estándares ATS.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version3.png" alt="Icono del Panel" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Mantén todo organizado en un solo lugar para un acceso fluido.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Guarda todos tus currículums organizados y accesibles desde un panel intuitivo. Ya sea que estés postulando a múltiples industrias o manteniendo versiones para diferentes objetivos profesionales, nuestra plataforma asegura que nunca pierdas el control. Administra, edita y descarga tus currículums fácilmente cuando lo necesites, ayudándote a ser eficiente y estar preparado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeVersionSp;
