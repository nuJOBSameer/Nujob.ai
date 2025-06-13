import React, { useRef } from "react";
import Reasons from "../Interview/Reasons";
import InterviewSection from "../Interview/InterviewSection";
import { Helmet } from "react-helmet";
import ReasonsSp from "../Interview/ReasonsSp";
import InterviewSectionSp from "../Interview/InterviewSectionSp";

const InterviewSp = () => {
  const interviewSectionRef = useRef(null);

  const scrollToInterviewSection = () => {
    if (interviewSectionRef.current) {
      interviewSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Entrevistas Eficientes</title>
        <meta
          name="description"
          content="Utiliza nuestra plataforma para gestionar entrevistas de manera eficiente, obteniendo información en tiempo real y seguimiento fluido del progreso."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white pt-24 md:py-12 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex md:flex-row flex-col items-center justify-between">
          {/* Left Text Section */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-700">Entrevista y Evaluación</h2>
            <p className="text-gray-600 mt-4">
              En nuJOB.AI, revolucionamos el proceso de entrevistas y evaluaciones con un enfoque
              simplificado y potenciado por IA que ahorra tiempo y ofrece perspectivas más profundas.
              Nuestra plataforma facilita entrevistas en vivo e interactivas, así como evaluaciones
              basadas en escenarios realistas, asegurando una evaluación integral de habilidades y
              potencial. Al empoderar a reclutadores y candidatos con herramientas avanzadas,
              permitimos decisiones de contratación eficientes, justas y basadas en datos que
              benefician a todos los involucrados.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
              onClick={scrollToInterviewSection}
            >
              Más Funciones <span>↗</span>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="max-w-md mt-10 md:mt-0">
            <img
              src="/images/interview.png"
              alt="Mejora de Currículum"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <ReasonsSp />
      </div>

      <div ref={interviewSectionRef} className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <InterviewSectionSp />
      </div>
    </>
  );
};

export default InterviewSp;
