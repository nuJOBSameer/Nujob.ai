import React from "react";

const PoolUkr = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Аналіз Навичок у Режимі Реального Часу",
      description:
        "ШІ оцінює ваші навички відповідно до останніх тенденцій ринку, надаючи бал, який відображає вашу готовність до працевлаштування та конкурентоспроможність."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Відповідність Технологіям",
      description:
        "Система оцінювання враховує ваш досвід із популярними технологіями та пропонує напрями для покращення, щоб підвищити ваш бал."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Покращення Навичок",
      description:
        "Отримуйте цільові рекомендації щодо курсів, блогів і сертифікацій, які підвищать вашу готовність до ринку та збережуть ваш попит."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Динамічне Оновлення Оцінки",
      description:
        "Коли ви здобуваєте нові навички або сертифікати, NuJob AI Linked Score оновлюється в реальному часі, щоб відобразити ваш новий рівень готовності."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg md:text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolUkr;
