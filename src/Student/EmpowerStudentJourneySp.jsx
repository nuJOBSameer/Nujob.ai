import React from "react";
import { Link } from "react-router-dom";

const EmpowerStudentJourneySP = () => {
  const cards = [
    {
      title: "Conecta Educación con Empleo",
      subtitle: "Convierte lo que aprendes en lo que ganas.",
      items: [
        "Convierte tus clases en habilidades reales.",
        "Gana experiencia con proyectos simulados.",
        "Encuentra prácticas alineadas con tus objetivos.",
      ],
      img: "/images/girl.png",
      btnText: "Mapea Mi Camino",
    },
    {
      title: "Herramienta de Ventaja Estudiantil",
      subtitle:
        "Construye tu marca digital y deja que tu trabajo hable por ti.",
      items: [
        "Creador de perfil digital: tu historia, a tu manera.",
        "Video presentación: Muestra quién eres a los reclutadores.",
        "Certificaciones: Destaca tus logros al frente.",
      ],
      img: "/images/boy.png",
      btnText: "Construir Mi Marca →",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f4ff] px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Potencia Tu Trayectoria Estudiantil
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Haz que tu aprendizaje valga más allá del aula
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl p-6 w-full md:w-[420px] relative pb-16 min-h-[450px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-5">{card.subtitle}</p>

              <ul className="space-y-3 mb-4">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img
                      src="/images/resume-insights.png"
                      alt="bullet"
                      className="w-4 h-4 mt-1"
                    />
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={card.img}
              alt="estudiante"
              className="w-64 h-auto object-contain absolute bottom-0 right-1"
            />

            <button className="absolute bottom-[-20px] left-28 transform -translate-x-1/2 bg-[#5243C2] hover:bg-[#3f31a2] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition">
              <Link to="/pricingsp">{card.btnText}</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpowerStudentJourneySP;
