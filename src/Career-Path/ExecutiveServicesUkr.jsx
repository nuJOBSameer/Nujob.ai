import React from "react";

const ExecutiveServicesUkr = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-600">
          Огляд послуг для керівників
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
          У nuJOB.AI ми спеціалізуємося на пошуку керівників вищої ланки за допомогою ШІ — для C-рівня, членів ради директорів і топ-кандидатів. Наша платформа з’єднує вашу організацію з елітними талантами, забезпечуючи правильне лідерство для зростання та успіху.
        </p>

        <div className="flex flex-col md:flex-row items-center mt-5 gap-8">
          {/* Ліва частина: Переваги */}
          <div className="flex-1 space-y-4">
            <FeatureBox
              title="Лідерство з високим впливом"
              description="Забезпечте керівників, які досягають стратегічного зростання та вимірюваних результатів."
            />
            <FeatureBox
              title="Технічний найм на основі даних"
              description="Приймайте зважені рішення завдяки детальній аналітиці кандидатів."
            />
            <FeatureBox
              title="Швидкий найм"
              description="Прискорений процес пошуку для оперативного й ефективного закриття керівних посад."
            />
          </div>

          {/* Права частина: Зображення */}
          <div className="flex-1 relative flex justify-center">
            <img
              src="/images/executive-services.png"
              alt="Послуги для керівників"
              className="h-96 w-96"
            />
          </div>
        </div>

        {/* Ціннісна пропозиція */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Ціннісна пропозиція</h3>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <ValueBox
              icon="/images/path1.png"
              title="Персоналізовані рекомендації"
              description="Індивідуальні поради для вашого кар’єрного зростання."
              hasBorder={true}
            />
            <ValueBox
              icon="/images/path2.png"
              title="Актуальна аналітика"
              description="Рекомендації на основі ШІ підтримують ваш профіль у тренді."
              hasBorder={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ title, description }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-pink-100 to-white border border-pink-300 rounded-lg flex items-start gap-3
                    hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src="/images/Star.png" alt="Зірка" className="w-5 h-5 mt-1" />
      <div>
        <h4 className="text-indigo-600 font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ValueBox = ({ icon, title, description, hasBorder }) => {
  return (
    <div className={`flex items-start gap-3 ${hasBorder ? "md:border-r" : ""} border-gray-400 pr-3`}>
      <span className="text-2xl pl-3">
        <img src={icon} alt="" />
      </span>
      <div>
        <h4 className="text-black font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExecutiveServicesUkr;
