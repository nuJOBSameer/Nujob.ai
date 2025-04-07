import React from 'react'
import Navbar from "../Components/Navbar"
import Services from '../home/Services'
import Business from '../home/Business'
import Career from '../home/Career'
import ResumeBuilder from '../home/ResumeBuilder'
import Footer from '../Components/Footer'
import Bottom from '../About/Bottom'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dblaulr6d/video/upload/v1744028209/nuJob/lrk90wsh7dqumk9bajzg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          playsInline
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dblaulr6d/video/upload/v1744028906/nuJob/ctkauflsy0fx3eyuna3o.mp4" type="video/mp4" />
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