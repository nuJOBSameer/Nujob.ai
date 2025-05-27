import React, { useState, useEffect } from "react";

const SkillsUkr = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const cards = [
    {
      title: "Конструктор Резюме / Навігатор",
      subtitle: "Створіть ідеальне резюме без досвіду",
      image: "/images/resume-builder.png",
      content: (
        <>
          <p>
            <strong>Конструктор Резюме Навігатор:</strong> Створіть своє ідеальне резюме — без досвіду
          </p>
          <p className="mt-2">
            Готові перетворити потенціал на можливість? З Resume Builder Navigator від nuJOB.AI ви створите резюме, яке справить враження, навіть якщо ви лише починаєте.
            Наш інструмент на базі ШІ допоможе вам крок за кроком виділити свої сильні сторони.
          </p>
          <p className="mt-3 font-bold">Як це працює:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Знайдіть свій шлях</strong> — Визначте свої сильні сторони й зацікавлені галузі через прості запитання.</li>
            <li><strong>Навчайтесь з Avatar AI</strong> — Ваш особистий коуч з ШІ пояснить, як представити себе роботодавцю.</li>
            <li><strong>Створіть ефективне резюме</strong> — Ваша історія перетворюється на професійне резюме без досвіду.</li>
            <li><strong>Особистий бренд</strong> — Поради щодо стилю, гасел і профілів для максимального враження.</li>
            <li><strong>Зростайте розумніше</strong> — Оновлюйте резюме, тренуйтеся до співбесід, вивчайте ключові терміни.</li>
          </ul>
          <p className="mt-3 font-bold">Чому це працює:</p>
          <p>Без плутанини. Без стресу. Лише чіткі дії й миттєві результати. Тисячі студентів вже створюють резюме з nuJOB.AI. Готові до старту?</p>
        </>
      ),
    },
    {
      title: "Тренер з Мок-Інтерв’ю",
      subtitle: "Опануйте співбесіду, як профі",
      image: "/images/mock-interview.png",
      content: (
        <>
          <p>
            <strong>Тренер з Мок-Інтерв’ю:</strong> Станьте профі у співбесідах
          </p>
          <p className="mt-2">
            Пройдіть будь-яку співбесіду з Тренером від nuJOB.AI. ШІ моделює справжні інтерв’ю та дає миттєвий зворотний зв’язок і поради.
          </p>
          <p className="mt-3 font-bold">Як це працює:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Симуляція реальних інтерв’ю</strong> — Виберіть посаду і тренуйтеся на відповідних питаннях.</li>
            <li><strong>Миттєвий зворотний зв’язок</strong> — Аналіз відповідей і підказки щодо покращення.</li>
            <li><strong>Опануйте ключові навички</strong> — Покращуйте комунікацію, впевненість і мову тіла.</li>
          </ul>
          <p className="mt-3 font-bold">Чому це працює:</p>
          <p>Реальна практика — реальні результати. Наш ШІ допоможе вам позбутися хвилювання й стати майстром інтерв’ю.</p>
        </>
      ),
    },
    {
      title: "Підтвердження Навичок",
      subtitle: "Доведіть свої вміння впевнено",
      image: "/images/skill-validation.png",
      content: (
        <>
          <p>
            <strong>Підтвердження Навичок:</strong> Покажіть, на що ви здатні
          </p>
          <p className="mt-2">
            Завдяки nuJOB.AI ви можете підтвердити свої навички навіть без досвіду. Отримайте сертифікат, який довіряють роботодавці.
          </p>
          <p className="mt-3 font-bold">Як це працює:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Пройдіть тестування</strong> — Оберіть напрям, що вам цікавий, і здайте тести.</li>
            <li><strong>Сертифікація</strong> — Отримайте детальний звіт і підтвердження ваших сильних сторін.</li>
            <li><strong>Виділяйтесь</strong> — Додайте перевірені навички до свого резюме чи LinkedIn.</li>
          </ul>
          <p className="mt-3 font-bold">Чому це працює:</p>
          <p>Навички говорять самі за себе. nuJOB.AI допоможе вам вигідно представити себе на ринку праці.</p>
        </>
      ),
    },
  ];

  return (
    <div className="py-20 px-5 md:px-16 bg-gradient-to-b from-[#FFF6FC] to-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">Підтверджуйте свої навички</h2>
      <p className="text-gray-600 text-base mb-10">Покажіть, хто ви є — без прикрас.</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 max-w-xs bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 cursor-pointer"
            onClick={() => setActiveModal(index)}
          >
            <img src={card.image} alt={`${card.title} ілюстрація`} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-[#1A1A1A] font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Модальне вікно */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold hover:text-black"
            >
              ×
            </button>
            <div className="text-left space-y-3 text-sm text-gray-800">
              {cards[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsUkr;
