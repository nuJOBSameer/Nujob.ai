import React from "react";

const TopTierCandidatesSp = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold">Servicio para Candidatos de Alto Nivel</h2>
      <p className="text-gray-600 mt-2 px-6">
        Conectando profesionales élite con oportunidades de alto nivel, nuestro servicio garantiza acceso a
        roles premium que se alinean con tu experiencia.
      </p>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Tarjeta 1 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Acceso Exclusivo</h3>
          <p className="text-gray-600 text-sm">Obtén visibilidad en mercados laborales premium</p>
        </div>

        {/** Tarjeta 2 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Emparejamiento Laboral</h3>
          <p className="text-gray-600 text-sm">
            La IA te conecta con roles de alto nivel que coinciden con tus habilidades y experiencia
          </p>
        </div>

        {/** Tarjeta 3 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Avance Profesional</h3>
          <p className="text-gray-600 text-sm">Asciende a puestos directivos en empresas prestigiosas</p>
        </div>
      </div>
    </div>
  );
};

export default TopTierCandidatesSp;
