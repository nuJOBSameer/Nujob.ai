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
    <div className="relative min-w-full h-screen flex items-center justify-center text-white  ">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dblaulr6d/video/upload/v1743445200/nuJob/qgs2fn4u5mqzhjpghn5e.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute z-10  left-4 top-44">
        <h1 className="text-6xl font-bold leading-tight">
        Resumes Lie.
        </h1>
      </div>

      <div className="absolute z-10  right-4 top-96">
      <h1 className="text-6xl font-bold leading-tight">Labs Don’t</h1>
      </div>

      <div className="relative z-10 text-center mt-16 px-6">
        <h1 className="text-3xl font-semibold leading-tight">
        Welcome to the Era of Proving it
        </h1>
        </div>

    </div>
    <Services/>
    <Business/>
    <Career/>
    <ResumeBuilder/>
    <Bottom/>
  </div>
  )
}

export default Home