import React from "react";
import GuidanceImage from "/images/Features.png"; // Ensure this image exists in your project folder

const FeaturesUkr = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-10">
      {/* Правий блок — Список функцій */}
      <div className="md:w-1/2 space-y-6 md:ml-14">
        <h2 className="text-3xl font-bold">Функції</h2>
        {[
          {
            title: "Практичні Симуляції",
            description: "Сценарії реальних робочих ситуацій, керовані ШІ.",
            color: "border-pink-500 text-blue-600",
          },
          {
            title: "Оцінювання за Ролями",
            description: "Адаптовано під галузі та технології.",
            color: "border-blue-500 text-blue-600",
          },
          {
            title: "Миттєвий Зворотний Зв’язок",
            description: "Інсайти в реальному часі для покращення.",
            color: "border-purple-500 text-blue-600",
          },
          {
            title: "Надійність Профілю",
            description: "Підвищуйте привабливість для рекрутерів.",
            color: "border-purple-500 text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border p-2 rounded-md shadow-md ${item.color} bg-[#F8F2FF]`}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Лівий блок — Зображення */}
      <div className="md:ml-20 w-80 md:w-1/2">
        <img
          src={GuidanceImage}
          alt="Ілюстрація Функцій"
          className="h-96 w-96"
        />
      </div>
    </div>
  );
};

export default FeaturesUkr;
