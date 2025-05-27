import React from "react";

const features = [
  {
    title: "Плата за персональний брендинг",
    description:
      "Покращуйте свою професійну ідентичність за допомогою наших послуг з брендингу. Це включає:",
    points: [
      "Покращені профілі відповідно до стандартів галузі",
      "Резюме та портфоліо, оптимізовані для висвітлення ключових навичок та досягнень",
      "Стратегічний брендинг, щоб виділитися на конкурентному ринку"
    ],
    image: "/images/Price1.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Освітня платформа",
    description:
      "Отримайте доступ до сучасних навчальних ресурсів через нашу платформу. Серед можливостей:",
    points: [
      "Курси щодо останніх тенденцій і найкращих практик у сфері працевлаштування та кар'єрного росту",
      "Сесії з експертами щодо особистого розвитку та професійного зростання",
      "Сертифікації для підсилення вашого профілю та покращення можливостей"
    ],
    image: "/images/Price2.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Реферали та бонуси",
    description:
      "Ми винагороджуємо лояльність і співпрацю. Наша програма рефералів та бонусів пропонує:",
    points: [
      "Знижки на послуги за рекомендацію інших користувачів нашої платформи",
      "Кредити та бонуси за активну участь і довгострокове членство"
    ],
    image: "/images/Price3.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Разові послуги та індивідуальні пакети",
    description:
      "Обирайте з гнучких тарифів, адаптованих до ваших конкретних потреб:",
    points: [
      "Оплата за окрему послугу для точкових рішень",
      "Пакети з комплексними послугами за вигідними цінами"
    ],
    image: "/images/Price4.png",
    arrow: "/images/ArrowD.png"
  }
];


const FeaturesSectionUkr = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-32 mt-10">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col gap-4">
          <img src={feature.image} alt={feature.title} className="w-20  h-20" />
          <h3 className="text-lg font-bold text-blue-700">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
          <ul className="space-y-2">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={feature.arrow} alt="arrow" className="w-4 h-4 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSectionUkr;