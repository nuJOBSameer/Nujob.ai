import React from "react";

const InterviewSectionSp = () => {
  return (
    <div className="py-12 px-5 md:px-28">
      {/* Primera Fila */}
      <div className="md:flex-row flex-col-reverse items-center flex justify-center">
        <img src="/images/Interview1.png" alt="Entrevista en Vivo" className="w-96 h-96" />

        <div className="ml-7">
          <h2 className="text-blue-600 font-bold text-lg">Entrevistas en Vivo</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Programa y lleva a cabo entrevistas en vivo sin esfuerzo
          </p>
          <p className="text-gray-600 mt-2">
            nuJOB.AI permite a los reclutadores tener control total del proceso de entrevista. Programa entrevistas en vivo directamente en la plataforma, colabora sin problemas con gerentes de contratación y expertos de la industria, y reúne a las personas adecuadas para evaluaciones en tiempo real. Ya sea una entrevista uno a uno o una discusión en panel, nuestra plataforma garantiza una experiencia fluida y colaborativa, brindando retroalimentación en tiempo real para decisiones informadas.
          </p>

          <h2 className="text-blue-600 font-bold text-lg mt-6">Visor de Entrevistas</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Panel impulsado por IA para monitoreo y facilitación
          </p>
          <p className="text-gray-600 mt-2">
            Nuestro Visor de Entrevistas con IA ofrece un panel integral para monitorear y gestionar todas las entrevistas programadas en tiempo real. Obtén información, sigue el progreso e incluso facilita entrevistas con ayuda de avatares de IA, mejorando la participación y la eficiencia. Deja que la IA optimice el proceso de reclutamiento, asegurando evaluaciones sin interrupciones y operaciones eficientes.
          </p>
        </div>
      </div>

      {/* Segunda Fila */}
      <div className="md:flex-row flex-col items-center flex justify-center mt-12">
        <div>
          <h2 className="text-blue-600 font-bold text-lg">Simulación de Entrevista con IA</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Prepárate con simulaciones adaptadas
          </p>
          <p className="text-gray-600 mt-2">
            nuJOB.AI ofrece simulaciones avanzadas de entrevistas con IA, recreando escenarios reales adaptados a tus roles objetivo. Practica en un entorno controlado y sin estrés, mejora tus respuestas y gana confianza para la entrevista real. La IA analiza no solo tus respuestas, sino también tu comportamiento y estilo de comunicación, ayudándote a perfeccionar tus técnicas.
          </p>

          <h2 className="text-blue-600 font-bold text-lg mt-6">Entrevistas Virtuales con IA</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Transformando la forma de construir currículums
          </p>
          <p className="text-gray-600 mt-2">
            nuJOB.AI introduce entrevistas impulsadas por IA que crean currículums basados en tu rendimiento real. Tus respuestas, tono y comportamiento se analizan para reflejar con precisión tus habilidades y fortalezas. Practica a tu propio ritmo, recibe retroalimentación instantánea y aumenta tus posibilidades de coincidir con las oportunidades laborales adecuadas.
          </p>
        </div>

        <img src="/images/Interview2.png" alt="Entrevista con IA" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default InterviewSectionSp;
