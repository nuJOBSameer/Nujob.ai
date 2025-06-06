import React, { useRef } from 'react';
import AboutSection from '../About/AboutSection';
import Benefits from '../About/Benefits';
import ServicesSection from '../About/ServicesSection';
import BottomSp from '../About/BottomSp';
import { Helmet } from "react-helmet";
import AboutSectionSp from '../About/AboutSectionSp';
import BenefitsSectionSp from '../About/BenefitsSp';
import ServicesSectionSp from '../About/ServiceSectionSp';

const AboutSp = () => {
  const benefitsRef = useRef(null);

  const handleScroll = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Acerca de nuJOB.AI | Nuestra Misión y Visión</title>
        <meta
          name="description"
          content="Conozca nuestro compromiso de transformar el mercado laboral enfocándonos en habilidades validadas y procesos de contratación eficientes."
        />
      </Helmet>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between md:px-24 py-10">
          {/* Contenido de texto izquierdo */}
          <div className="max-w-xl text-left px-5 md:px-10">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Encuentra a los líderes adecuados, más rápido
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Contratación impulsada por IA que elimina sesgos, ahorra tiempo y conecta a las empresas con el liderazgo adecuado. Ya sea que estés avanzando en tu carrera o contratando talento de alto nivel, nuJOB.AI hace que el proceso sea inteligente y fluido.
            </p>

            {/* Botón */}
            <button
              onClick={handleScroll}
              className="mt-6 inline-flex items-center px-6 py-3 text-white bg-black rounded-full text-lg font-medium hover:bg-gray-900 transition-all"
            >
              Explora Nuestros Servicios
              <img src='/images/Arrow.png' className="ml-2" alt="Flecha" />
            </button>
          </div>

          {/* Imagen del lado derecho */}
          <div className="mt-12 lg:mt-0 lg:ml-9">
            <img
              src="/images/About.png"
              alt="Ilustración"
              className="w-64 max-w-md"
            />
          </div>
        </div>
      </section>

      <AboutSectionSp />

      {/* 👇 Referencia de desplazamiento */}
      <div ref={benefitsRef}>
        <BenefitsSectionSp />
      </div>

      <ServicesSectionSp />
      <BottomSp />
    </>
  );
};

export default AboutSp;
