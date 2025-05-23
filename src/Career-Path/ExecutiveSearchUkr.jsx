import React from "react";

const ExecutiveSearchUkr = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/CareerPath1.png"
              alt="Візуалізація пошуку керівників"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl mt-5 md:mt-0 font-bold text-indigo-700">
              Залучайте топ-таланти з допомогою ексклюзивного пошуку керівників на базі ШІ
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              У nuJOB.AI ми використовуємо потужність передових технологій ШІ, щоб з’єднати вашу
              організацію з керівниками найвищого рівня. Наші послуги з пошуку керівників виходять
              за межі традиційного рекрутингу, пропонуючи аналітику на основі даних і точне
              зіставлення, щоб ваше наступне керівне призначення ідеально відповідало вашим потребам.
              Незалежно від того, чи заповнюєте ви ключову керівну позицію, чи плануєте стратегічне
              зростання, наші передові інструменти оптимізують процес найму, заощаджуючи час і ресурси
              та забезпечуючи видатні результати. Довірте ШІ підвищення ефективності пошуку керівників
              і виведіть успіх вашої компанії на новий рівень.
            </p>

            {/* Benefits Section */}
            <div className="mt-6 shadow-xl p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">Переваги</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <li className="flex items-start">
                  <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mr-2" />
                  <span>
                    <strong>Ефективний пошук топ-талантів:</strong> Інструменти ШІ швидко знаходять кваліфікованих керівників
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mr-2" />
                  <span>
                    <strong>Індивідуальне зіставлення кандидатів:</strong> Підбір на основі навичок і лідерських якостей
                  </span>
                </li>
                <li className="flex items-start">
                  <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mr-2" />
                  <span>
                    <strong>Покращена оцінка за допомогою аналітики ШІ:</strong> Аналізуйте профілі для прийняття кращих рішень щодо найму
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearchUkr;
