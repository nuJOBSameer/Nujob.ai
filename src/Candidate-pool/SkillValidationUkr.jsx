import React from "react";
import { FaUserCheck, FaClock, FaBriefcase } from "react-icons/fa";

const SkillValidationUkr = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-between bg-white max-w-6xl mx-auto py-14 p-6">
      {/* Ліва частина */}
      <div className="w-full md:w-1/3 space-y-6 pr-6">
        <div className="flex items-start space-x-4 md:mt-0 mt-6">
          <FaUserCheck className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Персоналізовані Поради
            </h3>
            <p className="text-gray-600 text-sm">
              Індивідуальні поради для вашого професійного зростання.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaClock className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Інсайти в Реальному Часі
            </h3>
            <p className="text-gray-600 text-sm">
              Рекомендації на базі ШІ, що підтримують актуальність вашого профілю.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaBriefcase className="text-xl mt-1 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Спрощений Пошук Роботи
            </h3>
            <p className="text-gray-600 text-sm">
              Знаходьте найкращі вакансії на основі ваших навичок та вподобань.
            </p>
          </div>
        </div>
      </div>

      {/* Права частина */}
      <div className="w-full md:w-2/3 pl-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Сервіс Перевірки Навичок на Основі ШІ
        </h2>
        <p className="text-gray-600 text-base mt-4">
          nuJOB.AI дозволяє вам підтверджувати свою експертизу за допомогою
          інтерв'ю та практичних іспитів, що відображають реальні виклики.
          Демонструючи перевірені навички, ваш профіль стає надійнішим та більш
          конкурентоспроможним. Підвищуйте впевненість, здобувайте довіру
          роботодавців і отримуйте позиції, що відповідають вашому потенціалу з
          nuJOB.AI.
        </p>
        <p className="text-gray-600 text-base mt-4">
          nuJOB.AI використовує інсайти на базі ШІ, щоб підкреслити ваші навички,
          досвід і особистий бренд, забезпечуючи привабливість профілю для
          відповідних можливостей і роботодавців. Якщо ви лише починаєте або
          покращуєте наявний профіль, nuJOB.AI допоможе вам вирізнитися на
          конкурентному ринку праці.
        </p>
      </div>
    </div>
  );
};

export default SkillValidationUkr;
