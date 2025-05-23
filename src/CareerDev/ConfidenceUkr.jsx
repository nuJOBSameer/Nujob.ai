import React from "react";

const ConfidenceUkr = () => {
  return (
    <div className="text-center py-12 relative">
      <h2 className="text-2xl font-bold">Confidence Score</h2>
      <div className="flex md:flex-row flex-wrap items-center justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Проводьте пробні інтерв’ю з колегою або наставником.
          </h3>
        </div>

        {/** Card 2 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Приєднуйтесь до клубу або майстер-класу з публічних виступів.
          </h3>
        </div>

        {/** Card 3 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Записуйте та переглядайте свої презентації, щоб виявити зони для покращення.
          </h3>
        </div>

        {/** Card 4 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-center border-blue-300 bg-[#F8F2FF] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold text-sm">
            Відвідуйте вебінари або курси з мови тіла та голосової подачі.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceUkr;
