import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import JobMatch from "../Student/JobMatch";
import Education from "../Student/Education";
import Skills from "../Student/Skills";
import EmpowerStudentJourney from "../Student/EmpowerStudentJourney";
import JobMatchUkr from "../Student/JobMatchUkr";
import EducationUkr from "../Student/EducationUkr";
import SkillsUkr from "../Student/SkillsUkr";
import EmpowerStudentJourneyUkr from "../Student/EmpowerStudentJourneyUkr";

const StudentUkr = () => {
  const jobMatchRef = useRef(null);

  const handleScrollToJobMatch = () => {
    jobMatchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Кар'єрні ресурси для студентів</title>
        <meta
          name="description"
          content="Оснащуй себе інструментами та порадами для створення міцного фундаменту кар'єри ще до випуску."
        />
      </Helmet>

      {/* 👇 Full-width background container */}
      <div className="w-full bg-[#EBFDFF] py-24 md:py-16">
        {/* 👇 Centered content container */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-8">
          {/* Left Content */}
          <div className="md:w-[45%] w-full flex flex-col justify-center text-center mt-10 md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Запусти свою кар'єру{" "}
              <span className="text-blue-600">разом із</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                впевненістю
              </span>
            </h2>
            <p className="text-gray-600 text-base mt-6 md:pr-12">
              Забудь про очікування. nuJOB дає тобі інструменти для побудови власного майбутнього — ще до випуску. Розумна, на ШІ, платформа створена для реального використання.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <button
                onClick={handleScrollToJobMatch}
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Дослідити для студентів
              </button>
            </div>

            {/* Avatar Section - Desktop */}
            <div className=" mt-12 hidden md:flex items-center justify-start">
              <img
                src="/images/avatars.png"
                alt="Аватари студентів"
                className="w-16 h-auto mr-3"
              />
              <span className="text-gray-700 text-base md:text-2xl">
                Приєднуйся до 10,000+ студентів, які вже з нами
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-[55%] w-full flex flex-col items-center mt-4 md:mt-0">
            <img
              src="/images/Students.jpeg"
              alt="Студенти"
              className="w-96 h-[500px] object-cover rounded-xl max-w-xl mt-5"
            />

            {/* Avatar Section - Mobile */}
            <div className="mt-6 flex md:hidden items-center justify-center w-full">
              <img
                src="/images/avatars.png"
                alt="Аватари студентів"
                className="w-16 h-auto mr-3"
              />
              <span className="text-gray-700 text-xl text-center">
                Приєднуйся до 10,000+ студентів, які вже з нами
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div ref={jobMatchRef}>
        <JobMatchUkr />
      </div>
      <EducationUkr />
      <SkillsUkr />
      <EmpowerStudentJourneyUkr />
    </>
  );
};

export default StudentUkr;
