import React, { useRef } from 'react';
import AboutSection from '../About/AboutSection';
import Benefits from '../About/Benefits';
import ServicesSection from '../About/ServicesSection';
import Bottom from '../About/Bottom';
import { Helmet } from "react-helmet";
const About = () => {
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
              Find the Right Leaders, Faster
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              AI-driven hiring that removes bias, saves time, and connects companies with the right leadership. Whether you’re leveling up your career or hiring top talent, nuJOB.AI makes the process seamless and smart.
            </p>

            {/* Button */}
            <button
              onClick={handleScroll}
              className="mt-6 inline-flex items-center px-6 py-3 text-white bg-black rounded-full text-lg font-medium hover:bg-gray-900 transition-all"
            >
              Explore Our Services
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

      <AboutSection />
      
      {/* 👇 Reference target for scroll */}
      <div ref={benefitsRef}>
        <Benefits />
      </div>

      <ServicesSection />
      <Bottom />
    </>
  );
};

export default About;
