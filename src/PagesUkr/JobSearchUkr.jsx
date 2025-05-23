import React, { useRef } from "react";
import AlignSkillsUkr from "../JobSearch/AllignSkillsUkr";
import KeyFeaturesUkr from "../JobSearch/KeyFeaturesUkr";
import DashboardEfficiencyUkr from "../JobSearch/DashboardEfficiencyUkr";
import TestimonialsUkr from "../JobSearch/TestimonialsUkr";
import { Helmet } from "react-helmet";

const JobSearchUkr = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Індивідуальні рекомендації щодо вакансій</title>
        <meta
          name="description"
          content="Отримуйте пропозиції роботи, які відповідають вашим навичкам і вподобанням, спрощуючи пошук ідеальної посади."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white py-24 md:py-14 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Створіть профіль, що вирізняється, з точністю ШІ
            </h2>
            <p className="text-gray-700 mb-4">
              Ваш профіль — це не просто резюме, це ваш особистий бренд. У
              nuJOB.AI ми допомагаємо створити профіль, який дійсно привертає
              увагу. Наша платформа на основі ШІ вдосконалює ваші навички,
              підкреслює досвід і знайомить вас з потрібними людьми. Жодної
              води — лише результат.
            </p>
            <p className="text-gray-700 mb-6">
              Завдяки поглибленому аналізу прогалин у навичках ми визначаємо
              конкретні сфери для покращення у фахівців чи команд, надаючи
              безпрецедентну ясність у потребах розвитку. Індивідуальні
              рекомендації з навчання забезпечують персоналізовану траєкторію
              навчання відповідно до сильних сторін і кар’єрних цілей, що
              максимізує залучення та збереження навичок.
            </p>
            <button
              onClick={scrollToFeatures}
              className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
            >
              Ознайомтесь з функціями
              <span className="ml-1">
                <img src="/images/Arrow.png" alt="Arrow icon" />
              </span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
            <img
              src="/images/JobSearch.png"
              alt="Ілюстрація AI Talent"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* AlignSkills Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <AlignSkillsUkr />
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8" ref={featuresRef}>
        <KeyFeaturesUkr />
      </div>

      {/* Dashboard Efficiency Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <DashboardEfficiencyUkr />
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <TestimonialsUkr />
      </div>
    </div>
  );
};

export default JobSearchUkr;
