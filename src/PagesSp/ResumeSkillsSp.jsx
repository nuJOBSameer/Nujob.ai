import React, { useRef } from "react";
import ResumeBuilderSp from "../ResumeSkills/ResumeBuilderSp.jsx";
import ResumeVersionSp from "../ResumeSkills/ResumeVersionSp.jsx";
import SkillsSectionSp from "../ResumeSkills/SkillsSectionSp.jsx";
import { Helmet } from "react-helmet";

const ResumeSkillsSp = () => {
  const resumeBuilderRef = useRef(null);

  const scrollToBuilder = () => {
    if (resumeBuilderRef.current) {
      resumeBuilderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Optimiza Tu Currículum</title>
        <meta
          name="description"
          content="Mejora tu currículum para resaltar logros y habilidades relevantes, asegurando que conecte con posibles empleadores."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-between px-5 py-24 md:py-14 md:px-16 bg-white">
        {/* Sección de Texto Izquierda */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-purple-700">
            Da Forma a Tu Carrera. Mantente Adelante.
          </h2>
          <p className="text-gray-600 mt-4">
            Un currículum no es solo un documento: es un reflejo de tu experiencia. En un mercado que avanza rápidamente, nuJOB.AI te ayuda a crear, perfeccionar y personalizar currículums que llaman la atención. Ya sea que estés postulando a un nuevo rol, mejorando tus habilidades o optimizando tu marca profesional, nuestras herramientas aseguran que sigas siendo competitivo.
          </p>
          <button
            onClick={scrollToBuilder}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
          >
            Explorar Funciones <span>↗</span>
          </button>
        </div>

        {/* Imagen Derecha */}
        <div className="max-w-md">
          <img
            src="/images/Resume.png"
            alt="Mejora del Currículum"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* ResumeBuilder con referencia */}
      <div ref={resumeBuilderRef}>
        <ResumeBuilderSp />
      </div>

      <ResumeVersionSp />
      <SkillsSectionSp />
    </>
  );
};

export default ResumeSkillsSp;
