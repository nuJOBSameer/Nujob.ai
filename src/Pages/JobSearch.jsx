import React from "react";
import AlignSkills from "../JobSearch/AllignSkills";
import KeyFeatures from "../JobSearch/KeyFeatures";
import DashboardEfficiency from "../JobSearch/DashboardEfficiency";
import Testimonials from "../JobSearch/Testimonials";
import { Helmet } from "react-helmet";

const JobSearch = () => {
  return (
    <>
    <Helmet>
        <title>Job Search | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
    <section className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-24 md:py-14 bg-white">
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
        <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition">
          Explore Features
          <span className="ml-1"><img src="/images/Arrow.png" alt="" /></span>
        </button>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src="/images/JobSearch.png" alt="AI Talent Illustration" className="w-full max-w-md" />
      </div>
    </section>
    <AlignSkills/>
    <KeyFeatures/>
    <DashboardEfficiency/>
    <Testimonials/>
    </>
  );
};

export default JobSearch;
