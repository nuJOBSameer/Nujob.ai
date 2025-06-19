import React from "react";
import ExecutiveSearch from "../Career-Path/ExecutiveSearch";
import TopTierCandidates from "../Career-Path/TopTierCandidates";
import ExecutiveServices from "../Career-Path/ExecutiveServices";
import { Helmet } from "react-helmet";
import ExecutiveSearchSp from "../Career-Path/ExecutiveSearchSp";
import TopTierCandidatesSp from "../Career-Path/TopTierCandidatesSp";
import ExecutiveServicesSp from "../Career-Path/ExecutiveServicesSp";

const CareerPathSp = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Oportunidades Ejecutivas</title>
        <meta
          name="description"
          content="Conéctate con roles ejecutivos de alto nivel a través de nuestros servicios especializados de búsqueda, diseñados para posiciones de liderazgo."
        />
      </Helmet>
      <section className="bg-[#f8f9fc] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          {/* Sección de Texto Izquierda */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-4">
              Servicios Ejecutivos que Ofrecen Resultados<br />
              <span className="text-[#1d1d1f]">Precisión Impulsada por IA</span>
            </h2>
            <p className="text-gray-700 mb-6">
              nuJOB.AI se especializa en asegurar ejecutivos de alto nivel, miembros de juntas directivas y líderes de la industria. Nuestro enfoque impulsado por IA garantiza que las empresas consigan talento transformador.
            </p>
            {/* Lista de Beneficios */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <img src="/images/ArrowD.png" alt="Flecha" className="w-5 h-5 mt-1" />
                <p>
                  <span className="font-semibold text-[#0073e6]">Liderazgo de Alto Impacto</span> <br />
                  Encuentra ejecutivos que impulsen un crecimiento real.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/images/ArrowD.png" alt="Flecha" className="w-5 h-5 mt-1" />
                <p>
                  <span className="font-semibold text-[#0073e6]">Contratación Basada en Datos</span> <br />
                  Toma decisiones más inteligentes con información impulsada por IA.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/images/ArrowD.png" alt="Flecha" className="w-5 h-5 mt-1" />
                <p>
                  <span className="font-semibold text-[#0073e6]">Reclutamiento Más Rápido e Inteligente</span> <br />
                  Reduce el tiempo de contratación y asegura lo mejor.
                </p>
              </div>
            </div>
          </div>

          {/* Sección de Imagen Derecha */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/images/CareerPath.png" alt="Perfil Profesional" className="w-full max-w-lg" />
          </div>
        </div>
      </section>
      <ExecutiveSearchSp />
      <TopTierCandidatesSp />
      <ExecutiveServicesSp />
    </>
  );
};

export default CareerPathSp;
