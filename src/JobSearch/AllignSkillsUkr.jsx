import React from "react";

const AlignSkillsUkr = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Аналіз навичок у реальному часі",
      description:
        "ШІ оцінює ваші навички відповідно до актуальних ринкових тенденцій і надає оцінку, що відображає вашу готовність до роботи та конкурентоспроможність."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Відповідність технологіям",
      description:
        "Система оцінювання враховує ваш досвід із сучасними технологіями та пропонує напрями для покращення, щоб підвищити ваш рейтинг."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Розвиток навичок",
      description:
        "Отримуйте цільові рекомендації щодо курсів, блогів і сертифікацій, які підвищать вашу готовність до ринку та допоможуть залишатися затребуваними."
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Динамічне оновлення оцінювання",
      description:
        "Коли ви здобуваєте нові навички чи сертифікати, оцінка NuJob AI Linked Score оновлюється в реальному часі, щоб відобразити ваш актуальний рівень готовності до роботи."
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold">Узгодьте свої навички з ринковими тенденціями</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Оцінюйте свої навички, орієнтуйтесь на ринок і залишайтесь затребуваними завдяки динамічному інструменту оцінювання від nuJOB.AI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg md:text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlignSkillsUkr;
