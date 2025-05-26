import React from "react";
import OnboardingImage from "/images/Onboarding.png"; // Переконайтеся, що це зображення є у вашому проекті
import { Helmet } from "react-helmet";
import BoxesUkr from "../Onboarding/BoxesUkr";
import SkillsValidationSectionUkr from "../Onboarding/SkillsValidationSectionUkr";
import FeaturesUkr from "../Onboarding/FeaturesUkr";
import KeyFeaturesUkr from "../Onboarding/KeyFeaturesUkr";
import LabsUkr from "../Onboarding/LabsUkr";

const OnBoardUkr = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Ефективне Введення в Посаду</title>
        <meta
          name="description"
          content="Прискорте інтеграцію нових співробітників за допомогою інструментів, що підтверджують навички та забезпечують практичне навчання для плавного переходу."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-24">
        {/* Ліва частина */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#3E57DA]">
            Сприяння Успіху через <br />
            <span className="text-black">Введення в Посаду та Навички</span>
          </h2>
          <p className="text-gray-700 mt-4">
            Прискорте свій шлях до успіху з AI-інструментами, що спрощують
            введення в посаду, підтверджують навички та забезпечують практичні
            заняття. nuJOB.AI гарантує плавний перехід на нові ролі, допомагаючи
            кандидатам і командам розкрити свій повний потенціал через персоналізовані
            рекомендації та розвиток навичок у реальних умовах.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Оптимізуйте Введення Кандидатів за допомогою AI-Точності
          </h3>
          <p className="text-gray-700 mt-2">
            nuJOB.AI спрощує процес введення в посаду, забезпечуючи плавний
            перехід кандидатів на нові ролі завдяки AI-інструментам для управління
            завданнями, навчання та безперебійної інтеграції.
          </p>
        </div>

        {/* Права частина з зображенням */}
        <div className="md:w-1/2">
          <img src={OnboardingImage} alt="Введення в посаду" className="w-full h-auto" />
        </div>
      </div>
      
      <BoxesUkr />
      <SkillsValidationSectionUkr />
      <FeaturesUkr />
      <KeyFeaturesUkr />
      <LabsUkr />
    </>
  );
};

export default OnBoardUkr;
