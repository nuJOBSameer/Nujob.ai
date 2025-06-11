import React from "react";

const ExecutiveServicesSp = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-600">
          Resumen de Servicios Ejecutivos
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
          En nuJOB.AI, nos especializamos en la búsqueda ejecutiva impulsada por IA para directivos de nivel C,
          miembros del consejo y candidatos de alto nivel. Nuestra plataforma conecta a tu organización con talento
          élite, asegurando el liderazgo adecuado para impulsar el crecimiento y el éxito.
        </p>

        <div className="flex flex-col md:flex-row items-center mt-5 gap-8">
          {/* Lado Izquierdo: Características */}
          <div className="flex-1 space-y-4">
            <FeatureBox
              title="Liderazgo de Alto Impacto"
              description="Consigue ejecutivos que generen crecimiento estratégico y resultados medibles."
            />
            <FeatureBox
              title="Contratación Técnica Basada en Datos"
              description="Toma de decisiones informadas con información detallada de los candidatos."
            />
            <FeatureBox
              title="Contratación Rápida"
              description="Proceso de búsqueda acelerado para una colocación de liderazgo eficiente."
            />
          </div>

          {/* Lado Derecho: Imagen */}
          <div className="flex-1 relative flex justify-center">
            <img
              src="/images/executive-services.png"
              alt="Servicios Ejecutivos"
              className="h-96 w-96"
            />
          </div>
        </div>

        {/* Propuesta de Valor */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Propuesta de Valor</h3>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <ValueBox
              icon="/images/path1.png"
              title="Orientación Personalizada"
              description="Asesoramiento a medida para el crecimiento de tu carrera."
              hasBorder={true}
            />
            <ValueBox
              icon="/images/path2.png"
              title="Información en Tiempo Real"
              description="Recomendaciones impulsadas por IA que mantienen tu perfil relevante."
              hasBorder={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ title, description }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-pink-100 to-white border border-pink-300 rounded-lg flex items-start gap-3
                    hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src="/images/Star.png" alt="Estrella" className="w-5 h-5 mt-1" />
      <div>
        <h4 className="text-indigo-600 font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ValueBox = ({ icon, title, description, hasBorder }) => {
  return (
    <div className={`flex items-start gap-3 ${hasBorder ? "md:border-r" : ""} border-gray-400 pr-3`}>
      <span className="text-2xl pl-3">
        <img src={icon} alt="" />
      </span>
      <div>
        <h4 className="text-black font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExecutiveServicesSp;
