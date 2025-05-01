import React, { useState } from "react";
import { ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("jobseekers");
  const [selectedService, setSelectedService] = useState(null);

  const seekerServices = [
    {
      title: "Skills That Speak (AI Skill Validation)",
      subtitle: "Your Skills. Your Proof. Your Edge.",
      description:
        "We highlight how you think, adapt, and lead especially when it counts. Our AI-driven simulations measure your real-world skills, not just what you remember, but how you perform when it matters.\n\nWhat Sets It Apart:\n• Live, adaptive skill simulations that push beyond textbook knowledge\n• Scenario labs with real-time challenges, zero hand-holding\n• Instant feedback that shows how fast you think and how well you execute\n• Visual skill maps that tell recruiters everything your resume can’t\n\nWhy It Matters:\nResults speak louder than buzzwords and we help you showcase them. We turn your skills into your loudest signal.",
      icon: "/images/skill.png",
    },
    {
      title: "AI-Powered Mock Interviews",
      subtitle: "Train Like It’s the Real Thing—Because It Is.",
      description:
        "We simulate interviews that hit you with everything real ones do—pressure, pivots, unpredictability—so you walk in ready to lead, not just speak.\n\nWhat Sets It Apart:\n• Stress-tested mock interviews that adapt to your performance\n• Tactical feedback, not just “tips”\n• Confidence built through practice that mirrors pressure\n\nWhy It Matters:\nYou’re here to lead, to stand out, and to own your success. We sharpen that edge.",
      icon: "/images/Jinterview.png",
    },
    {
      title: "Smart Job Matching",
      subtitle: "Find Work That Moves You Forward.",
      description:
        "We go beyond job descriptions to find opportunities that truly match you and we match you to missions, growth, and future-fit opportunities.\n\nWhat Sets It Apart:\n• Matches based on ambition, not just skills\n• Personalized career pathways that align with your goals\n• Roles designed to grow with you—not hold you back\n\nWhy It Matters:\nA great fit sets the pace for your career. Landing the job is just the start.",
      icon: "/images/recruitment.png",
    },
    {
      title: "Flexible Skill Assessments",
      subtitle: "Learn at Your Pace. Level Up on Your Terms.",
      description:
        "You set the pace. We bring the pressure. Our adaptive assessments flex with you while pushing you to stretch your edge.\n\nWhat Sets It Apart:\n• On-demand, self-paced evaluations\n• Scenario-based tasks with real consequences\n• Feedback that’s brutally honest, not sugar-coated\n\nWhy It Matters:\nControl your growth. Own your evolution. No deadlines—just direction.",
      icon: "/images/business-planing.png",
    },
    {
      title: "Market-Linked Scoring",
      subtitle: "Stay Relevant. Stay in Demand.",
      description:
        "We benchmark your performance against live market data so you’re always on the leading edge, not chasing it.\n\nWhat Sets It Apart:\n• You get real-time scoring based on current industry demands.\n• Your progress is tracked in a way that reflects real-world shifts.\n• Clear, transparent metrics show exactly where you stand.\n• We continuously monitor high-demand skills to keep you future-ready.\n\nWhy It Matters:\nThe market moves fast. Our scores help you move faster. We don’t just show you where you are — we guide you toward where you should be. By identifying the most valuable skills, we recommend courses that help you transition into better opportunities with long-term potential.",
      icon: "/images/speedometer.png",
    },
    {
      title: "Trust Factor (Integrity & Professionalism Validation)",
      subtitle: "Show Character. Not Just Competence.",
      description:
        "Anyone can fake an experience. You can’t fake consistency, reliability, and grit—and our AI knows the difference.\n\nWhat Sets It Apart:\n• Behavioral analysis that reveals true professionalism\n• Trust profiles that outlast job titles\n• Integrity metrics that employers value more than buzzwords\n\nWhy It Matters:\nSkills open doors. Character keeps them open.",
      icon: "/images/honest.png",
    },
    {
      title: "Personalized Career Guidance",
      subtitle: "Your Career. Unmistakably You.",
      description:
        "Forget one-size-fits-all advice. We deliver tailored strategies that help you build not just a career—but a legacy.\n\nWhat Sets It Apart:\n• Custom roadmaps for your next big leap\n• Skill development tied to actual opportunity\n• Guidance that aims you at the future, not just the next job\n\nWhy It Matters:\nYou’re here to lead, grow, and leave a mark. Let’s build a career that backs that up.",
      icon: "/images/tour-guide.png",
    },
  ];


  const recruiterServices = [
    {
      title: "AI-Validated Skills Over Resumes",
      subtitle: "Proof Over Puffery.",
      description:
        "We vet candidates by how they perform—not how they pitch. Real-world tasks. Real-time results.\n\nWhat You Get:\n• Talent proven through live simulations\n• Less time wasted on resume fluff\n• A pipeline full of doers, not talkers\n\nWhy It Matters:\nYou need skill. Not spin. We deliver proof.",
      icon: "/images/skill.png",
    },
    {
      title: "Smarter Interview Prep (Simulations)",
      subtitle: "Candidates Who Show Up Ready to Win.",
      description:
        "Our mock interviews build candidates who thrive under pressure—so you get sharper, more resilient hires from the start.\n\nWhat You Get:\n• Real-time insights into candidate potential\n• Improved communication and critical thinking from day one\n• Fewer weak links, stronger first impressions\n\nWhy It Matters:\nPrepared candidates perform better—and stay longer.",
      icon: "/images/Jinterview.png",
    },
    {
      title: "Automated Hiring, Simplified",
      subtitle: "Fast, Efficient, and Built to Scale.",
      description:
        "From shortlisting to scheduling, our AI automates the busywork so you stay focused on top talent.\n\nWhat You Get:\n• Instant screening and qualification\n• Seamless interview scheduling\n• Faster time-to-hire, fewer drop-offs\n\nWhy It Matters:\nSpeed wins the best candidates. We help you move first.",
      icon: "/images/hiring.png",
    },
    {
      title: "Precision Job Matching",
      subtitle: "Right Fit. Real Impact.",
      description:
        "We match for more than qualifications—we match for fit, mindset, and momentum.\n\nWhat You Get:\n• Deep-fit profiling for culture and mission alignment\n• Talent that grows with your goals\n• Fewer mismatches, more lasting hires\n\nWhy It Matters:\nGreat teams don’t just work together—they build together.",
      icon: "/images/recruitment.png",
    },
    {
      title: "Insightful & Adaptive Assessments",
      subtitle: "See How Talent Responds—Not Just Reacts.",
      description:
        "Static tests tell you what a candidate knows. Ours show you what they do when things get real.\n\nWhat You Get:\n• Evolving assessments under real-world stress\n• Clear insights into decision-making and execution\n• Actionable data—not guesswork\n\nWhy It Matters:\nYou hire for today, but need for tomorrow. We reveal both.",
      icon: "/images/business-planing.png",
    },
    {
      title: "Competitive Benchmarking (Market-Linked Scoring)",
      subtitle: "Hire at the Speed of the Market.",
      description:
        "Our scoring evolves with industry needs, giving you a live view of where candidates truly stand.\n\nWhat You Get:\n• Data-backed rankings aligned to current trends\n• Benchmark visibility to filter top-tier talent fast\n• Metrics that keep your standards future-ready\n\nWhy It Matters:\nHire for the edge, not just the average.",
      icon: "/images/speedometer.png",
    },
    {
      title: "AI-Powered Integrity & Trust Checks",
      subtitle: "Trust Isn’t a Soft Skill—It’s a Core Strength.",
      description:
        "We measure more than skill. We track accountability, resilience, and consistency—so you can build teams that last.\n\nWhat You Get:\n• Behavioral trust scores, built on real actions\n• Reduced hiring risk\n• A culture of accountability from the ground up\n\nWhy It Matters:\nSmart teams are built on trust—not just talent.",
      icon: "/images/honest.png",
    },
    {
      title: "Effortless HR Integration",
      subtitle: "Plug In. Power Up.",
      description:
        "We drop into your current systems without drama, delay, or disruption.\n\nWhat You Get:\n• Quick integration with your HR stack\n• Custom APIs for full pipeline visibility\n• Scalable tools that grow with your hiring needs\n\nWhy It Matters:\nHiring should fuel growth—not stall it.",
      icon: "/images/pattern (1).png",
    },
  ];


  const studentServices = [
    {
      title: "Proven Skills",
      subtitle: "What You Know. Proven. Clear.",
      description:
        "Assessments designed to showcase real abilities. Not just what you remember, but how you apply knowledge in meaningful ways.\n\nWhat Makes It Powerful:\n• Live, industry-aligned assessments that reflect real job expectations.\n• Adaptive testing that adjusts to your skill level for deeper insight.\n• Detailed performance breakdowns to help you grow strategically.\n• Clear reports that employers can trust and understand.\n\nWhy It Works:\nWhen your skills are verified, your profile speaks with confidence. This is your proof, delivered with clarity.",
      icon: "/images/skill.png",
    },
    {
      title: "AI-Powered Interviews",
      subtitle: "Practice Smarter. Perform Stronger.",
      description:
        "Interview simulations powered by AI help you gain confidence, improve communication, and get better with every session.\n\nWhat Makes It Powerful:\n• Realistic, role-specific question sets tailored to your goals.\n• AI-driven feedback that sharpens tone, clarity, and delivery.\n• Safe environments to reduce anxiety and build fluency.\n• Replay features that let you review and track growth over time.\n\nWhy It Works:\nPrepared candidates perform with confidence. Consistent practice makes your next interview feel like second nature.",
      icon: "/images/Jinterview.png",
    },
    {
      title: "Personalized Career Insights",
      subtitle: "Guidance That Fits You. Growth That Moves You.",
      description:
        "Smart recommendations based on your unique strengths and goals, designed to help you move forward with clarity.\n\nWhat Makes It Powerful:\n• Tailored advice driven by your assessments and goals.\n• Career path suggestions that align with your strengths.\n• Progressive insights that adapt as you learn and grow.\n• Actionable next steps to help you move with purpose.\n\nWhy It Works:\nWhen your path aligns with your strengths, you move faster and farther. These insights keep you focused and confident.",
      icon: "/Logo/guidance.png",
    },
    {
      title: "Micro-Credentials",
      subtitle: "Earned Recognition. Real Impact.",
      description:
        "Digital badges that highlight your verified strengths and let employers see exactly what you bring to the table.\n\nWhat Makes It Powerful:\n• Credentials tied directly to your performance.\n• Clear skill categories aligned with job market demand.\n• Easy sharing across resumes, profiles, and LinkedIn.\n• Built-in trust that shows your achievements at a glance.\n\nWhy It Works:\nRecognition empowers progress. Micro-credentials make your strengths visible and valued.",
      icon: "/Logo/credentials.png",
    },
    {
      title: "Resume and Career Coaching",
      subtitle: "Tell Your Story. Plan Your Path.",
      description:
        "Tools and expert support to build a standout resume and guide your long-term career strategy.\n\nWhat Makes It Powerful:\n• Smart resume builders that highlight your real strengths.\n• Customizable templates that reflect your personality and professionalism.\n• Step-by-step coaching aligned with your career stage.\n• Resources to help you grow from job search to career advancement.\n\nWhy It Works:\nYour story matters. With the right tools and support, your next move becomes a confident one.",
      icon: "/Logo/resume.png",
    },
  ];


  const services =
    activeTab === "jobseekers"
      ? seekerServices
      : activeTab === "recruiters"
        ? recruiterServices
        : studentServices;

  return (
    <div className="bg-blue-50 py-16 px-6 md:px-12 text-center">
      <h3 className="text-sm text-gray-600 uppercase flex items-center justify-center">
        <ClockIcon className="w-4 h-4 mr-2" />
        Ultimate Features
      </h3>
      <h2 className="text-4xl font-semibold mt-2">
        Check Out Our{" "}
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mt-6">
        <button
          onClick={() => setActiveTab("jobseekers")}
          className={`px-6 py-2 rounded-full text-sm font-semibold ${activeTab === "jobseekers"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          For Job-seekers
        </button>
        <button
          onClick={() => setActiveTab("recruiters")}
          className={`px-6 py-2 rounded-full text-sm font-semibold ${activeTab === "recruiters"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          For Recruiters
        </button>
        <button
          onClick={() => setActiveTab("students")}
          className={`px-6 py-2 rounded-full text-sm font-semibold ${activeTab === "students"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          For Students
        </button>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(service)}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
          >
            <img src={service.icon} alt="" className="w-10 h-10 mb-2" />
            <h4 className="text-lg font-semibold text-left">{service.title}</h4>
            <p className="text-sm text-gray-600 text-left mt-1">
              {service.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <img src={selectedService.icon} alt="" className="w-12 h-12 mb-4" />
            <h4 className="text-xl font-bold">{selectedService.title}</h4>

            {/* Fix: handle multi-line description */}
            <div className="text-gray-600 text-left mt-2 space-y-2">
              {selectedService.description.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
