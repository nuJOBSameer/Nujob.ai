import React from "react";
import GuidanceImage from "/images/Talent2.png"; // Ensure this image exists in your project folder

const GuidanceSectionUkr = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-10 px-5">
      {/* Left Side - Full Image */}
      <div className="md:w-1/2">
        <img
          src={GuidanceImage}
          alt="Керівництво"
          className=""
        />
      </div>

      {/* Right Side - Features List */}
      <div className="md:w-1/2 space-y-6">
        {[
          {
            title: "Персоналізоване Керівництво",
            description:
              "Отримуйте поради, спеціально адаптовані до ваших карʼєрних цілей, щоб приймати впевнені та обґрунтовані рішення.",
            color: "border-pink-500 text-blue-600",
          },
          {
            title: "Інсайти в Режимі Реального Часу",
            description:
              "Будьте на крок попереду з постійними рекомендаціями на основі ШІ, що адаптуються до вашого прогресу та амбіцій.",
            color: "border-blue-500 text-blue-600",
          },
          {
            title: "Спрощений Пошук Роботи",
            description:
              "Заощаджуйте час і зусилля — ШІ підбирає найкращі вакансії відповідно до ваших навичок, вподобань і карʼєрного шляху.",
            color: "border-purple-500 text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border p-4 rounded-md shadow-md ${item.color} bg-[#F8F2FF]`}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidanceSectionUkr;
