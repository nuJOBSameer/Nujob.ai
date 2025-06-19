import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import JobMatch from "../Student/JobMatch";
import Education from "../Student/Education";
import Skills from "../Student/Skills";
import EmpowerStudentJourney from "../Student/EmpowerStudentJourney";
import JobMatchSP from "../Student/JobMatchSp";
import EducationSP from "../Student/EducationSp";
import SkillsSP from "../Student/SkillsSp";
import EmpowerStudentJourneySP from "../Student/EmpowerStudentJourneySp";

const StudentSp = () => {
  const jobMatchRef = useRef(null);

  const handleScrollToJobMatch = () => {
    jobMatchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Recursos de Carrera para Estudiantes</title>
        <meta
          name="description"
          content="Equípate con herramientas y orientación para construir una base sólida para tu carrera futura, incluso antes de graduarte."
        />
      </Helmet>

      {/* 👇 Contenedor de fondo de ancho completo */}
      <div className="w-full bg-[#EBFDFF] py-24 md:py-16">
        {/* 👇 Contenedor de contenido centrado */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-8">
          {/* Contenido Izquierdo */}
          <div className="md:w-[45%] w-full flex flex-col justify-center text-center mt-10 md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Lanza Tu Carrera{" "}
              <span className="text-blue-600">con</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                Confianza
              </span>
            </h2>
            <p className="text-gray-600 text-base mt-6 md:pr-12">
              Olvídate de esperar. nuJOB te brinda las herramientas para construir tu futuro, a tu manera, incluso antes de graduarte.
              Inteligente, impulsado por IA, y diseñado para cómo realmente trabajas.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <button
                onClick={handleScrollToJobMatch}
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Explorar para Estudiantes
              </button>
            </div>

            {/* Sección de Avatares - Escritorio */}
            <div className=" mt-12 hidden md:flex items-center justify-start">
              <img
                src="/images/avatars.png"
                alt="Avatares de Estudiantes"
                className="w-16 h-auto mr-3"
              />
              <span className="text-gray-700 text-base md:text-2xl">
                Únete a más de 10,000 estudiantes ya a bordo
              </span>
            </div>
          </div>

          {/* Imagen Derecha */}
          <div className="md:w-[55%] w-full flex flex-col items-center mt-4 md:mt-0">
            <img
              src="/images/Students.jpeg"
              alt="Estudiantes"
              className="w-96 h-[500px] object-cover rounded-xl max-w-xl mt-5"
            />

            {/* Sección de Avatares - Móvil */}
            <div className="mt-6 flex md:hidden items-center justify-center w-full">
              <img
                src="/images/avatars.png"
                alt="Avatares de Estudiantes"
                className="w-16 h-auto mr-3"
              />
              <span className="text-gray-700 text-xl text-center">
                Únete a más de 10,000 estudiantes ya a bordo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones Adicionales */}
      <div ref={jobMatchRef}>
        <JobMatchSP />
      </div>
      <EducationSP />
      <SkillsSP />
      <EmpowerStudentJourneySP />
    </>
  );
};

export default StudentSp;
