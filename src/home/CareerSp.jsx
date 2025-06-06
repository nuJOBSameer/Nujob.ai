import React, { useState } from "react";

const careerData = [
  {
    title: "Tecnología de la Información",
    description:
      "Encuentra roles en desarrollo de software, ciberseguridad, ciencia de datos y más. Explora IA, blockchain y big data.",
    video: "/IT.mp4",
  },
  {
    title: "Contabilidad",
    description:
      "Conéctate con los mejores empleos en contabilidad y explora IA, blockchain e innovaciones en tecnología financiera.",
    video: "/Accounting.mp4",
  },
  {
    title: "Banca",
    description:
      "Accede a oportunidades en banca de inversión, gestión de riesgos y FinTech. Mantente al día en banca digital.",
    video: "/Banking.mp4",
  },
  {
    title: "Salud",
    description:
      "Descubre roles en telemedicina, robótica médica y tecnologías de salud innovadoras.",
    video: "/Healthcare.mp4",
  },
];

const CareerSp = () => {
  const [active, setActive] = useState(careerData[0]);

  return (
    <div className="py-14 px-4 lg:px-6 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
          Industrias
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Explora <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Carreras Potenciadas por IA</span>
          <br /> en <span className="text-black">Salud, Contabilidad, Banca y TI</span>
        </h2>

        {/* Diseño de Cuadrícula */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Tarjetas */}
          <div className="grid grid-cols-2 gap-4">
            {careerData.map((item, idx) => {
              const isActive = active.title === item.title;
              const bgColor = isActive ? "bg-[#3E57DA]" : "bg-[#F7F8FF]";
              const textColor = isActive ? "text-white" : "text-blue-600";

              return (
                <div
                  key={idx}
                  onClick={() => setActive(item)}
                  className={`transition-all duration-300 cursor-pointer rounded-xl px-4 py-4 shadow-lg ${bgColor} ${textColor}`}
                >
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              src={active.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSp;
