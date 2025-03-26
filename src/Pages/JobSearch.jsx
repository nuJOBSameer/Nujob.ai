import React from "react";
import AlignSkills from "../JobSearch/AllignSkills";
import KeyFeatures from "../JobSearch/KeyFeatures";
import DashboardEfficiency from "../JobSearch/DashboardEfficiency";
import Testimonials from "../JobSearch/Testimonials";

const JobSearch = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-between px-16 py-12 bg-white">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
          Empower Talent with AI Precision
        </h2>
        <p className="text-gray-700 mb-4">
          Transform Growth and Performance with Tailored AI. In today’s fast-evolving landscape, building a capable and adaptable workforce is key to staying ahead. Our AI-powered tools are designed to revolutionize how you develop and empower talent.
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
