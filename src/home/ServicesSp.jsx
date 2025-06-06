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

  const services =
    activeTab === "jobseekers"
      ? seekerServices
      : activeTab === "recruiters"
        ? [] // Puedes agregar los servicios traducidos para reclutadores
        : []; // O para estudiantes

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
