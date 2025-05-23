import React, { useState } from "react";

const SkillsSectionUkr = () => {
  const [activeTab, setActiveTab] = useState("upleveling");

  return (
    <div className="flex justify-center py-12 md:px-6 bg-[#F8F9FB]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Розділ підвищення кваліфікації та підтвердження навичок
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "upleveling"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("upleveling")}
          >
            ПІДВИЩЕННЯ НАВИЧОК
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ml-2 ${
              activeTab === "validation"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("validation")}
          >
            ПІДТВЕРДЖЕННЯ НАВИЧОК
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-6 text-left">
          {activeTab === "upleveling" ? (
            <>
              <div className="border-b pb-4 text-center">
                <h3 className="text-blue-600 font-semibold">Аналіз прогалин на основі ШІ</h3>
                <p className="text-gray-600 mt-2">
                  Зрозумійте, на якому рівні ви перебуваєте. Наш ШІ оцінює ваші навички відповідно до ринкових вимог, визначаючи сфери для покращення та допомагаючи зосередитися на важливому.
                </p>
              </div>

              <div className="border-b py-4 text-center">
                <h3 className="text-blue-600 font-semibold">Відібрані навчальні ресурси</h3>
                <p className="text-gray-600 mt-2">
                  Отримуйте доступ до підібраних курсів, галузевих інсайтів та сертифікатів, що відповідають сучасним трендам ринку праці — адже бути актуальним — це стратегія, а не виклик.
                </p>
              </div>

              <div className="pt-4 text-center">
                <h3 className="text-blue-600 font-semibold">Відстеження прогресу</h3>
                <p className="text-gray-600 mt-2">
                  Вимірюйте свій розвиток у реальному часі. Визначайте ключові етапи, корегуйте свій підхід і впевніться, що кожен крок веде вас уперед.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="border-b pb-4 text-center">
                <h3 className="text-blue-600 font-semibold">Оцінка навичок за запитом</h3>
                <p className="text-gray-600 mt-2">
                  Перевірте свої навички за допомогою спеціалізованих, практичних тестів. Покажіть свої сильні сторони та визначте, що робить вас унікальним на сучасному конкурентному ринку праці.
                </p>
              </div>

              <div className="border-b py-4 text-center">
                <h3 className="text-blue-600 font-semibold">Перевірені сертифікати та бейджі</h3>
                <p className="text-gray-600 mt-2">
                  Отримуйте бейджі та сертифікати, підтверджені Nujob, які можна додати до резюме, профілю чи портфоліо — доказ того, що ви не просто маєте навички, а й підтверджені галузевими стандартами.
                </p>
              </div>

              <div className="pt-4 text-center">
                <h3 className="text-blue-600 font-semibold">Порівняння з колегами</h3>
                <p className="text-gray-600 mt-2">
                  Дізнайтеся, як ви виглядаєте на фоні інших. Порівнюйте свої результати з колегами у своїй сфері та отримуйте чітке уявлення про свої сильні сторони та напрямки для зростання.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsSectionUkr;
