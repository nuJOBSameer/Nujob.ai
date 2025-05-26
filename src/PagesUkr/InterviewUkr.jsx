import React, { useRef } from "react";
import Reasons from "../Interview/Reasons";
import InterviewSection from "../Interview/InterviewSection";
import { Helmet } from "react-helmet";
import ReasonsUkr from "../Interview/ReasonsUkr";
import InterviewSectionUkr from "../Interview/InterviewSectionUkr";

const InterviewUkr = () => {
  const interviewSectionRef = useRef(null);

  const scrollToInterviewSection = () => {
    if (interviewSectionRef.current) {
      interviewSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Оптимізовані Співбесіди</title>
        <meta
          name="description"
          content="Використовуйте нашу платформу для ефективного управління співбесідами, отримуючи інсайти в реальному часі та відстежуючи прогрес без зусиль."
        />
      </Helmet>

      {/* Герой секція */}
      <section className="bg-white pt-24 md:py-12 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex md:flex-row flex-col items-center justify-between">
          {/* Ліва текстова частина */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-700">Співбесіди та Оцінювання</h2>
            <p className="text-gray-600 mt-4">
              У nuJOB.AI ми революціонізуємо процес співбесід і оцінювання завдяки
              оптимізованому, підтримуваному ШІ підходу, який економить час і забезпечує
              глибші інсайти. Наша платформа забезпечує проведення живих, інтерактивних
              співбесід та реалістичних оцінювань на основі сценаріїв, що гарантує
              комплексну перевірку навичок і потенціалу. Забезпечуючи рекрутерів та кандидатів
              сучасними інструментами, ми сприяємо ефективним, справедливим і заснованим на
              даних рішенням про найм, які приносять користь усім сторонам.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
              onClick={scrollToInterviewSection}
            >
              Більше Можливостей <span>↗</span>
            </button>
          </div>

          {/* Права частина зображення */}
          <div className="max-w-md mt-10 md:mt-0">
            <img
              src="/images/interview.png"
              alt="Покращення резюме"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Секція можливостей */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <ReasonsUkr />
      </div>

      <div ref={interviewSectionRef} className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <InterviewSectionUkr />
      </div>
    </>
  );
};

export default InterviewUkr;
