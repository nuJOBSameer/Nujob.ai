import React from "react";
import SoftSkillsImage from "/images/OB.png";
import StarIcon from "/images/Star.png";

const SkillsValidationSectionSp = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-10">
      {/* Imagen Izquierda */}
      <div className="md:w-1/2">
        <img
          src={SoftSkillsImage}
          alt="Habilidades Blandas"
          className="w-full h-auto"
        />
      </div>

      {/* Contenido Derecho */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-[#007CFF]">
          Valida y Demuestra tus Habilidades
        </h2>
        <p className="text-gray-700 mt-4">
          En el competitivo mercado laboral actual, demostrar tu experiencia va más allá 
          de enumerar tus calificaciones. nuJOB.AI te permite validar y mostrar tus 
          habilidades mediante herramientas y evaluaciones impulsadas por IA, diseñadas 
          para darte una ventaja en tu carrera. Nuestra plataforma permite a los 
          candidatos demostrar su preparación para desafíos reales, facilitando que los 
          reclutadores y empleadores reconozcan tu verdadero potencial.
        </p>

        {/* Sección de Validación de Habilidades */}
        <div className="mt-6 flex items-start">
          <img src={StarIcon} alt="Estrella" className="w-5 h-5 mt-1" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">
              ¿Por Qué es Importante Validar las Habilidades?
            </h3>
            <p className="text-gray-700 mt-2">
              A medida que crece la demanda de profesionales calificados, los empleadores 
              se enfocan cada vez más en la experiencia práctica. El marco de validación 
              de habilidades de nuJOB.AI garantiza que tus capacidades no sean solo 
              teóricas, sino comprobadas en escenarios reales. Esto no solo mejora tu 
              credibilidad, sino que también genera confianza con los empleadores 
              potenciales, brindándote una ventaja significativa sobre otros candidatos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsValidationSectionSp;
