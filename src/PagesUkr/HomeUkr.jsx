import React from 'react'
import ServicesUkr from '../home/ServicesUkr'
import BusinessUkr from '../home/BusinessUkr'
import CareerUkr from '../home/CareerUkr'
import ResumeBuilderUkr from '../home/ResumeBuilderUkr'
import BottomUkr from '../About/BottomUkr'
import { Helmet } from "react-helmet";

const HomeUkr = () => {
  return (
    <div className='overflow-x-hidden'>
      <Helmet>
        <title>nuJOB.AI | Elevate Your Career Journey</title>
        <meta
          name="description"
          content=" Discover a smarter approach to career advancement with tools designed to refine your skills and connect you to opportunities that align with your ambitions."
        />
      </Helmet>
      <div className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-40"
        >
          <source src="/hero-desktop2.mp4" type="video/mp4" />
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
      <ServicesUkr />
      <BusinessUkr />
      <CareerUkr />
      <ResumeBuilderUkr />
      <BottomUkr />
    </div>
  )
}

export default HomeUkr