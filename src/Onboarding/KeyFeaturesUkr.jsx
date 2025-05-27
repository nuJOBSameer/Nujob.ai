import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CheckIcon from "/images/Check.png"; // Ensure this image exists in your project folder

const KeyFeaturesUkr = () => {
  return (
    <div className="max-w-6xl bg-gray-200 mx-auto flex flex-col md:flex-row justify-between items-center gap-10 py-12 px-14">
      {/* Ліва секція */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900">Ключові Функції</h2>
        <p className="text-gray-700 mt-4">
          nuJOB.AI надає рекрутерам та менеджерам з найму інструменти для
          ефективного формування та керування якісним пулом кандидатів, який
          відповідає потребам організації. Наша платформа спрощує процес
          найму, надаючи інструменти на основі даних для прийняття рішень,
          скорочення часу пошуку та забезпечення ідеального відповідника на
          кожну роль.
        </p>
        <Link to="/pricingua">
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-full flex items-center gap-2">
            Дізнатись більше <img src="/images/Arrow.png" alt="" />
          </button>
        </Link>
      </div>

      {/* Права секція — Сітка функцій */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            title: "Практичне Навчання",
            desc: "Практика з програмування, мереж, завдань з галузевою специфікою.",
          },
          {
            title: "Миттєвий Зворотний Зв’язок",
            desc: "Покращуйте навички завдяки дієвим інсайтам.",
          },
          {
            title: "Технічна Майстерність",
            desc: "Вдосконалюйте навички у безпечному середовищі.",
          },
          {
            title: "Надійність Профілю",
            desc: "Збільшіть свою привабливість для рекрутерів.",
          },
        ].map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={CheckIcon} alt="Позначка" className="w-5 h-5 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeaturesUkr;
