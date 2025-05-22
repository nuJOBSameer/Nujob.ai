import React from "react";
import MissionUkr from "../Model/MissionUkr";
import BusinessUkr from "../Model/BusinessUkr";
import BottomUkr from "../About/BottomUkr";
import { Helmet } from "react-helmet";

const MethodUkr = () => {
  return (
    <>
    <Helmet>
        <title>nuJOB.AI | Our Business Approach</title>
        <meta
          name="description"
          content="Understand how our platform aligns candidates with job descriptions, ensuring optimal fits based on skills and experience."
        />
      </Helmet>
    <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto py-20 px-6">
      {/* Left Content */}
      <div className="w-full md:w-2/3 space-y-4 mt-9">
        <h2 className="text-4xl font-bold text-gray-900">Наш метод</h2>
        <p className="text-gray-600 text-base pr-5">
        Справжня перевірка навичок і створення можливостей завдяки симуляціям та оцінюванням на базі ШІ. Ми не просто закриваємо вакансії — ми створюємо можливості. nuJOB.AI поєднує аналітику на основі ШІ з реальною перевіркою навичок, гарантуючи, що талант — це більше, ніж збіг ключових слів. Завдяки симуляціям, оцінюванням на основі даних та неупередженій оцінці ми виводимо рекрутинг за межі резюме. Тут навички проходять перевірку, потенціал розкривається, а кар’єра злітає вгору.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
        <img 
          src="/images/MethodUkr.png" 
          alt="AI Driven Interviews" 
          className="relative z-10 w-full"
        />
      </div>
    </div>
    <MissionUkr/>
    <BusinessUkr/>
    <BottomUkr/>
    </>
  );
};

export default MethodUkr;
