import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:ml-28">
          {/* Ліва секція */}
          <div className="max-w-sm">
            {/* Логотип nuJob */}
            <Link to="/">
              <img src="/images/Logos.png" alt="nuJob Logo" className="mb-4" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              nuJOB — ваш надійний партнер у розвитку кар'єри, який використовує передові технології штучного інтелекту, щоб допомогти вам знаходити, удосконалювати та демонструвати свої навички з неперевершеною точністю, ефективністю та персоналізованою підтримкою.
            </p>

            {/* Поле для введення email та кнопка */}
            <div className="flex items-center gap-3 mt-6">
              <form
                action="https://nujob.us15.list-manage.com/subscribe/post?u=01c07448752f301f4df98e73b&amp;id=c60fb3e2d4&amp;f_id=00b20ae0f0"
                method="POST"
                target="_blank"
                className="flex items-center gap-3 mt-6"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Введіть email..."
                  className="w-full bg-transparent border border-gray-600 rounded-full py-2 px-4 text-white outline-none"
                  required
                />
                <button type="submit">
                  <img
                    src="/images/circle-check.png"
                    alt="Надіслати"
                    className="w-10 h-10 cursor-pointer"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Центральні посилання */}
          <div className="flex flex-row flex-wrap gap-10">
            <div>
              <h3 className="font-semibold text-lg mb-2">Швидкі посилання</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/about">
                  <li className="cursor-pointer hover:text-white">Про нас</li>
                </Link>
                <Link to="/terms">
                  <li className="cursor-pointer hover:text-white">Умови та положення</li>
                </Link>
                <Link to="/Privacy">
                  <li className="cursor-pointer hover:text-white">
                    Політика конфіденційності
                  </li>
                </Link>
                <Link to="/Refund">
                  <li className="cursor-pointer hover:text-white">
                    Політика повернення коштів
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Послуги</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/Candidate-Pool">
                  <li className="cursor-pointer hover:text-white">
                    Для рекрутерів
                  </li>
                </Link>
                <Link to="/Career-path">
                  <li className="cursor-pointer hover:text-white">
                    Для шукачів роботи
                  </li>
                </Link>
                <Link to="/Student">
                  <li className="cursor-pointer hover:text-white">
                    Для студентів
                  </li>
                </Link>
                <Link to="/FAQ">
                  <li className="cursor-pointer hover:text-white">Питання та відповіді</li>
                </Link>
                <Link to="/contact">
                  <li className="cursor-pointer hover:text-white">Підтримка</li>
                </Link>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Контакти</h3>
              <p className="text-gray-400">Email: support@nujob.ai</p>
              <p className="text-gray-400">Телефон: +1 (302) 273-8477</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Локація</h3>
              <p className="text-gray-400">
                131 Continental Dr, Suite 305
                Newark, DE 19713, США
              </p>
            </div>
          </div>
        </div>

        {/* Нижня секція */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <img
            src="/images/Logos.png"
            alt="nuJob Logo"
            className="h-10 w-12 md:ml-32 md:mx-0 mx-auto"
          />
          <p>nuJOB © 2025. Всі права захищено.</p>
          <div className="flex space-x-5 md:mt-0 mt-4">
            <FaDiscord className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaYoutube className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}
