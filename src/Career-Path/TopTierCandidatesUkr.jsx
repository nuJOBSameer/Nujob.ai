import React from "react";

const TopTierCandidatesUkr = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold">Сервіс для топ-кандидатів</h2>
      <p className="text-gray-600 mt-2 px-6">
        З’єднуючи елітних професіоналів із високорівневими можливостями, наш сервіс гарантує доступ до
        престижних посад, що відповідають вашій експертизі.
      </p>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="Зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Ексклюзивний доступ</h3>
          <p className="text-gray-600 text-sm">Отримуйте видимість на престижних ринках праці</p>
        </div>

        {/** Card 2 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="Зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Підбір вакансій</h3>
          <p className="text-gray-600 text-sm">
            ШІ підбирає для вас престижні посади, що відповідають вашим навичкам і досвіду
          </p>
        </div>

        {/** Card 3 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="Зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Кар’єрне зростання</h3>
          <p className="text-gray-600 text-sm">Переходьте на керівні посади у престижних компаніях</p>
        </div>
      </div>
    </div>
  );
};

export default TopTierCandidatesUkr;
