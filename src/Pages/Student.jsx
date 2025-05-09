import React from "react";
import JobMatch from "../Student/jobMatch";
import Education from "../Student/Education";
import Skills from "../Student/Skills";
import EmpowerStudentJourney from "../Student/EmpowerStudentJourney";

const Student = () => {
  return (
    <>
    <div className="flex bg-[#EBFDFF] flex-col md:flex-row items-center justify-between px-5 md:px-16 py-24 md:py-16 overflow-hidden">
      
      {/* Left Content */}
      <div className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
          Launch Your Career{" "}
          <span className="text-blue-600">with</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Confidence</span>
        </h2>
        <p className="text-gray-600 text-base mt-6 md:pr-12">
        Skip the waiting game. nuJOB gives you the tools to build your future, your way- before you even graduate.Smart, AI-powered, and built for how you actually work.
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Explore for Student
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex flex-col mt-4 items-center md:items-end">
        <img
          src="/images/Students.png"
          alt="Students"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Avatar Section – appears below image on mobile, inline left on desktop */}
      <div className="flex items-center justify-center md:absolute md:left-16 md:bottom-0 mt-8 md:mt-0">
        <img
          src="/images/avatars.png"
          alt="Student Avatars"
          className="w-20 h-auto mr-3"
        />
        <span className="text-gray-700 text-lg md:text-2xl">
          Join 10,000+ students already on board
        </span>
      </div>
    </div>
    <JobMatch/>
    <Education/>
    <Skills/>
    <EmpowerStudentJourney/>
    </>
  );
};

export default Student;
