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
    <Navbar/>
    <div className="flex flex-col md:flex-row items-center justify-between bg-white ">
      {/* Left Content */}
      <div className="max-w-lg space-y-4 ml-24">
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            NuJOB.AI
          </span>
        </h1>
        <p className="text-gray-700 text-2xl">Brings You To The New</p>
        <p className="text-3xl font-extrabold">Age Of Hiring</p>

        {/* Call to Action */}
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800">
          Start Free Trial
        </button>
      </div>

      {/* Right Image */}
      <div className="">
        <img
          src="/images/Container.png"
          alt="AI and Human Handshake"
          className="rounded-lg shadow-lg h-[500px] w-[900px]"
        />
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