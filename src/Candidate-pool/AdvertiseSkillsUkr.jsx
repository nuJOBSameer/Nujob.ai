import React from "react";
import Pool1 from "/images/Pool1.png";
import Star from "/images/Star.png";

const AdvertiseSkillsUkr = () => {
  return (
    <div className="w-full bg-[#F7F5F5] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Ліва секція — зображення */}
        <div className="relative md:flex flex-row items-center justify-center w-full md:w-1/2 hidden">
          <img
            src={Pool1}
            alt="Pool 1"
            className="absolute w-[400px] h-[400px]"
          />
        </div>

        {/* Права секція — контент */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Рекламуйте свої навички та знаходьте топові таланти з{" "}
            <span className="text-blue-600">nuJOB.AI</span>
          </h2>

          <h3 className="mt-6 text-lg font-semibold">Для шукачів роботи</h3>
          <ul className="mt-2 space-y-3 text-gray-700">
            {[
              {
                text: "Покажіть свою експертизу — створіть вражаючий профіль за допомогою ШІ, який підкреслить ваші сильні сторони.",
              },
              {
                text: "Отримуйте відповідні вакансії — отримуйте пропозиції, що відповідають вашим навичкам і кар’єрним цілям.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img src={Star} alt="Star" className="w-4 h-4 mr-2 mt-1" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold">Для рекрутерів</h3>
          <ul className="mt-2 space-y-3 text-gray-700">
            {[
              {
                text: "Знаходьте топових кандидатів швидше — використовуйте розширений пошук на базі ШІ для ефективного підбору персоналу.",
              },
              {
                text: "Оптимізуйте процес — рекомендації на основі ШІ допоможуть ухвалювати точні рішення без здогадок.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <img src={Star} alt="Star" className="w-4 h-4 mr-2 mt-1" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700">
            nuJOB.AI — це ваша універсальна платформа для демонстрації експертизи та зв’язку з провідними роботодавцями,
            а також інструмент для ефективного пошуку талановитих кандидатів.
            Якщо ви професіонал, який прагне виділитися, або рекрутер у пошуку спеціалістів — nuJOB.AI спрощує цей процес завдяки точності ШІ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseSkillsUkr;
