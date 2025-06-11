import React from "react";

const ExecutiveSearchSp = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Imagen Izquierda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/CareerPath1.png"
              alt="Visualización de Búsqueda Ejecutiva"
              className="w-full max-w-md"
            />
          </div>

          {/* Contenido Derecho */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl mt-5 md:mt-0 font-bold text-indigo-700">
              Descubre Talento de Alto Nivel con Servicios de Búsqueda Ejecutiva Impulsados por IA
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              En nuJOB.AI, aprovechamos el poder de la tecnología avanzada de IA para conectar tu
              organización con talento de liderazgo de primer nivel. Nuestros Servicios de Búsqueda Ejecutiva 
              superan el reclutamiento tradicional al ofrecer información basada en datos y coincidencias personalizadas, 
              asegurando que tu próxima contratación ejecutiva sea la ideal. Ya sea para cubrir un rol clave de liderazgo 
              o para planificar un crecimiento estratégico, nuestras herramientas innovadoras agilizan el proceso de contratación, 
              ahorrando tiempo y recursos mientras ofrecen resultados sobresalientes. Deja que la IA eleve tu búsqueda ejecutiva 
              y lleve el éxito de tu empresa a nuevas alturas.
            </p>

            {/* Sección de Beneficios */}
            <div className="mt-6 shadow-xl p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Beneficios</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <img src="/images/ArrowD.png" alt="Flecha" className="w-5 h-5 mr-2" />
                  <span>
                    <strong>Identificación Eficiente de Talento:</strong> Las herramientas de IA encuentran ejecutivos calificados rápidamente.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/ArrowD.png" alt="Flecha" className="w-5 h-5 mr-2" />
                  <span>
                    <strong>Coincidencias Personalizadas:</strong> Candidatos emparejados según habilidades y liderazgo.
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/ArrowD.png" alt="Flecha" className="w-5 h-5 mr-2" />
                  <span>
                    <strong>Evaluación Mejorada con IA:</strong> Analiza perfiles para mejores decisiones de contratación.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearchSp;
