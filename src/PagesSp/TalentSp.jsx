import React, { useRef } from "react";
import JobOffersSection from "../Talent/JobOffersSection";
import WhyChooseNuJob from "../Talent/WhyChooseNuJob";
import Boxes from "../Talent/Boxes";
import GuidanceSection from "../Talent/GuidanceSection";
import { Helmet } from "react-helmet";
import JobOffersSectionSp from "../Talent/JobOffersSectionSp";
import WhyChooseNuJobSp from "../Talent/WhyChooseNuJobSp";
import BoxesSp from "../Talent/BoxesSp";
import GuidanceSectionSp from "../Talent/GuidanceSectionSp";

const TalentSp = () => {
  const boxesRef = useRef(null);

  const scrollToBoxes = () => {
    if (boxesRef.current) {
      boxesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Gestiona y Desarrolla Talento</title>
        <meta
          name="description"
          content="Implementa estrategias para desarrollar y retener talento, enfocándote en el crecimiento continuo y la optimización del rendimiento."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-between py-24 md:py-12 px-5 md:px-16 bg-white">
        {/* Sección de Texto Izquierda */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#514DE0]">
            Gestión de Talento que Funciona
          </h2>
          <p className="text-gray-600 mt-4 pr-8">
            Encuentra, evalúa y contrata a los mejores talentos con información basada en IA y evaluaciones del mundo real. Decisiones más rápidas, contrataciones más efectivas.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
            onClick={scrollToBoxes}
          >
            Explorar Más <span>↗</span>
          </button>
        </div>

        {/* Sección de Imagen Derecha */}
        <div className="max-w-md">
          <img
            src="/images/Talent.png"
            alt="Mejora de Currículum"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Pasar función de scroll a JobOffersSection */}
      <JobOffersSectionSp onScrollToBoxes={scrollToBoxes} />

      <WhyChooseNuJobSp />

      {/* Objetivo de scroll */}
      <div ref={boxesRef}>
        <BoxesSp />
      </div>

      <GuidanceSectionSp />
    </>
  );
};

export default TalentSp;
