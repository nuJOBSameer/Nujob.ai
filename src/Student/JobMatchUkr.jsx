import React from "react";
import { Link } from "react-router-dom";

const JobMatchUkr = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-8">
        
        {/* Ліва частина тексту */}
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug text-[#1A1A1A]">
            Знайди ідеальну <br />
            <span className="text-[#1A1A1A]">роботу для себе</span>
          </h2>
          <p className="text-gray-600 text-base mt-4 md:mt-6 max-w-lg">
            Більше ніякого нескінченного скролінгу. Отримуй вакансії, що відповідають твоїм навичкам та вподобанням.
          </p>

          <div className="mt-8 space-y-4">
            {/* Функція 1 */}
            <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <img src="/images/resume-insights.png" alt="Інсайти резюме" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-semibold">Інсайти резюме на базі ШІ</p>
                <p className="text-sm text-gray-600">щоб виділити тебе серед інших</p>
              </div>
            </div>

            {/* Функція 2 */}
            <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <img src="/images/role-fit.png" alt="Відповідність ролі" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-semibold">Оцінка відповідності ролі</p>
                <p className="text-sm text-gray-600">і підказки щодо прогалин у навичках спеціально для тебе</p>
              </div>
            </div>

            {/* Функція 3 */}
            <div className="flex items-start bg-[#F9F9F9] shadow-md rounded-xl p-4 border border-transparent hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              <img src="/images/career-path.png" alt="Кар'єрний шлях" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-semibold">Рекомендації щодо кар'єрного шляху</p>
                <p className="text-sm text-gray-600">які дійсно мають сенс</p>
              </div>
            </div>
          </div>

          {/* Кнопка */}
          <div className="flex justify-start">
            <button className="mt-10 bg-[#5243C2] hover:bg-[#3732b6] text-white px-6 py-3 rounded-full shadow-md transition">
              <Link to="/pricing">Оптимізувати моє резюме →</Link>
            </button>
          </div>
        </div>

        {/* Права частина — зображення */}
        <div className="md:w-1/2 w-full relative mt-10 md:mt-0">
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/images/jobmatch-people.png"
              alt="Співпраця в команді"
              className="w-full h-auto"
            />

            {/* Верхній лівий бейдж */}
            <div className="absolute top-3 left-3 bg-white shadow px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
              <img src="/images/ball.png" alt="крапка" className="w-2 h-2" /> 98% Рівень відповідності
            </div>

            {/* Нижній правий бейдж */}
            <div className="absolute bottom-7 right-3 bg-white shadow px-3 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
              <img src="/images/star1.png" alt="зірка" className="w-4 h-4" />
              88% Рівень відповідності
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMatchUkr;
