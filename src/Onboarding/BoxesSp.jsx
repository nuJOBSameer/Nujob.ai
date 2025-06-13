import React from "react";

const BoxesSp = () => {
  return (
    <div className="text-center py-12 relative bg-gray-300">
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/* Tarjeta 1 */}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Guía Personalizada</h3>
          <p className="text-gray-600 text-sm">
            Navega tu camino profesional con confianza gracias a ideas y recomendaciones personalizadas.
            La plataforma impulsada por IA de nuJOB.AI analiza tus habilidades, preferencias y objetivos
            profesionales para brindarte orientación personalizada en cada paso, desde seleccionar las
            oportunidades adecuadas hasta mejorar tu desarrollo profesional.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Información en Tiempo Real</h3>
          <p className="text-gray-600 text-sm">
            Mantente un paso adelante con ideas prácticas impulsadas por IA y entregadas al instante.
            nuJOB.AI proporciona retroalimentación en tiempo real sobre tu progreso, ayudándote a identificar
            fortalezas y áreas de mejora. Supervisa tu rendimiento, haz seguimiento de hitos y toma decisiones
            informadas con recomendaciones basadas en datos para optimizar tu crecimiento profesional y preparación laboral.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="estrella" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Procesos Simplificados</h3>
          <p className="text-gray-600 text-sm">
            Simplifica tu camino con herramientas intuitivas impulsadas por IA que hacen que las tareas
            complejas sean fáciles. nuJOB.AI automatiza y simplifica procesos como incorporación,
            evaluaciones de habilidades y mejora de perfil. Con una interfaz fácil de usar y orientación paso
            a paso, puedes enfocarte en alcanzar tus metas sin la molestia de gestionar tareas tediosas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxesSp;
