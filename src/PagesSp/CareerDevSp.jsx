import React, { useRef } from "react";
import TrackInterviews from "../CareerDev/TrackInterviews.jsx";
import Monitor from "../CareerDev/Monitor.jsx";
import Guidance from "../CareerDev/Guidance.jsx";
import Confidence from "../CareerDev/Confidence.jsx";
import MeritBadges from "../CareerDev/MeritBadges.jsx";
import { Helmet } from "react-helmet";
import MeritBadgesSp from "../CareerDev/MeritBadgesSp.jsx";
import ConfidenceSp from "../CareerDev/ConfidenceSp.jsx";
import GuidanceSp from "../CareerDev/GuidanceSp.jsx";
import MonitorSp from "../CareerDev/MonitorSp.jsx";
import TrackInterviewsSp from "../CareerDev/TrackInterviewsSp.jsx";

const CareerDevSp = () => {
  const guidanceRef = useRef(null);

  const scrollToGuidance = () => {
    if (guidanceRef.current) {
      guidanceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Apoyo para el Crecimiento Profesional</title>
        <meta
          name="description"
          content="Recibe orientación personalizada para alcanzar tus metas profesionales, con información basada en tu experiencia y tendencias del sector."
        />
      </Helmet>

      {/* Sección Hero */}
      <section className="bg-white py-24 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex md:flex-row flex-col items-center justify-between">
          {/* Sección Izquierda de Texto */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-700">
              Maximiza Tu Crecimiento Profesional
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
              Toma el Control de Tu Carrera con nuJOB.AI
            </h3>
            <p className="text-gray-600 mt-4">
              El mercado laboral avanza rápido—mantente un paso adelante con nuJOB.AI. Te ofrecemos herramientas para perfeccionar tus habilidades, seguir tu progreso y destacar. Ya sea preparación para entrevistas, crecimiento profesional o generar confianza con empleadores, te ayudamos a tomar el control de tu futuro.
            </p>
            <button
              onClick={scrollToGuidance}
              className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
            >
              Más Funciones <span>↗</span>
            </button>
          </div>

          {/* Sección Derecha con Imagen */}
          <div className="max-w-md mt-8 md:mt-0">
            <img
              src="/images/CareerDev.png"
              alt="Mejora de Currículum"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Subcomponentes con márgenes */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <TrackInterviewsSp />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <MonitorSp />
      </div>

      <div ref={guidanceRef} className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <GuidanceSp />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <ConfidenceSp />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <MeritBadgesSp />
      </div>
    </>
  );
};

export default CareerDevSp;
