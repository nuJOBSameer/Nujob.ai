import React from "react";

const HelpDeskSp = () => {
  return (
    <div className="flex justify-center items-center py-10 p-6">
      <div className="bg-gray-100 p-6 md:flex-row flex-col-reverse items-center rounded-xl shadow-lg flex max-w-5xl w-full">
        {/* Lado Izquierdo - Imagen con Caja Azul como Parte de la Imagen */}
        <div className="w-1/3 hidden md:flex">
          <img src="/images/helpdesk.png" alt="Mesa de Ayuda" className="w-full h-auto rounded-lg" />
        </div>

        {/* Lado Derecho - Contenido de Texto */}
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-bold text-gray-900">Mesa de Ayuda en nuJOB.AI</h2>
          <p className="text-gray-600 mt-2">
            Nuestra Mesa de Ayuda está aquí para resolver cualquier problema que puedas encontrar al usar nuJOB.AI.
            Ya sea que necesites asistencia técnica, solución de problemas o guía sobre cómo usar funciones específicas de la plataforma, estamos para ayudarte.
            Envía un ticket de soporte, sigue el estado de tu solicitud y recibe soluciones rápidas de nuestro equipo especializado.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Características Clave</h3>
          <ul className="mt-2 space-y-4 text-blue-600">
            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Enviar un Ticket de Soporte</a>
                <p className="text-gray-600 text-xs">
                  Informa fácilmente cualquier problema técnico o consulta enviando un ticket. Nuestro equipo atenderá tus inquietudes rápidamente para mantener tu experiencia sin complicaciones.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6"/></span>
              <div>
                <a href="#" className="font-semibold">Sigue el Estado de tu Ticket</a>
                <p className="text-gray-600 text-xs">
                  Mantente informado sobre el progreso de tus solicitudes de soporte. Consulta actualizaciones en tiempo real y comunícate con nuestro equipo hasta que se resuelva tu problema.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Recursos de Ayuda Integrales</a>
                <p className="text-gray-600 text-xs">
                  Accede a preguntas frecuentes, tutoriales y guías sobre problemas comunes y características de la plataforma. Ahorra tiempo encontrando respuestas o aprendiendo a usar al máximo las herramientas de nuJOB.AI.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskSp;
