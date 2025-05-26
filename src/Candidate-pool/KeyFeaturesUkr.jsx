import React from "react";

const KeyFeaturesUkr = () => {
  const features = [
    {
      title: "Оцінка навичок у реальному часі",
      description: "Отримайте рейтинг готовності до роботи на основі ринкових тенденцій.",
    },
    {
      title: "Вирівнювання з технологіями",
      description:
        "Визначайте зони для покращення завдяки аналітиці популярних інструментів і технологій.",
    },
    {
      title: "Рекомендації з покращення навичок",
      description:
        "Отримуйте персоналізовані поради щодо сертифікацій, курсів та лабораторних завдань.",
    },
    {
      title: "Динамічне оновлення балів",
      description:
        "Відображає ваш ріст у міру здобуття нових навичок або сертифікатів.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Ключові можливості</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-[#F9F5FF] to-[#F5F3FF] shadow-lg rounded-lg p-6 text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="text-orange-500 font-bold mr-1">*AI</span>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeaturesUkr;
