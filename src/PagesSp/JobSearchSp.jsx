import React, { useRef } from "react";
import AlignSkills from "../JobSearch/AllignSkills"; // You might consider translating this too
import KeyFeatures from "../JobSearch/KeyFeatures";
import DashboardEfficiency from "../JobSearch/DashboardEfficiency";
import Testimonials from "../JobSearch/Testimonials";
import { Helmet } from "react-helmet";
import TestimonialsSp from "../JobSearch/TestimonialsSp";
import DashboardEfficiencySp from "../JobSearch/DashboardEfficiencySp";
import KeyFeaturesSp from "../JobSearch/KeyFeaturesSp";
import AlignSkillsSp from "../JobSearch/AllignSkillsSp";

const JobSearchSp = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Recomendaciones de Empleo Personalizadas</title>
        <meta
          name="description"
          content="Recibe sugerencias de empleo alineadas con tus habilidades y preferencias, optimizando tu búsqueda del puesto ideal."
        />
      </Helmet>

      {/* Sección Principal */}
      <section className="bg-white py-24 md:py-14 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Crea un Perfil Destacado con Precisión Basada en IA
            </h2>
            <p className="text-gray-700 mb-4">
              Tu perfil no es solo un currículum: es tu marca personal. En nuJOB.AI, te ayudamos a construir un perfil que realmente llame la atención. Nuestra plataforma impulsada por IA afina tus habilidades, amplifica tu experiencia y te pone frente a las personas correctas. Sin relleno, solo resultados.
            </p>
            <p className="text-gray-700 mb-6">
              A través del análisis avanzado de brechas de habilidades, identificamos áreas específicas donde los individuos o equipos pueden mejorar, brindando una claridad sin igual sobre sus necesidades de desarrollo. Las recomendaciones personalizadas de formación garantizan que cada persona siga un camino de aprendizaje adaptado a sus fortalezas y objetivos profesionales, maximizando el compromiso y la retención.
            </p>
            <button
              onClick={scrollToFeatures}
              className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
            >
              Explorar Funcionalidades
              <span className="ml-1">
                <img src="/images/Arrow.png" alt="Icono de flecha" />
              </span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
            <img
              src="/images/JobSearch.png"
              alt="Ilustración de Talento con IA"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Sección de Alineación de Habilidades */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <AlignSkillsSp />
      </div>

      {/* Funcionalidades Clave */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8" ref={featuresRef}>
        <KeyFeaturesSp />
      </div>

      {/* Eficiencia del Tablero */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <DashboardEfficiencySp />
      </div>

      {/* Testimonios */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <TestimonialsSp />
      </div>
    </div>
  );
};

export default JobSearchSp;
