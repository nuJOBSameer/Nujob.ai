import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CheckIcon from "/images/Check.png"; // Asegúrate de que esta imagen exista en tu carpeta del proyecto

const KeyFeaturesSp = () => {
  return (
    <div className="max-w-6xl bg-gray-200 mx-auto flex flex-col md:flex-row justify-between items-center gap-10 py-12 px-14">
      {/* Sección Izquierda */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900">Funciones Clave</h2>
        <p className="text-gray-700 mt-4">
          nuJOB.AI permite a los responsables de contratación y reclutadores construir 
          y gestionar de manera eficiente una base de candidatos de alta calidad adaptada 
          a las necesidades organizativas. Nuestra plataforma agiliza el proceso de selección 
          ofreciendo herramientas basadas en datos que mejoran la toma de decisiones, 
          reducen el tiempo de contratación y aseguran el mejor ajuste para cada puesto.
        </p>
        <Link to="/pricingsp">
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-full flex items-center gap-2">
            Explorar Más <img src="/images/Arrow.png" alt="" />
          </button>
        </Link>
      </div>

      {/* Sección Derecha - Lista de Funciones */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { title: "Aprendizaje Práctico", desc: "Practica programación, redes y tareas específicas del sector." },
          { title: "Retroalimentación Instantánea", desc: "Mejora tus habilidades con información accionable." },
          { title: "Dominio Técnico", desc: "Perfecciona habilidades reales en un entorno seguro." },
          { title: "Credibilidad del Perfil", desc: "Aumenta tu atractivo ante los reclutadores." },
        ].map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={CheckIcon} alt="Check" className="w-5 h-5 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeaturesSp;
