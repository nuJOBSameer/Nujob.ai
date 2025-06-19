import React from "react";

const ConfidenceSp = () => {
  return (
    <div className="text-center py-12 relative">
      <h2 className="text-2xl font-bold">Puntaje de Confianza</h2>
      <div className="flex md:flex-row flex-wrap items-center justify-center gap-6 mt-6">
        {/** Tarjeta 1 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="confianza" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Practica entrevistas simuladas con un compañero o un coach.
          </h3>
        </div>

        {/** Tarjeta 2 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="confianza" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Únete a un taller o club de oratoria.
          </h3>
        </div>

        {/** Tarjeta 3 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="confianza" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Graba y revisa tus presentaciones para identificar áreas de mejora.
          </h3>
        </div>

        {/** Tarjeta 4 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="confianza" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Asiste a seminarios web o cursos sobre lenguaje corporal y expresión vocal.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceSp;
