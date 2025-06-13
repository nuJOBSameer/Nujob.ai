import React, { useState } from "react";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ServicesSectionSP() {
  const [activeTab, setActiveTab] = useState("jobseekers");
  const [selectedService, setSelectedService] = useState(null);

  const seekerServices = [
    {
      title: "Habilidades que Hablan (Validación por IA)",
      subtitle: "Tus habilidades. Tu prueba. Tu ventaja.",
      description:
        "Destacamos cómo piensas, te adaptas y lideras cuando realmente importa. Nuestras simulaciones impulsadas por IA miden tus habilidades del mundo real, no solo lo que recuerdas, sino cómo actúas bajo presión.\n\nLo que lo hace único:\n• Simulaciones en vivo que van más allá del conocimiento teórico\n• Laboratorios de escenarios con desafíos en tiempo real\n• Retroalimentación instantánea que muestra tu agilidad y ejecución\n• Mapas visuales de habilidades que muestran lo que tu currículum no puede\n\nPor qué importa:\nLos resultados hablan más que las palabras. Nosotros los hacemos visibles.",
      icon: "/images/skill.png",
    },
    {
      title: "Entrevistas Simuladas con IA",
      subtitle: "Entrena como si fuera real—porque lo es.",
      description:
        "Simulamos entrevistas reales para que estés preparado para lo impredecible.\n\nLo que lo hace único:\n• Entrevistas que se adaptan a tu rendimiento\n• Retroalimentación táctica, no solo consejos\n• Confianza construida en entornos exigentes\n\nPor qué importa:\nEstás aquí para destacar. Te ayudamos a lograrlo.",
      icon: "/images/Jinterview.png",
    },
    {
      title: "Coincidencia de Empleo Inteligente",
      subtitle: "Encuentra trabajos que impulsen tu crecimiento.",
      description:
        "Vamos más allá de las descripciones para encontrar trabajos que se alineen con tu ambición.\n\nLo que lo hace único:\n• Coincidencias basadas en tus metas\n• Rutas personalizadas de carrera\n• Roles pensados para tu evolución\n\nPor qué importa:\nUn buen trabajo puede transformar tu trayectoria.",
      icon: "/images/recruitment.png",
    },
    {
      title: "Evaluaciones Flexibles",
      subtitle: "Aprende a tu ritmo. Mejora a tu manera.",
      description:
        "Tú marcas el ritmo. Nosotros traemos el reto. Evaluaciones adaptativas que te empujan a crecer.\n\nLo que lo hace único:\n• Evaluaciones a demanda\n• Tareas basadas en escenarios reales\n• Retroalimentación honesta y directa\n\nPor qué importa:\nControla tu crecimiento. Evoluciona en tus propios términos.",
      icon: "/images/business-planing.png",
    },
    {
      title: "Puntajes Vinculados al Mercado",
      subtitle: "Mantente relevante. Mantente solicitado.",
      description:
        "Comparamos tu desempeño con datos reales del mercado.\n\nLo que lo hace único:\n• Puntajes en tiempo real alineados al mercado\n• Seguimiento transparente de tu evolución\n• Recomendaciones basadas en las habilidades más valiosas\n\nPor qué importa:\nEl mercado cambia rápido. Te ayudamos a estar por delante.",
      icon: "/images/speedometer.png",
    },
    {
      title: "Factor Confianza (Validación de Integridad)",
      subtitle: "Demuestra carácter, no solo competencia.",
      description:
        "Cualquiera puede exagerar. Pero la coherencia y la fiabilidad son detectables.\n\nLo que lo hace único:\n• Análisis de comportamiento auténtico\n• Perfiles de confianza duraderos\n• Métricas de integridad valoradas por empleadores\n\nPor qué importa:\nLas habilidades abren puertas. El carácter las mantiene abiertas.",
      icon: "/images/honest.png",
    },
    {
      title: "Orientación Profesional Personalizada",
      subtitle: "Tu carrera. A tu medida.",
      description:
        "Estrategias únicas para ayudarte a construir una carrera con impacto.\n\nLo que lo hace único:\n• Planes personalizados para tu próximo paso\n• Desarrollo de habilidades basado en oportunidades\n• Orientación enfocada en el futuro\n\nPor qué importa:\nTu legado profesional empieza con decisiones inteligentes. Te ayudamos a construirlo.",
      icon: "/images/tour-guide.png",
    },
  ];

  const recruiterServices = [
  {
    title: "Habilidades Validadas por IA en lugar de Currículums",
    subtitle: "Pruebas en lugar de palabrería.",
    description:
      "Evaluamos a los candidatos por cómo actúan, no por cómo se venden. Tareas reales. Resultados en tiempo real.\n\nLo que obtienes:\n• Talento demostrado mediante simulaciones en vivo\n• Menos tiempo perdido con currículums inflados\n• Una lista llena de personas que hacen, no que hablan\n\nPor qué importa:\nNecesitas habilidades, no discursos. Nosotros entregamos pruebas.",
    icon: "/images/skill.png",
  },
  {
    title: "Preparación de Entrevistas más Inteligente (Simulaciones)",
    subtitle: "Candidatos que llegan listos para triunfar.",
    description:
      "Nuestras entrevistas simuladas forman candidatos que prosperan bajo presión—para que contrates más rápido y con mayor calidad.\n\nLo que obtienes:\n• Información en tiempo real sobre el potencial del candidato\n• Mejora en comunicación y pensamiento crítico desde el inicio\n• Menos puntos débiles, mejores primeras impresiones\n\nPor qué importa:\nCandidatos preparados rinden mejor—y permanecen más tiempo.",
    icon: "/images/Jinterview.png",
  },
  {
    title: "Contratación Automatizada, Simplificada",
    subtitle: "Rápido, eficiente y preparado para escalar.",
    description:
      "Desde la preselección hasta la programación, nuestra IA automatiza las tareas tediosas para que te concentres en el mejor talento.\n\nLo que obtienes:\n• Evaluación y calificación instantánea\n• Programación de entrevistas sin complicaciones\n• Contrataciones más rápidas, menos abandonos\n\nPor qué importa:\nLa velocidad gana a los mejores candidatos. Te ayudamos a ser el primero.",
    icon: "/images/hiring.png",
  },
  {
    title: "Coincidencia Precisa con el Puesto",
    subtitle: "El ajuste correcto. Impacto real.",
    description:
      "Buscamos más que calificaciones: buscamos mentalidad, valores y crecimiento.\n\nLo que obtienes:\n• Perfilado profundo para ajuste cultural y de misión\n• Talento que crece contigo\n• Menos desajustes, contrataciones más duraderas\n\nPor qué importa:\nLos grandes equipos no solo trabajan juntos—crecen juntos.",
    icon: "/images/recruitment.png",
  },
  {
    title: "Evaluaciones Adaptativas y Perspicaces",
    subtitle: "Observa cómo responde el talento, no solo cómo reacciona.",
    description:
      "Las pruebas estáticas muestran lo que alguien sabe. Las nuestras revelan cómo actúan bajo presión real.\n\nLo que obtienes:\n• Evaluaciones que evolucionan según el contexto\n• Información clara sobre toma de decisiones y ejecución\n• Datos accionables, no suposiciones\n\nPor qué importa:\nContratas para hoy, pero necesitas para mañana. Nosotros mostramos ambos.",
    icon: "/images/business-planing.png",
  },
  {
    title: "Evaluación Competitiva (Puntaje Vinculado al Mercado)",
    subtitle: "Contrata al ritmo del mercado.",
    description:
      "Nuestros puntajes evolucionan según las necesidades de la industria, dándote una visión actualizada del posicionamiento de los candidatos.\n\nLo que obtienes:\n• Rankings basados en datos y tendencias actuales\n• Visibilidad para filtrar el mejor talento rápidamente\n• Métricas que mantienen tus estándares preparados para el futuro\n\nPor qué importa:\nContrata para tener ventaja, no para quedarte en la media.",
    icon: "/images/speedometer.png",
  },
  {
    title: "Verificación de Integridad con IA",
    subtitle: "La confianza no es una habilidad blanda—es una fortaleza clave.",
    description:
      "Medimos más que habilidades. Evaluamos responsabilidad, resiliencia y consistencia—para ayudarte a construir equipos que perduren.\n\nLo que obtienes:\n• Puntajes de confianza basados en comportamientos reales\n• Menor riesgo de contratación\n• Cultura de responsabilidad desde el inicio\n\nPor qué importa:\nLos equipos inteligentes se construyen sobre confianza, no solo talento.",
    icon: "/images/honest.png",
  },
  {
    title: "Integración de RRHH sin Esfuerzo",
    subtitle: "Conéctalo. Actívalo.",
    description:
      "Nos integramos con tus sistemas actuales sin drama, retrasos ni interrupciones.\n\nLo que obtienes:\n• Integración rápida con tu stack de RRHH\n• APIs personalizadas con visibilidad completa del pipeline\n• Herramientas escalables que crecen con tus necesidades de contratación\n\nPor qué importa:\nLa contratación debe impulsar el crecimiento, no frenarlo.",
    icon: "/images/pattern (1).png",
  },
];

const studentServices = [
  {
    title: "Habilidades Comprobadas",
    subtitle: "Lo que sabes. Probado. Claro.",
    description:
      "Evaluaciones diseñadas para mostrar tus habilidades reales. No solo lo que recuerdas, sino cómo aplicas tu conocimiento en situaciones reales.\n\nPor qué es poderoso:\n• Evaluaciones en vivo alineadas con la industria.\n• Pruebas adaptativas según tu nivel de habilidad.\n• Análisis detallado de rendimiento para ayudarte a crecer.\n• Informes claros que los empleadores pueden confiar y entender.\n\nPor qué funciona:\nCuando tus habilidades están verificadas, tu perfil transmite confianza. Esta es tu prueba, clara y creíble.",
    icon: "/images/skill.png",
  },
  {
    title: "Entrevistas Impulsadas por IA",
    subtitle: "Practica mejor. Rinde más.",
    description:
      "Simulaciones de entrevistas impulsadas por IA para que ganes confianza, mejores tu comunicación y avances con cada sesión.\n\nPor qué es poderoso:\n• Preguntas realistas específicas para tu rol.\n• Retroalimentación de IA para mejorar tono, claridad y entrega.\n• Entorno seguro para reducir ansiedad y mejorar fluidez.\n• Repeticiones para revisar y seguir tu progreso.\n\nPor qué funciona:\nCandidatos preparados rinden con seguridad. La práctica constante convierte tu próxima entrevista en algo natural.",
    icon: "/images/Jinterview.png",
  },
  {
    title: "Información Profesional Personalizada",
    subtitle: "Guía hecha para ti. Avance que te impulsa.",
    description:
      "Recomendaciones inteligentes basadas en tus fortalezas y metas, para ayudarte a avanzar con claridad.\n\nPor qué es poderoso:\n• Consejos personalizados basados en tus evaluaciones y objetivos.\n• Sugerencias de carrera alineadas con tus fortalezas.\n• Insights que evolucionan contigo.\n• Siguientes pasos accionables para avanzar con propósito.\n\nPor qué funciona:\nCuando tu camino se alinea con tus fortalezas, avanzas más rápido y más lejos.",
    icon: "/images/guidanceicon.png",
  },
  {
    title: "Micro-Credenciales",
    subtitle: "Reconocimiento ganado. Impacto real.",
    description:
      "Insignias digitales que destacan tus habilidades verificadas y permiten que los empleadores vean tu valor real.\n\nPor qué es poderoso:\n• Credenciales basadas directamente en tu rendimiento.\n• Categorías claras de habilidades según el mercado.\n• Fácil de compartir en CVs, perfiles y LinkedIn.\n• Confianza incorporada que muestra tus logros al instante.\n\nPor qué funciona:\nEl reconocimiento impulsa el progreso. Las microcredenciales hacen visibles y valiosas tus fortalezas.",
    icon: "/images/credentials.png",
  },
  {
    title: "Currículum y Coaching de Carrera",
    subtitle: "Cuenta tu historia. Planifica tu camino.",
    description:
      "Herramientas y soporte experto para crear un CV destacado y una estrategia profesional a largo plazo.\n\nPor qué es poderoso:\n• Generadores inteligentes de CVs que resaltan tus verdaderas fortalezas.\n• Plantillas personalizables y profesionales.\n• Coaching paso a paso según tu etapa profesional.\n• Recursos para avanzar del primer empleo al crecimiento sostenido.\n\nPor qué funciona:\nTu historia importa. Con las herramientas y apoyo correctos, tu próximo paso será con confianza.",
    icon: "/images/resumeicon.png",
  },
];


  const services =
    activeTab === "jobseekers"
      ? seekerServices
      : activeTab === "recruiters"
        ? recruiterServices
        : studentServices;

  return (
    <div className="bg-blue-50 py-16 px-6 md:px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-gray-600 uppercase flex items-center justify-center">
          <ClockIcon className="w-4 h-4 mr-2" />
          Funciones Destacadas
        </h3>
        <h2 className="text-4xl font-semibold mt-2">
          Descubre Nuestros{" "}
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Servicios
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mt-6">
          <button
            onClick={() => setActiveTab("jobseekers")}
            className={`px-6 py-2 rounded-full text-sm font-semibold ${activeTab === "jobseekers"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
          >
            Para Buscadores de Empleo
          </button>
          <button
            onClick={() => setActiveTab("recruiters")}
            className={`px-6 py-2 rounded-full text-sm font-semibold ${activeTab === "recruiters"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
          >
            Para Reclutadores
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`px-6 py-2 rounded-full text-sm font-semibold ${activeTab === "students"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
          >
            Para Estudiantes
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            >
              <img src={service.icon} alt="" className="w-10 h-10 mb-2" />
              <h4 className="text-lg font-semibold text-left">{service.title}</h4>
              <p className="text-sm text-gray-600 text-left mt-1">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-xl p-8 w-[80%] max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src={selectedService.icon} alt="" className="w-12 h-12" />
              <h4 className="text-xl font-bold">{selectedService.title}</h4>
            </div>

            {selectedService.description.split("\n").map((line, idx) => {
              const isSubheading = line.trim().endsWith(":");
              return (
                <p
                  key={idx}
                  className={`text-left ${isSubheading ? "font-semibold mt-4 text-gray-800" : "text-gray-600"}`}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
