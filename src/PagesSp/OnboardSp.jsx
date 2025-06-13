import React from "react";
import OnboardingImage from "/images/Onboarding.png"; // Asegúrate de que esta imagen exista en tu carpeta del proyecto
import Boxes from "../Onboarding/Boxes";
import SkillsValidationSection from "../Onboarding/SkillsValidationSection";
import Features from "../Onboarding/Features";
import KeyFeatures from "../Onboarding/KeyFeatures";
import Labs from "../Onboarding/Labs";
import { Helmet } from "react-helmet";
import BoxesSp from "../Onboarding/BoxesSp";
import SkillsValidationSectionSp from "../Onboarding/SkillsValidationSectionSp";
import FeaturesSp from "../Onboarding/FeaturesSp";
import KeyFeaturesSp from "../Onboarding/KeyFeaturesSp";
import LabsSp from "../Onboarding/LabsSp";

const OnBoardSp = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Incorporación Efectiva</title>
        <meta
          name="description"
          content="Acelera la integración de nuevas contrataciones con herramientas que validan habilidades y brindan capacitación práctica para una transición fluida."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-24">
        {/* Contenido Izquierdo */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#3E57DA]">
            Potenciando el Éxito a través de <br />
            <span className="text-black">Incorporación y Habilidades</span>
          </h2>
          <p className="text-gray-700 mt-4">
            Acelera tu camino hacia el éxito con herramientas impulsadas por IA
            que simplifican la incorporación, validan habilidades y ofrecen
            práctica práctica. nuJOB.AI garantiza una transición fluida a
            nuevos roles mientras ayuda a los candidatos y equipos a desbloquear
            su máximo potencial a través de orientación personalizada y
            desarrollo de habilidades reales.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Optimiza la Incorporación de Candidatos con Precisión Impulsada por IA
          </h3>
          <p className="text-gray-700 mt-2">
            nuJOB.AI simplifica el proceso de incorporación, asegurando que los
            candidatos se integren sin problemas a sus roles con herramientas de
            gestión de tareas, capacitación e integración sin fricciones impulsadas por IA.
          </p>
        </div>

        {/* Imagen Derecha */}
        <div className="md:w-1/2">
          <img
            src={OnboardingImage}
            alt="Incorporación"
            className="w-full h-auto"
          />
        </div>
      </div>

      <BoxesSp />
      <SkillsValidationSectionSp />
      <FeaturesSp />
      <KeyFeaturesSp />
      <LabsSp />
    </>
  );
};

export default OnBoardSp;
