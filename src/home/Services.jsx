import { CheckCircleIcon, UsersIcon, ClockIcon, AdjustmentsHorizontalIcon, ScaleIcon, ShieldCheckIcon, LightBulbIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
  
  export default function ServicesSection() {
    const services = [
      {
        title: "AI-Driven Skill Validation",
        description: "Resumes can talk, but skills should prove their worth. Our AI evaluates real-world expertise to ensure candidates meet industry standards with confidence.",
        icon: <CheckCircleIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Simulation Interviews",
        description: "No more guessing what went wrong. Our AI-driven mock interviews prepare you for the real deal with instant, actionable feedback—minus the stress.",
        icon: <UsersIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Automated Hiring",
        description: "Speed meets precision—our AI agents shortlists, screens, and schedules so recruiters can focus on hiring, not hunting.",
        icon: <ClockIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Intelligent Job Matching",
        description: " The job hunt, redefined. Our AI connects candidates with roles that truly fit their skills and ambitions—no more keyword-driven mismatches.",
        icon: <AdjustmentsHorizontalIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Flexible Assessments",
        description: "Learning shouldn’t be rigid. Take assessments at your own pace, sharpen your skills, and showcase your expertise when you’re ready.",
        icon: <ScaleIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Market-Linked Scoring",
        description: "Stay competitive with scores that actually mean something—benchmarked against real-time industry trends to keep you ahead of the curve.",
        icon: <ShieldCheckIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Integrity & Honesty Detection",
        description: "More than just skills—our AI assesses behavioral patterns to ensure candidates bring both talent and trust to the table.",
        icon: <LightBulbIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Personalized Career Guidance",
        description: "Career paths aren’t one-size-fits-all. Get AI-backed insights on in-demand skills and strategic moves tailored to your goals.",
        icon: <AcademicCapIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Seamless Enterprise Integration",
        description: "No headaches, no hassle—our platform plugs right into your existing HR systems, making hiring smoother than ever.",
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
  