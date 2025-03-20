import React from 'react'
import AboutSection from '../About/AboutSection'
import Benefits from '../About/Benefits'
import ServicesSection from '../About/ServicesSection'
import Bottom from '../About/Bottom'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
    <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
      
      {/* Left Text Content */}
      <div className="max-w-xl text-left ml-11">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Revolutionize Your <br /> Executive Search
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Leverage AI to streamline talent matching, eliminate bias, and support 
          data-driven decisions. Discover how we empower organizations to find 
          top leadership talent and help candidates brand themselves.
        </p>
        
        {/* Button */}
        <a 
          href="#" 
          className="mt-6 inline-flex items-center px-6 py-3 text-white bg-black rounded-full text-lg font-medium hover:bg-gray-900 transition-all"
        >
          Explore Our Services
          <img src='/images/Arrow.png' className="ml-2"/>
        </a>
      </div>

      {/* Right Side Image */}
      <div className="mt-12 lg:mt-0 lg:ml-9">
        <img 
          src="/images/About.png" 
          alt="Illustration" 
          className="w-full max-w-md"
        />
      </div>

    </div>
  </section>
  <AboutSection/>
  <Benefits/>
  <ServicesSection/>
  <Bottom/>
  <Footer/>
  </>
  )
}

export default About