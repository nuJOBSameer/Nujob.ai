import React from 'react';

const MarketUkr = ({ onExploreClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6 mx-auto max-w-5xl mt-12 mb-12">
      {/* Ліва секція контенту */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">
          Будьте готові до ринку з <span className="text-black">nuJOB.AI</span>
        </h2>
        <p className="text-gray-600 text-sm">
          Ваші навички — це ваша валюта, і вони повинні мати цінність. Market Linked Scoring від nuJOB.AI оцінює ваші навички, досвід і сертифікати відповідно до актуальних вимог ринку, надаючи вам конкурентну перевагу завдяки:
        </p>
        <button
          onClick={onExploreClick}
          className="bg-black text-white px-5 py-2 rounded-lg flex items-center md:mx-0 mx-auto space-x-2"
        >
          Дізнатися більше <span>→</span>
        </button>
      </div>

      {/* Права секція зображення */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src="/images/Market.png" alt="Skill Tags" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default MarketUkr;
