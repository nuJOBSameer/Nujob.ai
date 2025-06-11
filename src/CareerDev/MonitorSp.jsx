import React from "react";

const MonitorSp = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center py-16">
      {/** Imagen Izquierda **/}
      <div className="w-1/2 flex justify-center">
        <img src="/images/Monitor.png" alt="Ilustración del Panel de Control" className="w-full max-w-md" />
      </div>

      {/** Contenido de Texto Derecho **/}
      <div className="md:w-1/3 px-5 text-left">
        <h2 className="text-3xl font-bold text-blue-500">Monitorea Tu Trayectoria de Entrevistas</h2>
        <p className="text-gray-700 mt-4">
          Gestiona fácilmente tu trayectoria de entrevistas con un sistema de seguimiento completo e intuitivo. Registra cada detalle: fechas, nombres de empresas, retroalimentación, resultados y reflexiones personales. Este enfoque organizado te permite analizar tu desempeño, identificar patrones y detectar áreas de mejora, ofreciéndote un plan claro para tu crecimiento.
          <br /><br />
          Al centralizar tu historial de entrevistas en un solo lugar accesible, obtienes valiosas perspectivas sobre tu progreso y puedes prepararte estratégicamente para futuras oportunidades. Con esta claridad y estructura, afrontarás cada entrevista con una confianza renovada, enfoque y las herramientas necesarias para llevar tu carrera al siguiente nivel.
        </p>
      </div>
    </div>
  );
};

export default MonitorSp;
