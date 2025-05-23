import React, { useRef } from "react";

import { Helmet } from "react-helmet";
import MeritBadgesUkr from "../CareerDev/MeritBadgesUkr.jsx";
import ConfidenceUkr from "../CareerDev/ConfidenceUkr.jsx";
import GuidanceUkr from "../CareerDev/GuidanceUkr.jsx";
import MonitorUkr from "../CareerDev/MonitorUkr.jsx";
import TrackInterviewsUkr from "../CareerDev/TrackInterviewsUkr.jsx";

const CareerDevUkr = () => {
  const guidanceRef = useRef(null);

  const scrollToGuidance = () => {
    if (guidanceRef.current) {
      guidanceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Підтримка кар’єрного зростання</title>
        <meta
          name="description"
          content="Отримуйте персоналізовану підтримку для досягнення кар’єрних цілей на основі вашого досвіду та ринкових тенденцій."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-24 md:py-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex md:flex-row flex-col items-center justify-between">
          {/* Left Text Section */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-700">
              Максимізуйте свій кар’єрний ріст
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">
              Візьміть кар’єру під контроль разом із nuJOB.AI
            </h3>
            <p className="text-gray-600 mt-4">
              Ринок праці змінюється швидко — залишайтесь попереду з nuJOB.AI. Ми надаємо інструменти для вдосконалення навичок, відстеження прогресу та виділення серед інших. Підготовка до інтерв’ю, кар’єрне зростання чи формування довіри роботодавців — ми допомагаємо вам керувати своїм майбутнім.
            </p>
            <button
              onClick={scrollToGuidance}
              className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
            >
              Більше функцій <span>↗</span>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="max-w-md mt-8 md:mt-0">
            <img
              src="/images/CareerDev.png"
              alt="Покращення резюме"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Subcomponents wrapped with layout constraints */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <TrackInterviewsUkr />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <MonitorUkr />
      </div>

      <div ref={guidanceRef} className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <GuidanceUkr />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <ConfidenceUkr />
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <MeritBadgesUkr />
      </div>
    </>
  );
};

export default CareerDevUkr;
