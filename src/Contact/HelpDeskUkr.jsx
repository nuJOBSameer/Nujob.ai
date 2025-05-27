import React from "react";

const HelpDeskUkr = () => {
  return (
    <div className="flex justify-center items-center py-10 p-6">
      <div className="bg-gray-100 p-6 md:flex-row flex-col-reverse items-center rounded-xl shadow-lg flex max-w-5xl w-full">
        {/* Ліва частина — Зображення з блакитною вставкою (частина зображення) */}
        <div className="w-1/3 hidden md:flex">
          <img src="/images/helpdesk.png" alt="Служба підтримки" className="w-full h-auto rounded-lg" />
        </div>

        {/* Права частина — Текстовий вміст */}
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-bold text-gray-900">Служба підтримки nuJOB.AI</h2>
          <p className="text-gray-600 mt-2">
            Наша служба підтримки готова допомогти вам вирішити будь-які проблеми, з якими ви можете зіткнутися під час використання nuJOB.AI.
            Незалежно від того, чи вам потрібна технічна допомога, усунення несправностей або інструкції щодо використання функцій платформи — ми вас підтримаємо.
            Надсилайте заявки, відстежуйте їхній статус і отримуйте швидкі відповіді від нашої відданої команди підтримки.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Основні можливості</h3>
          <ul className="mt-2 space-y-4 text-blue-600">
            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Надіслати заявку на підтримку</a>
                <p className="text-gray-600 text-xs">
                  Швидко повідомляйте про технічні проблеми або запити, надсилаючи заявку. Наша команда оперативно вирішить ваші питання.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Відстежуйте статус заявки</a>
                <p className="text-gray-600 text-xs">
                  Будьте в курсі прогресу щодо вашої заявки. Переглядайте статус у реальному часі та спілкуйтесь з нашою командою до повного вирішення.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Повна база знань</a>
                <p className="text-gray-600 text-xs">
                  Отримуйте доступ до відповідей на поширені питання, навчальних матеріалів та гайдів. Знаходьте рішення самостійно та ефективно використовуйте nuJOB.AI.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskUkr;