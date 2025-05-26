import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import WhyChooseNuJobUkr from "../Talent/WhyChooseNuJobUkr";
import JobOffersSectionUkr from "../Talent/JobOffersSectionUkr";
import BoxesUkr from "../Talent/BoxesUkr";
import GuidanceSectionUkr from "../Talent/GuidanceSectionUkr";

const TalentUkr = () => {
  const boxesRef = useRef(null);

  const scrollToBoxes = () => {
    if (boxesRef.current) {
      boxesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Управління та Розвиток Талантів</title>
        <meta
          name="description"
          content="Впроваджуйте стратегії розвитку та утримання талантів, зосереджуючись на безперервному зростанні та оптимізації результатів."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-between py-24 md:py-12 px-5 md:px-16 bg-white">
        {/* Left Text Section */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#514DE0]">
            Ефективне Управління Талантами
          </h2>
          <p className="text-gray-600 mt-4 pr-8">
            Знаходьте, оцінюйте та наймайте найкращих спеціалістів за допомогою аналітики на основі ШІ та реалістичних оцінювань. 
            Приймайте швидші рішення — отримуйте кращі результати.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
            onClick={scrollToBoxes}
          >
            Дізнатись більше <span>↗</span>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="max-w-md">
          <img
            src="/images/Talent.png"
            alt="Покращення Резюме"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Pass scroll function to JobOffersSection */}
      <JobOffersSectionUkr onScrollToBoxes={scrollToBoxes} />

      <WhyChooseNuJobUkr />

      {/* Scroll target */}
      <div ref={boxesRef}>
        <BoxesUkr />
      </div>

      <GuidanceSectionUkr />
    </>
  );
};

export default TalentUkr;
