import React, { useState } from "react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillsData = [
    {
      id: "resume",
      imgSrc: "/images/resumeicon.png",
      title: "Resume Builder/Navigator",
      description: "Build Your Dream Resume, No Experience Required",
      details: (
        <>
          <p className="mb-2"><strong>Ready to turn potential into opportunity?</strong> With nuJOB.AI’s Resume Builder Navigator, we help you create a standout resume, even if you’re just starting out.</p>
          <p className="mb-2">Our AI-powered tool acts as your personal career mentor, guiding you step-by-step to craft a resume that highlights your strengths and makes an impact. Whether you're still in school or about to take your first career step, we ensure you're ready to impress.</p>
          <p className="font-bold mt-4">How It Works:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Discover Your Path –</strong> Identify your strengths and explore industries you’re passionate about.</li>
            <li><strong>Learn with Avatar AI –</strong> Your AI coach teaches you how to express your experiences effectively.</li>
            <li><strong>Build a Resume That Works –</strong> Converts your answers into a powerful resume.</li>
            <li><strong>Create Your Personal Brand –</strong> Suggests styles, taglines, and profiles to stand out.</li>
            <li><strong>Grow Smarter –</strong> Keep improving your resume and skills over time.</li>
          </ul>
          <p className="font-bold mt-4">Why It Works:</p>
          <p>No confusion. No stress. Just clear, actionable steps and instant results. Thousands of students are already using nuJOB.AI to build resumes that get them noticed. Ready to unlock your career potential? Let’s go.</p>
        </>
      ),
    },
    {
      id: "mock",
      imgSrc: "/images/Jinterview.png",
      title: "Mock Interview Coach",
      description: "Master Interviews Like a Pro",
      details: (
        <>
          <p><strong>Ace any interview</strong> with nuJOB.AI’s Mock Interview Coach. Our AI-powered tool simulates real interviews, giving you instant feedback and personalized tips to help you nail your responses.</p>
          <p className="font-bold mt-4">How It Works:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Simulate Real Interviews –</strong> Practice with tailored questions.</li>
            <li><strong>Instant Feedback –</strong> Get suggestions to improve.</li>
            <li><strong>Master Key Skills –</strong> Refine communication and confidence.</li>
          </ul>
          <p className="font-bold mt-4">Why It Works:</p>
          <p>Real practice, real results. Our AI helps you build confidence, eliminate nerves, and master the art of interview performance. Ready to crush your next interview? Let’s start.</p>
        </>
      ),
    },
    {
      id: "validation",
      imgSrc: "/images/skill.png",
      title: "Skill Validation",
      description: "Prove Your Abilities with Confidence",
      details: (
        <>
          <p><strong>Show what you can do</strong> with nuJOB.AI’s Skill Validation tool. Our AI evaluates your skills, certifying your expertise for employers.</p>
          <p className="font-bold mt-4">How It Works:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Test Your Skills –</strong> Take assessments tailored to your career goals.</li>
            <li><strong>Instant Certification –</strong> Get reports backed by employer-trusted validation.</li>
            <li><strong>Stand Out to Employers –</strong> Add verified skills to your resume and LinkedIn.</li>
          </ul>
          <p className="font-bold mt-4">Why It Works:</p>
          <p>Skills speak louder than words. Validate your strengths and showcase them with confidence. Ready to prove your potential? Start validating today.</p>
        </>
      ),
    }
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 text-center relative">
      <h2 className="text-2xl font-bold mb-2">Validate Your Skills</h2>
      <h1 className="text-xl mb-10">Show what you’re made of—no fluff.</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg md:text-left hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={() => setActiveSkill(skill)}
          >
            <img src={skill.imgSrc} alt={skill.title} className="w-12 h-12 my-4 mx-auto md:mx-0" />
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="text-gray-600 text-lg mt-2">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold mb-4">{activeSkill.title}</h2>
              <button
                className="text-gray-600 hover:text-blue-500 text-2xl leading-none"
                onClick={() => setActiveSkill(null)}
              >
                &times;
              </button>
            </div>
            <div className="text-left text-gray-700 space-y-3 text-base">
              {activeSkill.details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
