import React from "react";
import Mission from "../Model/Mission";
import Business from "../Model/Business";
import Bottom from "../About/Bottom";
import { Helmet } from "react-helmet";
import MissionSp from "../Model/MissionSp";
import BusinessSp from "../Model/BusinessSp";
import BottomSP from "../About/BottomSp";

const MethodSp = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Nuestro Enfoque Empresarial</title>
        <meta
          name="description"
          content="Descubre cómo nuestra plataforma alinea a los candidatos con las descripciones de trabajo, asegurando un ajuste óptimo basado en habilidades y experiencia."
        />
      </Helmet>

      <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto py-20 px-6">
        {/* Contenido Izquierdo */}
        <div className="w-full md:w-2/3 space-y-4 mt-9">
          <h2 className="text-4xl font-bold text-gray-900">Nuestro Método</h2>
          <p className="text-gray-600 text-base pr-5">
            Validación real de habilidades y creación de oportunidades a través de simulaciones y evaluaciones impulsadas por IA. No solo llenamos vacantes—creamos oportunidades. nuJOB.AI combina conocimientos basados en inteligencia artificial con validación de habilidades en el mundo real, asegurando que el talento sea más que una coincidencia por palabras clave. 
            Al integrar simulaciones, evaluaciones basadas en datos y procesos de selección imparciales, llevamos la contratación más allá del currículum. Aquí, las habilidades se prueban, el potencial se desbloquea y las carreras despegan.
          </p>
        </div>

        {/* Imagen Derecha */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
          <img
            src="/images/Method.png"
            alt="Entrevistas impulsadas por IA"
            className="relative z-10 w-full"
          />
        </div>
      </div>

      <MissionSp />
      <BusinessSp />
      <BottomSP />
    </>
  );
};

export default MethodSp;
