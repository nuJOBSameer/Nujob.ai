import React from "react";

const CustomerSupportSp = () => {
  return (
    <div className="flex justify-center items-center py-10 p-6">
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg md:flex-row flex-col items-center flex max-w-5xl w-full">
        {/* Lado Izquierdo - Contenido de Texto */}
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-bold text-gray-900">Soporte al Cliente en nuJOB.AI</h2>
          <p className="text-gray-600 mt-2">
            Nuestro equipo de soporte al cliente está dedicado a garantizar una experiencia fluida en nuJOB.AI.
            Ya sea que tengas preguntas sobre tu cuenta, necesites ayuda con postulaciones laborales o enfrentes problemas técnicos,
            estamos aquí para ayudarte con soluciones personalizadas. Contáctanos cuando lo necesites.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Características Clave</h3>
          <ul className="mt-2 space-y-4 text-blue-600">
            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Asistencia Directa del Equipo de Soporte</a>
                <p className="text-gray-600">
                  Ayuda personalizada para problemas técnicos o consultas adaptadas a tus necesidades.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Múltiples Canales de Soporte</a>
                <p className="text-gray-600">
                  Contáctanos por correo electrónico, chat en vivo o teléfono. Elige el método más conveniente y te ayudaremos.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Orientación de Expertos</a>
                <p className="text-gray-600">
                  Obtén ayuda para encontrar empleo, crear tu perfil y utilizar funciones específicas de nuJOB.AI con nuestro equipo de expertos.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Lado Derecho - Imagen con Caja Azul (parte de la imagen) */}
        <div className="w-1/3 hidden md:flex">
          <img src="/images/customersupport-image.png" alt="Soporte al Cliente" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportSp;
