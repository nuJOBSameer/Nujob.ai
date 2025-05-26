import React from "react";

const ReasonsUkr = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Індивідуальні рекомендації",
      description:
        "Персоналізовані симуляції та інсайти для конкретних ролей."
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Підвищена точність",
      description:
        "Резюме та оцінки справді відображають ваші здібності та потенціал."
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Інформація в реальному часі",
      description:
        "AI-рекомендації та аналіз продуктивності, щоб тримати вас на курсі."
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <h2 className="text-2xl font-bold">Відповідність Ваших Навичок Ринковим Трендам</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Оцінюйте свої навички, узгоджуйте їх із ринковими трендами та залишайтеся завжди затребуваними за допомогою динамічного інструменту оцінки nuJOB.AI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsUkr;
