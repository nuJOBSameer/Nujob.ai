import React from "react";

const CustomerSupportUkr = () => {
  return (
    <div className="flex justify-center items-center py-10 p-6">
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg md:flex-row flex-col items-center flex max-w-5xl w-full">
        {/* Ліва частина — Текстовий вміст */}
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-bold text-gray-900">Підтримка клієнтів на nuJOB.AI</h2>
          <p className="text-gray-600 mt-2">
            Наша команда підтримки клієнтів прагне забезпечити безперебійну роботу на платформі nuJOB.AI.
            Якщо у вас виникли питання щодо облікового запису, вам потрібна допомога з подачею заявок на вакансії
            або ви зіткнулися з технічними проблемами — ми надамо персоналізоване рішення. Звертайтесь до нас у будь-який час.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Основні можливості</h3>
          <ul className="mt-2 space-y-4 text-blue-600">
            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Пряма підтримка від нашої команди</a>
                <p className="text-gray-600">
                  Персоналізована допомога з технічними проблемами або запитаннями відповідно до ваших потреб.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Кілька каналів підтримки</a>
                <p className="text-gray-600">
                  Зв'яжіться з нами через email, онлайн-чат або телефон. Оберіть зручний для вас спосіб, і ми допоможемо.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Експертні поради</a>
                <p className="text-gray-600">
                  Отримайте допомогу з підбором вакансій, створенням профілю та використанням функцій платформи від наших експертів.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Права частина — Зображення з блакитною вставкою (частина зображення) */}
        <div className="w-1/3 hidden md:flex">
          <img src="/images/customersupport-image.png" alt="Підтримка клієнтів" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportUkr;
