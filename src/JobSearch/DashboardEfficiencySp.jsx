import React from "react";

const DashboardEfficiencySp = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center pb-16">
      {/** Imagen Izquierda **/}
      <div className="w-1/2 flex justify-center">
        <img src="/images/Dashboard.png" alt="Ilustración del Panel" className="w-full max-w-md" />
      </div>

      {/** Contenido de Texto a la Derecha **/}
      <div className="md:w-1/3 px-4 text-left md:mt-0 mt-4">
        <h2 className="text-3xl font-bold text-[#006BA6]">Un Panel Diseñado para la Eficiencia</h2>
        <p className="text-gray-700 mt-4">
          Nuestro panel intuitivo impulsado por IA está diseñado para una eficiencia máxima, proporcionando a los gerentes un centro centralizado para rastrear brechas de habilidades, visualizar el progreso del equipo y tomar decisiones basadas en datos. Con métricas en tiempo real e información personalizada, puedes monitorear fácilmente el rendimiento, identificar áreas de mejora e implementar estrategias de aprendizaje efectivas, todo dentro de una interfaz fácil de usar.
          <br /><br />
          Experimenta una forma más inteligente de aumentar la productividad y fomentar el desarrollo continuo de habilidades.
        </p>
      </div>
    </div>
  );
};

export default DashboardEfficiencySp;
