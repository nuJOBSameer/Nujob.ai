import { CheckCircleIcon, UsersIcon, ClockIcon, AdjustmentsHorizontalIcon, ScaleIcon, ShieldCheckIcon, LightBulbIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
  
  export default function ServicesSection() {
    const services = [
      {
        title: "AI-Driven Skill Validation",
        description: "Assesses real-world skills, not just certifications.",
        icon: <CheckCircleIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Simulation Interviews",
        description: "Structured, stress-free assessments for Autism & ADHD support.",
        icon: <UsersIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Automated Hiring",
        description: "Reduces time-to-hire with AI-driven screening.",
        icon: <ClockIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Intelligent Job Matching",
        description: "AI matches candidates based on actual skills, eliminating bias.",
        icon: <AdjustmentsHorizontalIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Flexible Assessments",
        description: "Adjustable pacing and alternative formats for diverse needs.",
        icon: <ScaleIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Market-Linked Scoring",
        description: "Ensures skills remain industry-relevant for long-term hiring success.",
        icon: <ShieldCheckIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Integrity & Honesty Detection",
        description: "Evaluates communication & behavior without penalizing neurodivergent traits.",
        icon: <LightBulbIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Personalized Career Guidance",
        description: "Custom coaching for resume, interview, and skill improvement.",
        icon: <AcademicCapIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Seamless Enterprise Integration",
        description: "Secure authentication & AI-driven insights for smarter hiring.",
        icon: <ShieldCheckIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
]
    return (
      <div className="bg-blue-50 py-16 px-8 text-center">
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
  
        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start"
            >
              {service.icon}
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="text-gray-600 text-sm mt-1 text-left">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  