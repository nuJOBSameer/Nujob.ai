import React from "react";

const ResumeBuilderUkr = () => {
  return (
    <div className="flex justify-center py-12 px-6">
      <div className="bg-pink-50 py-12 px-6 text-center md:w-[80%] rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900">Конструктор та редактор резюме</h2>

        <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-8">
          {/* Card 1 */}
          <div className="md:w-96 md:h-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img src="/images/Resume1.png" alt="Конструктор резюме" className="w-12 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900 mt-2">Конструктор резюме</h3>
            <p className="text-gray-600 mt-1">
              Добре структуроване резюме, сумісне з ATS, за кілька хвилин.
            </p>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Зірка" className="w-4 h-4 mr-2" />
                Професійно оформлені шаблони для кожної галузі.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Зірка" className="w-4 h-4 mr-2" />
                Покрокові підказки для підкреслення ваших сильних сторін.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Зірка" className="w-4 h-4 mr-2" />
                Попередній перегляд у реальному часі для ідеального результату перед відправкою.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="md:w-96 md:h-96 p-6 rounded-lg bg-white shadow-lg text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img src="/images/Resume2.png" alt="Редактор резюме" className="w-12 h-12 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-900">Редактор резюме</h3>
            <p className="text-gray-600 mt-2">
              Удосконалюйте структуру, формулювання та позиціонування для досягнення найкращих можливостей.
            </p>
            <ul className="text-gray-700 mt-3 space-y-2">
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Зірка" className="w-4 h-4 mr-2" />
                Рекомендації від ШІ щодо формулювань.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Зірка" className="w-4 h-4 mr-2" />
                Оптимізація ключових слів відповідно до очікувань рекрутерів.
              </li>
              <li className="flex items-center">
                <img src="/images/Star.png" alt="Зірка" className="w-4 h-4 mr-2" />
                Чисте, професійне оформлення, орієнтоване на зручність читання.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderUkr;
