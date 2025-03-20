import React from 'react'
import Navbar from "../Components/Navbar"
import Services from '../home/Services'
import Business from '../home/Business'
import Career from '../home/Career'
import ResumeBuilder from '../home/ResumeBuilder'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            nuJOB.AI
          </span>{" "}
          Brings You To The New Age Of Hiring
        </h1>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition flex items-center">
          Start Free Trial <span className="ml-2"><img src="/images/ArrowB.png" alt="" /></span>
        </button>
      </div>
    </div>
    <Services/>
    <Business/>
    <Career/>
    <ResumeBuilder/>
    <Footer/>
    </>
  )
}

export default Home