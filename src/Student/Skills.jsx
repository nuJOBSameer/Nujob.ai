import React, { useState } from "react";

const Skills = () => {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      title: "Resume Builder/ Navigator",
      subtitle: "Build Your Dream Resume, No Experience",
      image: "/images/resume-builder.png",
      content: (
        <>
          <p>
            <strong>Resume Builder Navigator:</strong> Build Your Dream Resume, No Experience Required
          </p>
          <p className="mt-2">
            Ready to turn potential into opportunity? With nuJOB.AI’s Resume Builder Navigator, we help you create a standout resume, even if you’re just starting out.
            Our AI-powered tool acts as your personal career mentor, guiding you step-by-step to craft a resume that highlights your strengths and makes an impact.
            Whether you're still in school or about to take your first career step, we ensure you're ready to impress.
          </p>
          <p className="mt-3 font-bold">How It Works:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Discover Your Path</strong> – Identify your strengths and explore industries you’re passionate about, all through easy, insightful questions.</li>
            <li><strong>Learn with Avatar AI</strong> – Meet your personal AI coach, offering smart lessons on how to talk about your experience and what employers want to see.</li>
            <li><strong>Build a Resume That Works</strong> – Turn your answers into a polished, tailored resume that speaks to your potential—no job experience required.</li>
            <li><strong>Create Your Personal Brand</strong> – Suggests professional styles, taglines, and online profiles to make you stand out from the crowd.</li>
            <li><strong>Grow Smarter</strong> – As you gain new skills, we help you update your resume, practice interviews, and learn industry buzzwords.</li>
          </ul>
          <p className="mt-3 font-bold">Why It Works:</p>
          <p>No confusion. No stress. Just clear, actionable steps and instant results. Thousands of students are already using nuJOB.AI to build resumes that get them noticed. Ready to unlock your career potential? Let’s go.</p>
        </>
      ),
    },
    {
      title: "Mock interview coach",
      subtitle: "Master interview like a Pro",
      image: "/images/mock-interview.png",
      content: (
        <>
          <p>
            <strong>Mock Interview Coach:</strong> Master Interviews Like a Pro
          </p>
          <p className="mt-2">
            Ace any interview with nuJOB.AI’s Mock Interview Coach. Our AI-powered tool simulates real interviews, giving you instant feedback and personalized tips to help you nail your responses.
          </p>
          <p className="mt-3 font-bold">How It Works:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Simulate Real Interviews</strong> – Choose your role and practice with realistic, tailored questions.</li>
            <li><strong>Instant Feedback</strong> – Get insights on your responses and suggestions to improve your delivery.</li>
            <li><strong>Master Key Skills</strong> – Refine your communication, confidence, and body language with every practice session.</li>
          </ul>
          <p className="mt-3 font-bold">Why It Works:</p>
          <p>Real practice, real results. Our AI helps you build confidence, eliminate nerves, and master the art of interview performance. Ready to crush your next interview? Let’s start.</p>
        </>
      ),
    },
    {
      title: "Skill Validation",
      subtitle: "Prove your abilities with confidence",
      image: "/images/skill-validation.png",
      content: (
        <>
          <p>
            <strong>Skill Validation:</strong> Prove Your Abilities with Confidence
          </p>
          <p className="mt-2">
            Show what you can do with nuJOB.AI’s Skill Validation tool. Whether you’re new to the workforce or looking to level up, our AI evaluates your skills, certifying your expertise for employers.
          </p>
          <p className="mt-3 font-bold">How It Works:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Test Your Skills</strong> – Take skill assessments that match your career goals.</li>
            <li><strong>Instant Certification</strong> – Get a detailed report on your strengths, backed by proof employers trust.</li>
            <li><strong>Stand Out to Employers</strong> – Show verified skills on your resume and LinkedIn, giving you a competitive edge.</li>
          </ul>
          <p className="mt-3 font-bold">Why It Works:</p>
          <p>Skills speak louder than words. With nuJOB.AI, validate what you know and showcase it to employers with confidence. Ready to prove your potential? Start validating today.</p>
        </>
      ),
    },
  ];

  return (
    <div className="py-20 px-5 md:px-16 bg-gradient-to-b from-[#FFF6FC] to-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">Validate Your Skills</h2>
      <p className="text-gray-600 text-base mb-10">Show what you’re made of – no fluff.</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 max-w-xs bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 cursor-pointer"
            onClick={() => setActiveModal(index)}
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-[#1A1A1A] font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold hover:text-black"
            >
              ×
            </button>
            <div className="text-left space-y-3 text-sm text-gray-800">
              {cards[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
