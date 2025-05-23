import React from "react";

const KeyFeaturesUkr = () => {
  return (
    <div className="text-center py-12 relative">
      <h2 className="text-2xl font-bold">Ключові функції</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/* Card 1 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="Зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Виявлення прогалин у навичках</h3>
          <p className="text-gray-600 text-sm">
            Визначайте ключові прогалини в навичках вашої команди за допомогою аналізу на базі ШІ, щоб зосередитись на покращенні продуктивності.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="Зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Індивідуальне навчання</h3>
          <p className="text-gray-600 text-sm">
            Отримуйте персоналізовані рекомендації з навчання та спеціальні траєкторії розвитку для кожного співробітника, узгоджені з цілями компанії.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="Зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Результативна аналітика</h3>
          <p className="text-gray-600 text-sm">
            Використовуйте показники ефективності в реальному часі та аналітику, згенеровану ШІ, для ухвалення рішень на основі даних і забезпечення успіху команди.
          </p>
        </div>
      </div>

      {/* Line after the boxes */}
      <div className="w-[1030px] hidden md:flex border-t border-gray-300 mt-8 ml-8"></div>
    </div>
  );
};

export default KeyFeaturesUkr;
