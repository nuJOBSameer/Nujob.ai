"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  NewspaperIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ChartBarIcon,
  LightBulbIcon,
  UsersIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const aboutFeatures = [
  {
    name: "The Company",
    description:
      "Discover how we empower organizations to find top leadership talent and help candidates brand themselves",
    icon: BriefcaseIcon,
    link: "/about",
  },
  {
    name: "Competitive Analysis",
    description:
      "AI technology with a deep understanding of career needs, making the job search process smarter, faster, and more efficient.",
    icon: ChartBarIcon,
    link: "/about",
  },
  {
    name: "Business Model",
    description:
      "At nuJOB AI, we employ a comprehensive and data-driven approach to revolutionize the executive search process.",
    icon: LightBulbIcon,
    link: "/about",
  },
];

const candidateFeatures = [
  {
    name: "Executive Career Path",
    description:
      "Our AI-driven platform helps you craft a standout professional profile.",
    icon: UsersIcon,
  },
  {
    name: "Job Search & Recommendations",
    description:
      "AI-powered tools help you build, develop, and empower your career journey.",
    icon: BriefcaseIcon,
  },
  {
    name: "Career Development & Guidance",
    description:
      "Simplifies career navigation with tools to support success in a competitive job market.",
    icon: LightBulbIcon,
  },
  {
    name: "Resume & Skills Enhancement",
    description:
      "Craft a dynamic profile that boosts your chances in today’s job market.",
    icon: ClipboardDocumentIcon,
  },
];
const RecruitersFeatures = [
  {
    name: "Candidate Pool",
    description:
      "nuJOB.Al helps hiring managers efficiently build and manage a strong candidate pool with...",
    icon: UsersIcon,
  },
  {
    name: "Interview Assessment",
    description:
      "At nuJOB.Al, we transform interviews and assessments with Al, offering live interviews and realistic simulations...",
    icon: DocumentTextIcon,
  },
  {
    name: "Onboarding Development",
    description:
      "nuJOB.Al accelerates success with Al-powered tools for seamless onboarding, skill validation, and...",
    icon: UserPlusIcon,
  },
  {
    name: "Talent Management",
    description:
      "At nuJOB Al, we recruit, develop, and retain top talent through advanced competency detection...",
    icon: MagnifyingGlassIcon,
  },
];

const supportFeatures = [
  {
    name: "Connect with Us",
    description:
      "For any issues with nuJOB.AI, we’re here to provide technical assistance, troubleshooting, and guidance.",
    icon: PhoneIcon,
  },
  {
    name: "Frequently Asked Questions",
    description:
      "Find answers to the most common questions about using nuJOB.AI, career guidance, job search tools, and more.",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Blog",
    description:
      "Stay updated with career tips, job search strategies, and personal growth on our blog.",
    icon: NewspaperIcon,
  },
];

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [candidatesOpen, setCandidatesOpen] = useState(false);
  const [recruitersOpen, setRecruitersOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img src="/images/Logo.png" alt="logo" className="h-10 w-32" />
        </div>
        <div className="hidden lg:flex space-x-10">
          <Link to="/" className="text-gray-900 font-medium">
            Home
          </Link>
          <div
            className="relative z-30"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setTimeout(()=>{
                setAboutOpen(false)
            }, 1000)}
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              About Us{" "}
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {aboutOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                  <div className="grid grid-cols-2 gap-6 col-span-2">
                    {aboutFeatures.map((item, index) => (
                      <Link
                        to={item.link}
                        key={index}
                        className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                      >
                        <item.icon className="h-24 w-24 text-indigo-600" />
                        <div>
                          <p className="text-indigo-600 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative z-30"
            onMouseEnter={() => setCandidatesOpen(true)}
            onMouseLeave={() => setTimeout(()=>{
                setCandidatesOpen(false)
            },1000)}
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              Candidates{" "}
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {candidatesOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center"></div>
              </div>
            )}
          </div>
          <div
            className="relative z-30"
            onMouseEnter={() => setRecruitersOpen(true)}
            onMouseLeave={() => setTimeout(()=>{
                setRecruitersOpen(false)
            },1000)}
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              Recruiters{" "}
              <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {recruitersOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center"></div>
              </div>
            )}
          </div>
          <div
            className="relative z-30"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setTimeout(()=>{
                setSupportOpen(false)
            },1000)}
          >
            <div className="flex items-center text-gray-900 font-medium cursor-pointer">
              Support <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
            </div>
            {supportOpen && (
              <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Features
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-6 items-center"></div>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-900 font-medium">
            Pricing
          </a>
        </div>
        <div>
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full font-medium"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
