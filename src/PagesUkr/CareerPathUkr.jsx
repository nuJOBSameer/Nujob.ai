import React from "react";
import ExecutiveSearchUkr from "../Career-Path/ExecutiveSearchUkr";
import TopTierCandidatesUkr from "../Career-Path/TopTierCandidatesUkr";
import ExecutiveServicesUkr from "../Career-Path/ExecutiveServicesUkr";
import { Helmet } from "react-helmet";

const CareerPathUkr = () => {
  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Ексклюзивні можливості</title>
        <meta
          name="description"
          content="Підключайтеся до топових керівних посад через наші спеціалізовані послуги пошуку, орієнтовані на лідерські позиції."
        />
      </Helmet>
      <section className="bg-[#f8f9fc] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ексклюзивні послуги, що приносять результати<br />
              <span className="text-[#1d1d1f]">Точність завдяки ШІ</span>
            </h2>
            <p className="text-gray-700 mb-6">
              nuJOB.AI спеціалізується на підборі керівників вищої ланки, членів ради директорів та галузевих лідерів. Наш підхід на основі ШІ забезпечує компаніям справді цінні кадри.
            </p>
            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
                <p>
                  <span className="font-semibold text-[#0073e6]">Лідерство з високим впливом</span> <br />
                  Знаходьте керівників, які забезпечують реальне зростання.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
                <p>
                  <span className="font-semibold text-[#0073e6]">Найм на основі даних</span> <br />
                  Приймайте розумніші рішення завдяки аналітиці ШІ.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <img src="/images/ArrowD.png" alt="Arrow" className="w-5 h-5 mt-1" />
                <p>
                  <span className="font-semibold text-[#0073e6]">Швидкий і розумний підбір персоналу</span> <br />
                  Скоротіть час найму та залучайте найкращих.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/images/CareerPath.png" alt="Profile Showcase" className="w-full max-w-lg" />
          </div>
        </div>
      </section>
      <ExecutiveSearchUkr />
      <TopTierCandidatesUkr />
      <ExecutiveServicesUkr />
    </>
  );
};

export default CareerPathUkr;
