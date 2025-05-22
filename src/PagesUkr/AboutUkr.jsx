import React, { useRef } from 'react';
import AboutSectionUkr from '../About/AboutSectionUkr';
import BenefitsUkr from '../About/BenifitsUkr';
import ServicesSectionUkr from '../About/ServicesSectionUkr';
import BottomUkr from '../About/BottomUkr';
import { Helmet } from "react-helmet";
const AboutUkr = () => {
  const benefitsRef = useRef(null);

  const handleScroll = () => {
    benefitsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Helmet>
        <title>About nuJOB.AI | Our Mission and Vision</title>
        <meta
          name="description"
          content="Learn about our commitment to transforming the job market by focusing on validated skills and efficient hiring processes."
        />
      </Helmet>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between md:px-24 py-10">

          {/* Left Text Content */}
          <div className="max-w-xl text-left px-5 md:px-10">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Знаходьте правильних лідерів швидше
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
             Підбір персоналу на основі ШІ, що усуває упередженість, заощаджує час і з’єднує компанії з правильними лідерами. Незалежно від того, чи ви просуваєте свою кар’єру, чи шукаєте найкращих фахівців — nuJOB.AI забезпечує розумний і безперебійний процес.
            </p>

            {/* Button */}
            <button
              onClick={handleScroll}
              className="mt-6 inline-flex items-center px-6 py-3 text-white bg-black rounded-full text-lg font-medium hover:bg-gray-900 transition-all"
            >
              Ознайомтесь із нашими послугами
              <img src='/images/Arrow.png' className="ml-2" />
            </button>
          </div>

          {/* Right Side Image */}
          <div className="mt-12 lg:mt-0 lg:ml-9">
            <img
              src="/images/About.png"
              alt="Illustration"
              className="w-64 max-w-md"
            />
          </div>

        </div>
      </section>

      <AboutSectionUkr />
      
      {/* 👇 Reference target for scroll */}
      <div ref={benefitsRef}>
        <BenefitsUkr />
      </div>

      <ServicesSectionUkr />
      <BottomUkr />
    </>
  );
};

export default AboutUkr;
