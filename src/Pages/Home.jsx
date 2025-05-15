import React from 'react'
import Navbar from "../Components/Navbar"
import Services from '../home/Services'
import Business from '../home/Business'
import Career from '../home/Career'
import ResumeBuilder from '../home/ResumeBuilder'
import Footer from '../Components/Footer'
import Bottom from '../About/Bottom'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Helmet>
        <title>Home | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
      <div className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          playsInline
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       <video
          autoPlay
          muted
          playsInline
          className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          muted
          playsInline
          className="hidden xl:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Content */}
      </div>
      <Services />
      <Business />
      <Career />
      <ResumeBuilder />
      <Bottom />
    </div>
  )
}

export default Home