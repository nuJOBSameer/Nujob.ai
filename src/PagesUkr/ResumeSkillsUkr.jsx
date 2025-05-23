import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ResumeBuilderUkr from "../ResumeSkills/ResumeBuilderUkr.jsx";
import ResumeVersionUkr from "../ResumeSkills/ResumeVersionUkr.jsx";
import SkillsSectionUkr from "../ResumeSkills/SkillsSectionUkr.jsx";

const ResumeSkillsUkr = () => {
  const resumeBuilderRef = useRef(null);

  const scrollToBuilder = () => {
    if (resumeBuilderRef.current) {
      resumeBuilderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Оптимізуйте своє резюме</title>
        <meta
          name="description"
          content="Покращуйте своє резюме, щоб підкреслити релевантні досягнення та навички, гарантуючи зацікавленість потенційних роботодавців."
        />
      </Helmet>

      <div className=" max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-between px-5 py-24 md:py-14 md:px-16 bg-white">
        {/* Ліва текстова секція */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-purple-700">
            Формуйте свою кар’єру. Будьте на крок попереду.
          </h2>
          <p className="text-gray-600 mt-4">
            Резюме – це не просто документ, це відображення вашої експертизи. На швидкозмінному ринку праці nuJOB.AI допомагає вам створювати, удосконалювати та персоналізувати резюме, яке помітять. Незалежно від того, чи ви подаєтеся на нову посаду, підвищуєте кваліфікацію чи оптимізуєте свій професійний бренд, наші інструменти гарантують вашу конкурентоспроможність.
          </p>
          <button
            onClick={scrollToBuilder}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
          >
            Ознайомитись з можливостями <span>↗</span>
          </button>
        </div>

        {/* Права секція зображення */}
        <div className="max-w-md">
          <img
            src="/images/Resume.png"
            alt="Покращення резюме"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* ResumeBuilder з рефом */}
      <div ref={resumeBuilderRef}>
        <ResumeBuilderUkr />
      </div>

      <ResumeVersionUkr />
      <SkillsSectionUkr />
    </>
  );
};

export default ResumeSkillsUkr;
