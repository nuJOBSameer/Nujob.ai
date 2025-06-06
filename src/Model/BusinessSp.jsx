import React from "react";

const BusinessSp = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto p-6">
        {/* Contenido Izquierdo */}
        <div className="w-full md:w-2/3 space-y-4 my-9">
          <h2 className="text-4xl font-bold text-gray-900">Modelo de Negocio</h2>
          <p className="text-gray-600 text-base pr-6">
            nuJOB.AI está diseñado para el futuro de la contratación. No solo emparejamos candidatos con empleos—validamos habilidades, optimizamos trayectorias profesionales y agilizamos todo el proceso de reclutamiento.
            Nuestro enfoque impulsado por IA reemplaza los filtros de currículum obsoletos con evaluaciones prácticas, formación técnica inmersiva y conocimientos en tiempo real. 
            Nuestra misión es hacer que la contratación sea justa, eficiente y profundamente personalizada.
            <br />
            Para los buscadores de empleo, se trata de demostrar su valor más allá de un simple papel. Para las empresas, se trata de contratar con confianza. No solo cubrimos vacantes—formamos carreras y transformamos la manera en que el talento se conecta con la demanda.
            <br />
            Ya sea que estés impulsando tu carrera o construyendo un equipo poderoso, te ayudamos a tomar decisiones audaces basadas en datos. Dejemos atrás los métodos de contratación obsoletos y redefinamos lo que es posible.
          </p>
        </div>

        {/* Imagen Derecha */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
          <img
            src="/images/Business.png"
            alt="Entrevistas impulsadas por IA"
            className="relative z-10 w-72 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default BusinessSp;
