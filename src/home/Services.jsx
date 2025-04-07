import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("upleveling");

  const seekerServices = [
    {
      title: "Skills That Speak (AI Skill Validation)",
      description: "Your talent is more than a resume. Our AI ensures your skills meet industry standards—proving your expertise where it matters.",
      icon: "/images/skill.png",
    },
    {
      title: "AI-Powered Mock Interviews",
      description: "Get real-time feedback with AI-driven simulations that prepare you for success—no stress, just actionable insights.",
      icon: "/images/Jinterview.png",
    },
    {
      title: "Smart Job Matching",
      description: "No more keyword-based mismatches. We connect you with roles that align with your skills and career goals.",
      icon: "/images/recruitment.png",
    },
    {
      title: "Flexible Skill Assessments",
      description: "Learn at your own pace, sharpen your expertise, and showcase your abilities when you're ready.",
      icon: "/images/business-planing.png",
    },
    {
      title: "Market-Linked Scoring",
      description: "Stay ahead of the competition with AI-driven scores benchmarked against real-time industry trends.",
      icon: "/images/speedometer.png",
    },
    {
      title: "Trust Factor (Integrity & Honesty Detection)",
      description: "Beyond technical skills, our AI evaluates behavioral patterns to highlight your reliability and professionalism.",
      icon: "/images/honest.png",
    },
    {
      title: "Personalized Career Guidance",
      description: "AI-powered insights help you navigate in-demand skills and strategic career moves—tailored to your aspirations.",
      icon: "/images/tour-guide.png",
    },
  ];
  

  const recruiterServices = [
    {
      title: "AI-Validated Skills Over Resumes",
      description: "Resumes can be misleading. Our AI ensures candidates meet real-world industry standards.",
      icon: "/images/skill.png",
    },
    {
      title: "Smarter Interview Prep (Simulations)",
      description: "AI-driven mock interviews provide instant feedback, ensuring candidates arrive well-prepared.",
      icon: "/images/Jinterview.png",
    },
    {
      title: "Automated Hiring, Simplified",
      description: "AI-powered screening, shortlisting, and scheduling—so you can focus on hiring the right talent.",
      icon: "/images/hiring.png",
    },
    {
      title: "Precision Job Matching",
      description: "No more guesswork. Our AI connects you with candidates who truly fit your needs.",
      icon: "/images/recruitment.png",
    },
    {
      title: "Insightful & Adaptive Assessments",
      description: "Candidates complete assessments at their convenience, while you receive precise skill insights.",
      icon: "/images/business-planing.png",
    },
    {
      title: "Competitive Benchmarking (Market-Linked Scoring)",
      description: "Evaluate candidates with industry-backed scores that reflect current hiring trends.",
      icon: "/images/speedometer.png",
    },
    {
      title: "AI-Powered Integrity & Trust Checks",
      description: "Go beyond qualifications—our AI evaluates trustworthiness and behavioral patterns.",
      icon: "/images/honest.png",
    },
    {
      title: "Effortless HR Integration",
      description: "Seamlessly plug into your existing HR systems for a smooth and efficient hiring process.",
      icon: "/images/pattern (1).png",
    },
  ];

  const services = activeTab === "upleveling" ? seekerServices : recruiterServices;

  return (
    <div className="bg-blue-50 py-16 px-8 text-center overflow-x-hidden">
      {/* Title */}
      <h3 className="text-sm text-gray-600 uppercase tracking-wide flex justify-center items-center">
        <ClockIcon className="w-4 h-4 mr-2" />
        Ultimate Features
      </h3>
      <h2 className="text-4xl font-semibold mt-2">
        Check Out Our{" "}
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      {/* Tab Switcher */}
      <div className="flex justify-center mt-6">
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
            activeTab === "upleveling"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("upleveling")}
        >
          FOR JOB SEEKERS
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition ml-2 ${
            activeTab === "validation"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("validation")}
        >
          FOR RECRUITERS
        </button>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start"
          >
            <img src={service.icon} alt="" className="w-10 h-10" />
            <h4 className="text-lg font-semibold text-left">{service.title}</h4>
            <p className="text-gray-600 text-sm mt-1 text-left">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
