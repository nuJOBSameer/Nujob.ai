import {
    BriefcaseIcon,
    UserGroupIcon,
    ChartBarIcon,
    ClipboardDocumentCheckIcon,
    DocumentTextIcon,
    UsersIcon,
    HandRaisedIcon,
    SparklesIcon,
    ClockIcon,
  } from "@heroicons/react/24/outline";
  
  export default function ServicesSection() {
    const services = [
      {
        title: "Career Development And Guidance",
        description: "Receive expert advice and resources to grow your career with guidance.",
        icon: <BriefcaseIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Talent Management",
        description: "Maximize employee potential through effective talent management strategies and tools.",
        icon: <UserGroupIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Executive Career Path",
        description: "We help professionals chart their executive career trajectory for lasting success.",
        icon: <ChartBarIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Interview And Assessments",
        description: "Prepare for interviews with tailored guidance and mock assessments to boost your chances.",
        icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Resume And Skill Enhancements",
        description: "Receive expert advice and resources to grow your career with guidance.",
        icon: <DocumentTextIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Candidate Pool",
        description: "Maximize employee potential through effective talent management strategies and tools.",
        icon: <UsersIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "Autism Support",
        description: "Connect autistic professionals with structured jobs that fit their strengths.",
        icon: <HandRaisedIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
      {
        title: "ADHD-Friendly Careers",
        description: "Help ADHD professionals find flexible, engaging jobs where they thrive.",
        icon: <SparklesIcon className="w-8 h-8 text-indigo-500 mb-3" />,
      },
    ];
  
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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start"
            >
              {service.icon}
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  