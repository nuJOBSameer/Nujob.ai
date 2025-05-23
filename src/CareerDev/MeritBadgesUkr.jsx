import React from "react";

const MeritBadgesUkr = () => {
  const badges = [
    { src: "/images/badge1.png", alt: "Значок 1" },
    { src: "/images/badge2.png", alt: "Значок 2" },
    { src: "/images/badge3.png", alt: "Значок 3" },
    { src: "/images/badge4.png", alt: "Значок 4" },
    { src: "/images/badge5.png", alt: "Значок 5" },
  ];

  return (
    <div className="bg-[#F1ECEC36] py-12 px-5 md:px-32 text-center">
      <h2 className="text-2xl font-bold text-blue-700">Значки заслуг</h2>
      <p className="text-gray-900 font-medium mt-2 md:px-44">
        Ваші досягнення заслуговують на визнання. Наша система керування значками допомагає підкреслити навички, сертифікати та ключові етапи — роблячи вашу експертизу помітною та незаперечною.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto mt-4">
        Отримуйте та демонструйте – Показуйте значки рекрутерам.
        <br />Будьте в курсі – Сповіщення на базі ШІ про закінчення терміну дії сертифікатів.
        <br />Підвищуйте довіру – Нехай ваші досягнення говорять за вас.
      </p>

      {/* Badge List */}
      <div className="flex justify-center gap-6 mt-8">
        {badges.map((badge, index) => (
          <div key={index} className="w-24">
            <img src={badge.src} alt={badge.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeritBadgesUkr;
