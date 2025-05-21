import React, { useState } from "react";

const careerData = [
  {
    title: "Інформаційні технології",
    description: "Знаходьте вакансії у сфері розробки програмного забезпечення, кібербезпеки, науки про дані та інших напрямках. Досліджуйте ШІ, блокчейн і великі дані.",
    video: "/IT.mp4"
  },
  {
    title: "Бухгалтерія",
    description: "Знаходьте найкращі вакансії у сфері бухгалтерії та досліджуйте інновації в галузі ШІ, блокчейну та фінансових технологій.",
    video: "/Accounting.mp4"
  },
  {
    title: "Банківська справа",
    description: "Знаходьте можливості у сфері інвестиційного банкінгу, управління ризиками та фінтеху. Будьте на крок попереду в цифровому банкінгу.",
    video: "/Banking.mp4"
  },
  {
    title: "Охорона здоров’я",
    description: "Відкрийте для себе вакансії в телемедицині, медичній робототехніці та передових технологіях охорони здоров’я.",
    video: "/Healthcare.mp4"
  }
];

const CareerUkr = () => {
  const [active, setActive] = useState(careerData[0]);

  return (
    <div className="py-14 px-4 lg:px-6 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">ГАЛУЗІ</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Досліджуйте <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">кар’єру з підтримкою ШІ</span>
          <br /> у сфері охорони<span className="text-black">здоров’я, бухгалтерії, банкінгу та ІТ</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {careerData.map((item, idx) => {
              const isActive = active.title === item.title;
              const bgColor = isActive ? "bg-[#3E57DA]" : "bg-[#F7F8FF]";
              const textColor = isActive ? "text-white" : "text-blue-600";

              return (
                <div
                  key={idx}
                  onClick={() => setActive(item)}
                  className={`transition-all duration-300 cursor-pointer rounded-xl px-4 py-4 shadow-lg ${bgColor} ${textColor}`}
                >
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              src={active.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerUkr;
