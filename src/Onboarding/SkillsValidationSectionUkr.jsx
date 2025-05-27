import React from "react";
import SoftSkillsImage from "/images/OB.png"; // Ensure this image exists in your project folder
import StarIcon from "/images/Star.png"; // Ensure this image exists in your project folder

const SkillsValidationSectionUkr = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-5 py-10">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src={SoftSkillsImage}
          alt="М’які Навички"
          className="w-full h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-[#007CFF]">
          Підтверджуйте та Демонструйте Свої Навички
        </h2>
        <p className="text-gray-700 mt-4">
          У сучасному конкурентному ринку праці підтвердження вашого досвіду виходить за межі простого переліку кваліфікацій. 
          nuJOB.AI дає змогу підтверджувати та демонструвати свої навички за допомогою інноваційних, керованих ШІ інструментів та оцінювань, 
          створених для того, щоб надати вам перевагу у кар’єрі. Наша платформа дозволяє кандидатам продемонструвати свою готовність 
          до реальних викликів, що полегшує рекрутерам і роботодавцям визнати ваш справжній потенціал.
        </p>

        {/* Skill Validation Section */}
        <div className="mt-6 flex items-start">
          <img src={StarIcon} alt="Зірка" className="w-5 h-5 mt-1" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Чому Важливо Підтвердження Навичок?
            </h3>
            <p className="text-gray-700 mt-2">
              Зі зростанням попиту на кваліфікованих фахівців роботодавці все більше зосереджуються на практичному досвіді. 
              Фреймворк підтвердження навичок від nuJOB.AI гарантує, що ваші здібності не лише теоретичні — вони доведені у 
              реальних умовах. Це не тільки підвищує вашу довіру, а й зміцнює впевненість роботодавців, 
              надаючи вам значну перевагу над іншими кандидатами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsValidationSectionUkr;
