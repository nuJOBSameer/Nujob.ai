import { useState } from "react";

export default function ResumeBuilder() {
  const [openSection, setOpenSection] = useState("editing");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen mb-10 md:mb-0 px-6 md:px-16 bg-white">
      {/* Left Side: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/SVG.png"
          alt="Resume Illustration"
          className="w-[80%] md:w-[70%]"
        />
      </div>
      <div className="absolute left-20 mt-52 hidden md:flex">
        <img src="/images/Tablet.png" alt="book" className="w-32" />
      </div>

      {/* Right Side: Text and Accordion */}
      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-sm text-gray-500">✨ HARNESSING AI FOR SUCCESS</p>
        <h1 className="text-4xl font-bold">
          <span className="text-indigo-600">Resume</span> Builder & Editor
        </h1>

        {/* Accordion */}
        <div className="border-t border-gray-300">
          <button
            className="w-full text-left py-4 text-lg font-semibold flex justify-between"
            onClick={() => toggleSection("creation")}
          >
            Resume Creation & Customization
            <span>{openSection === "creation" ? "−" : "+"}</span>
          </button>
        </div>
        <div className="border-t border-gray-300">
          <button
            className="w-full text-left py-4 text-lg font-semibold flex justify-between"
            onClick={() => toggleSection("editing")}
          >
            Resume Editing & Optimization
            <span>{openSection === "editing" ? "−" : "+"}</span>
          </button>
          {openSection === "editing" && (
            <p className="text-gray-600 px-4 pb-4">
              Modify your resume anytime and get AI-driven recommendations to
              improve content, formatting, and relevance. The system recalculates
              your match rate against job descriptions, helping you refine your
              resume for specific applications.
            </p>
          )}
        </div>
        <div className="border-t border-gray-300">
          <button
            className="w-full text-left py-4 text-lg font-semibold flex justify-between"
            onClick={() => toggleSection("versions")}
          >
            Multiple Resume Versions
            <span>{openSection === "versions" ? "−" : "+"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
