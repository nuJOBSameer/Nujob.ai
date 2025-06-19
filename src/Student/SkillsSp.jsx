import React, { useState } from "react";

const SkillsSP = () => {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      title: "Constructor de CV / Navegador",
      subtitle: "Crea tu currículum soñado, sin experiencia",
      image: "/images/resume-builder.png",
      content: (
        <>
          <p>
            <strong>Constructor de CV Navegador:</strong> Crea tu currículum soñado, sin necesidad de experiencia
          </p>
          <p className="mt-2">
            ¿Listo para convertir el potencial en oportunidad? Con el Constructor de CV Navegador de nuJOB.AI, te ayudamos a crear un currículum destacado, incluso si recién comienzas.
            Nuestra herramienta impulsada por IA actúa como tu mentor profesional personal, guiándote paso a paso para crear un currículum que resalte tus fortalezas y cause impacto.
            Ya sea que aún estés en la escuela o a punto de dar tu primer paso profesional, nos aseguramos de que estés listo para impresionar.
          </p>
          <p className="mt-3 font-bold">¿Cómo Funciona?:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Descubre tu camino</strong> – Identifica tus fortalezas y explora industrias que te apasionen mediante preguntas fáciles y reveladoras.</li>
            <li><strong>Aprende con Avatar IA</strong> – Conoce a tu coach personal de IA, que ofrece lecciones inteligentes sobre cómo hablar de tu experiencia y qué buscan los empleadores.</li>
            <li><strong>Crea un CV efectivo</strong> – Convierte tus respuestas en un currículum pulido y personalizado que refleje tu potencial, sin necesidad de experiencia previa.</li>
            <li><strong>Crea tu marca personal</strong> – Sugerencias de estilos profesionales, lemas y perfiles en línea que te harán destacar.</li>
            <li><strong>Crece de forma inteligente</strong> – A medida que adquieras nuevas habilidades, te ayudamos a actualizar tu currículum, practicar entrevistas y aprender términos del sector.</li>
          </ul>
          <p className="mt-3 font-bold">¿Por Qué Funciona?:</p>
          <p>Sin confusión. Sin estrés. Solo pasos claros, prácticos y resultados instantáneos. Miles de estudiantes ya usan nuJOB.AI para crear currículums que llaman la atención. ¿Listo para desbloquear tu potencial profesional? Vamos allá.</p>
        </>
      ),
    },
    {
      title: "Coach de entrevistas simuladas",
      subtitle: "Domina la entrevista como un profesional",
      image: "/images/mock-interview.png",
      content: (
        <>
          <p>
            <strong>Coach de Entrevistas Simuladas:</strong> Domina la entrevista como un profesional
          </p>
          <p className="mt-2">
            Supera cualquier entrevista con el Coach de Entrevistas Simuladas de nuJOB.AI. Nuestra herramienta con IA simula entrevistas reales, brindándote retroalimentación instantánea y consejos personalizados para que perfecciones tus respuestas.
          </p>
          <p className="mt-3 font-bold">¿Cómo Funciona?:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Simula entrevistas reales</strong> – Elige tu rol y practica con preguntas realistas y personalizadas.</li>
            <li><strong>Retroalimentación instantánea</strong> – Obtén información sobre tus respuestas y sugerencias para mejorar tu presentación.</li>
            <li><strong>Domina habilidades clave</strong> – Mejora tu comunicación, confianza y lenguaje corporal con cada sesión de práctica.</li>
          </ul>
          <p className="mt-3 font-bold">¿Por Qué Funciona?:</p>
          <p>Práctica real, resultados reales. Nuestra IA te ayuda a ganar confianza, eliminar nervios y dominar el arte de la entrevista. ¿Listo para destacar en tu próxima entrevista? Empecemos.</p>
        </>
      ),
    },
    {
      title: "Validación de Habilidades",
      subtitle: "Demuestra tus capacidades con confianza",
      image: "/images/skill-validation.png",
      content: (
        <>
          <p>
            <strong>Validación de Habilidades:</strong> Demuestra tus capacidades con confianza
          </p>
          <p className="mt-2">
            Muestra lo que sabes hacer con la herramienta de Validación de Habilidades de nuJOB.AI. Ya seas nuevo en el mundo laboral o busques crecer, nuestra IA evalúa tus habilidades y certifica tu experiencia ante los empleadores.
          </p>
          <p className="mt-3 font-bold">¿Cómo Funciona?:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Evalúa tus habilidades</strong> – Realiza evaluaciones que coincidan con tus objetivos profesionales.</li>
            <li><strong>Certificación instantánea</strong> – Obtén un informe detallado sobre tus fortalezas, respaldado por pruebas confiables para los empleadores.</li>
            <li><strong>Destácate ante los empleadores</strong> – Muestra tus habilidades verificadas en tu currículum y LinkedIn, obteniendo una ventaja competitiva.</li>
          </ul>
          <p className="mt-3 font-bold">¿Por Qué Funciona?:</p>
          <p>Las habilidades hablan más que las palabras. Con nuJOB.AI, valida tus conocimientos y preséntalos a los empleadores con confianza. ¿Listo para demostrar tu potencial? Comienza a validar hoy.</p>
        </>
      ),
    },
  ];

  return (
    <div className="py-20 px-5 md:px-16 bg-gradient-to-b from-[#FFF6FC] to-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">Valida tus habilidades</h2>
      <p className="text-gray-600 text-base mb-10">Demuestra de lo que estás hecho – sin adornos.</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 max-w-xs bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 cursor-pointer"
            onClick={() => setActiveModal(index)}
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-[#1A1A1A] font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold hover:text-black"
            >
              ×
            </button>
            <div className="text-left space-y-3 text-sm text-gray-800">
              {cards[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSP;
