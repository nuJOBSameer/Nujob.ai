import React, { useRef } from "react";
import AlignSkills from "../JobSearch/AllignSkills";
import KeyFeatures from "../JobSearch/KeyFeatures";
import DashboardEfficiency from "../JobSearch/DashboardEfficiency";
import Testimonials from "../JobSearch/Testimonials";
import { Helmet } from "react-helmet";

const JobSearch = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>nuJOB.AI | Tailored Job Recommendations</title>
        <meta name="description" content="Receive job suggestions that align with your skills and preferences, streamlining your search for the ideal position." />
      </Helmet>


      {/* Hero Section */}
      <section className="bg-white py-24 md:py-14 px-5 md:px-8">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Build a Standout Profile with AI-Powered Precision
            </h2>
            <p className="text-gray-700 mb-4">
              Your profile isn’t just a resume—it’s your personal brand. At nuJOB.AI, we help you craft a profile that actually gets noticed. Our AI-driven platform sharpens your skills, amplifies your experience, and puts you in front of the right people. No fluff, just results.
            </p>
            <p className="text-gray-700 mb-6">
              Through advanced skill gap analysis, we identify specific areas where individuals or teams can improve, providing unparalleled clarity into development needs. Personalized training recommendations ensure that each individual follows a learning path tailored to their strengths and career goals, maximizing engagement and retention.
            </p>
            <button
              onClick={scrollToFeatures}
              className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
            >
              Explore Features
              <span className="ml-1">
                <img src="/images/Arrow.png" alt="Arrow icon" />
              </span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
            <img
              src="/images/JobSearch.png"
              alt="AI Talent Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* AlignSkills Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <AlignSkills />
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8" ref={featuresRef}>
        <KeyFeatures />
      </div>

      {/* Dashboard Efficiency Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <DashboardEfficiency />
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8">
        <Testimonials />
      </div>
    </div>
  );
};

export default JobSearch;
