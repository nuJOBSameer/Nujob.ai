import React from "react";

const BoxesUkr = () => {
  return (
    <div className="text-center py-12 relative bg-gray-300">
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/* Картка 1 */}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Персоналізовані Рекомендації</h3>
          <p className="text-gray-600 text-sm">
            Керуйте своєю кар'єрою з упевненістю завдяки індивідуальним
            рекомендаціям та порадами. Платформа nuJOB.AI на основі ШІ
            аналізує ваші навички, вподобання та цілі, щоб надавати
            персоналізовану підтримку на кожному етапі — від вибору
            можливостей до розвитку професійних навичок.
          </p>
        </div>

        {/* Картка 2 */}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Інформація в Реальному Часі</h3>
          <p className="text-gray-600 text-sm">
            Будьте попереду завдяки практичним рекомендаціям на основі ШІ,
            що надходять миттєво. nuJOB.AI забезпечує зворотній зв’язок у
            реальному часі, допомагаючи визначати сильні сторони і області
            для вдосконалення. Відстежуйте прогрес, контролюйте етапи й приймайте
            обґрунтовані рішення для оптимізації кар’єрного зростання.
          </p>
        </div>

        {/* Картка 3 */}
        <div className="w-80 h-72 p-4 rounded-lg border text-left border-blue-300 bg-white shadow-md">
          <img src="/images/Star.png" alt="зірка" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-bold">Спрощені Процеси</h3>
          <p className="text-gray-600 text-sm">
            Оптимізуйте свій шлях за допомогою інтуїтивних AI-інструментів, що
            роблять складні завдання простими. nuJOB.AI автоматизує і спрощує
            процеси, такі як введення в посаду, оцінка навичок і покращення
            профілю. Завдяки зручному інтерфейсу і покроковим рекомендаціям
            ви зможете зосередитися на досягненні цілей без зайвих турбот.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxesUkr;
