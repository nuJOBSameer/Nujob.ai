import React from "react";

const InterviewSectionUkr = () => {
  return (
    <div className="py-12 px-5 md:px-28">
      {/** First Row **/}
      <div className="md:flex-row flex-col-reverse items-center flex justify-center">
        <img src="/images/Interview1.png" alt="Live Interview" className="w-96 h-96" />

        <div className="ml-7">
          <h2 className="text-blue-600 font-bold text-lg">Живі Співбесіди</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Легко плануйте та проводьте живі співбесіди
          </p>
          <p className="text-gray-600 mt-2">
            nuJOB.AI дає змогу рекрутерам повністю контролювати процес співбесід. Плануйте живі співбесіди безпосередньо на платформі, тісно співпрацюйте з менеджерами з найму та експертами галузі, збираючи потрібних людей для оцінки кандидатів у реальному часі. Чи то індивідуальна співбесіда, чи панельна дискусія — наша платформа забезпечує плавний і спільний досвід, надаючи миттєвий зворотній зв’язок для прийняття обґрунтованих рішень про найм.
          </p>

          <h2 className="text-blue-600 font-bold text-lg mt-6">Інтерв’ю Візор</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Панель керування на основі ШІ для моніторингу та фасилітації
          </p>
          <p className="text-gray-600 mt-2">
            Наш Інтерв’ю Візор, керований ШІ, надає комплексну панель для моніторингу та керування всіма запланованими співбесідами в реальному часі. Отримуйте інсайти, відстежуйте прогрес і навіть сприяйте співбесідам за допомогою AI-аватарів, підвищуючи залученість і ефективність. Дозвольте ШІ оптимізувати процес найму, забезпечуючи безперебійні оцінювання кандидатів та спрощуючи операції.
          </p>
        </div>
      </div>

      {/** Second Row **/}
      <div className="md:flex-row flex-col items-center flex justify-center mt-12">
        <div>
          <h2 className="text-blue-600 font-bold text-lg">AI Симуляція Співбесід</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Підготуйтеся до співбесід за допомогою персоналізованих симуляцій
          </p>
          <p className="text-gray-600 mt-2">
            nuJOB.AI пропонує передові AI-симуляції співбесід, що відтворюють реальні сценарії, адаптовані до ваших цільових ролей. Практикуйтеся у контрольованому, безстресовому середовищі, покращуйте свої відповіді та нарощуйте впевненість для реальних співбесід. ШІ аналізує не лише ваші відповіді, а й поведінку та стиль спілкування, допомагаючи вам удосконалити техніки.
          </p>

          <h2 className="text-blue-600 font-bold text-lg mt-6">AI Віртуальні Співбесіди</h2>
          <p className="font-semibold flex text-gray-800 mt-1">
            <span><img src="/images/Star.png" alt="" className="h-5 w-5 mr-1" /></span> Трансформація процесу створення резюме
          </p>
          <p className="text-gray-600 mt-2">
            nuJOB.AI представляє AI-співбесіди, які формують резюме на основі вашої реальної продуктивності. Ваші відповіді, тон і поведінка аналізуються для створення точного відображення ваших навичок і сильних сторін. Практикуйтеся у власному темпі, отримуйте миттєвий зворотний зв’язок і підвищуйте шанси знайти відповідну роботу.
          </p>
        </div>

        <img src="/images/Interview2.png" alt="AI Interview" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default InterviewSectionUkr;
