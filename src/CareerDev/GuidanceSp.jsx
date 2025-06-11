import React from "react";

const GuidanceSp = () => {
  return (
    <div className="flex justify-center py-12 md:px-6 bg-[#F8F9FB]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Orientación Profesional Personalizada
        </h2>

        {/** Sección de Contenido **/}
        <div className="mt-6 text-left">
          <div className="border-b pb-4 text-center">
            <h3 className="text-blue-600 font-semibold">
              Información adaptada a tus aspiraciones profesionales
            </h3>
            <p className="text-gray-600 mt-2">
              nuJOB.AI ofrece orientación personalizada para ayudarte a alcanzar tus metas profesionales. Analizando tus habilidades, experiencia y preferencias del sector, te brindamos información alineada con tus aspiraciones únicas. Así te enfocas en oportunidades que realmente encajan con tu potencial y objetivos a largo plazo.
            </p>
          </div>

          <div className="border-b py-4 text-center">
            <h3 className="text-blue-600 font-semibold">
              Apoyo paso a paso para transiciones o ascensos en la industria
            </h3>
            <p className="text-gray-600 mt-2">
              Ya sea que desees cambiar de sector o avanzar en tu área actual, nuJOB.AI te guía. Nuestra plataforma ofrece una hoja de ruta clara, con pasos accionables y recursos específicos que te ayudan a tomar decisiones informadas y avanzar con confianza en tu carrera.
            </p>
          </div>

          <div className="pt-4 text-center">
            <h3 className="text-blue-600 font-semibold">
              Información sobre tendencias emergentes para mantenerte competitivo
            </h3>
            <p className="text-gray-600 mt-2">
              Mantente actualizado en un mercado laboral cambiante con información sobre las últimas tendencias del sector. nuJOB.AI te mantiene al tanto de habilidades en demanda, nuevos roles y avances tecnológicos, asegurando que sigas siendo competitivo y listo para aprovechar futuras oportunidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceSp;
