import React from "react";

const BoxesUkr = () => {
  const skillsData = [
    {
      imgSrc: "/images/Allign1.png",
      title: "Аналіз Співбесіди за допомогою ШІ",
      description: "Оцінює відповіді, інтонацію та залучення.",
    },
    {
      imgSrc: "/images/Allign2.png",
      title: "Перевірка Послідовності Резюме",
      description: "Виявляє невідповідності в досвіді.",
    },
    {
      imgSrc: "/images/Allign3.png",
      title: "Оцінки Довіри та Впевненості",
      description: "Миттєва оцінка рівня надійності.",
    },
    {
      imgSrc: "/images/Allign4.png",
      title: "Детальні Звіти про Найм",
      description: "Чітка аналітика для розумних рішень.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg md:text-left">
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxesUkr;
