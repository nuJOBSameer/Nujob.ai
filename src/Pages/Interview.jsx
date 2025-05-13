import React, { useRef } from "react";
import Reasons from "../Interview/Reasons";
import InterviewSection from "../Interview/InterviewSection";
import { Helmet } from "react-helmet";

const Interview = () => {
  const interviewSectionRef = useRef(null);

  const scrollToInterviewSection = () => {
    if (interviewSectionRef.current) {
      interviewSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Interview | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white pt-24 md:py-12 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex md:flex-row flex-col items-center justify-between">
          {/* Left Text Section */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-blue-700">Interview & Assessment</h2>
            <p className="text-gray-600 mt-4">
              At nuJOB.AI, we revolutionize the interview and assessment process with a streamlined,
              AI-powered approach that saves time and delivers deeper insights. Our platform
              facilitates live, interactive interviews and realistic scenario-based assessments,
              ensuring a comprehensive evaluation of skills and potential. By empowering recruiters
              and candidates with advanced tools, we enable efficient, fair, and data-driven hiring
              decisions that benefit everyone involved.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-black text-white rounded-full flex items-center gap-2"
              onClick={scrollToInterviewSection}
            >
              More Features <span>↗</span>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="max-w-md mt-10 md:mt-0">
            <img
              src="/images/interview.png"
              alt="Resume Enhancement"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <Reasons />
      </div>

      <div ref={interviewSectionRef} className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <InterviewSection />
      </div>
    </>
  );
};

export default Interview;
