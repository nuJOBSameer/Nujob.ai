"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
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
        link: "/Analysis",
    },
    {
        name: "Business Model",
        description:
            "At nuJOB AI, we employ a comprehensive and data-driven approach to revolutionize the executive search process.",
        icon: LightBulbIcon,
        link: "/Method",
    },
];

const candidateFeatures = [
    {
        name: "Executive Career Path",
        description:
            "Our AI-driven platform helps you craft a standout professional profile.",
        icon: UsersIcon,
        link: "/Career-path"
    },
    {
        name: "Job Search & Recommendations",
        description:
            "AI-powered tools help you build, develop, and empower your career journey.",
        icon: BriefcaseIcon,
        link: '/JobSearch'
    },
    {
        name: "Career Development & Guidance",
        description:
            "Simplifies career navigation with tools to support success in a competitive job market.",
        icon: LightBulbIcon,
        link: '/Career-Dev'
    },
    {
        name: "Resume & Skills Enhancement",
        description:
            "Craft a dynamic profile that boosts your chances in today’s job market.",
        icon: ClipboardDocumentIcon,
        link: '/Resume-skills-enhancement'
    },
];
const RecruitersFeatures = [
    {
        name: "Candidate Pool",
        description:
            "nuJOB.Al helps hiring managers efficiently build and manage a strong candidate pool with...",
        icon: UsersIcon,
        link: '/Candidate-Pool'
    },
    {
        name: "Interview Assessment",
        description:
            "At nuJOB.Al, we transform interviews and assessments with Al, offering live interviews and realistic simulations...",
        icon: DocumentTextIcon,
        link: '/Interview'
    },
    {
        name: "Onboarding Development",
        description:
            "nuJOB.Al accelerates success with Al-powered tools for seamless onboarding, skill validation, and...",
        icon: UserPlusIcon,
        link: '/Onboarding'
    },
    {
        name: "Talent Management",
        description:
            "At nuJOB Al, we recruit, develop, and retain top talent through advanced competency detection...",
        icon: MagnifyingGlassIcon,
        link: "/Talent"
    },
];

const supportFeatures = [
    {
        name: "Connect with Us",
        description:
            "For any issues with nuJOB.AI, we’re here to provide technical assistance, troubleshooting, and guidance.",
        icon: PhoneIcon,
        link: '/Contact'
    },
    {
        name: "Frequently Asked Questions",
        description:
            "Find answers to the most common questions about using nuJOB.AI, career guidance, job search tools, and more.",
        icon: QuestionMarkCircleIcon,
        link: "/FAQ"
    },
    {
        name: "Blog",
        description:
            "Stay updated with career tips, job search strategies, and personal growth on our blog.",
        icon: NewspaperIcon,
        link: "/Blogs"
    },
];

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [candidatesOpen, setCandidatesOpen] = useState(false);
    const [recruitersOpen, setRecruitersOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                        onMouseEnter={() => {
                            setAboutOpen(true);
                            setCandidatesOpen(false);
                            setRecruitersOpen(false);
                            setSupportOpen(false);
                        }}
                        onMouseLeave={() => setTimeout(() => setAboutOpen(false), 2000)}
                    >
                        <div className="flex items-center text-gray-900 font-medium cursor-pointer">
                            <Link Link to="/About">About Us</Link>
                            <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
                        </div>
                        {aboutOpen && (
                            <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6"
                            >
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
                                                onClick={() => setAboutOpen(false)}
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
                                    <div className="flex flex-col items-center">
                                        <img src="/images/platform-overview.png" alt="Platform Overview" className="rounded-lg w-full h-auto" />
                                        <p className="text-gray-600 text-sm mt-2">Take a free tour of our platform features</p>
                                        <Link to="/demo" className="text-indigo-600 font-medium mt-1">Book a Demo →</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative z-30"
                        onMouseEnter={() => {
                            setCandidatesOpen(true);
                            setAboutOpen(false);
                            setRecruitersOpen(false);
                            setSupportOpen(false);
                        }}
                        onMouseLeave={() => setTimeout(() => setCandidatesOpen(false), 2000)}
                    >

                        <div className="flex items-center text-gray-900 font-medium cursor-pointer">
                            <Link Link to="/Career-path">Candiates</Link>
                            <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
                        </div>
                        {candidatesOpen && (
                            <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                                    Features
                                </h3>
                                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                                    <div className="grid grid-cols-2 gap-6 col-span-2">
                                        {candidateFeatures.map((item, index) => (
                                            <Link
                                                to={item.link}
                                                key={index}
                                                className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                                                onClick={() => setCandidatesOpen(false)}
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
                                    <div className="flex flex-col items-center">
                                        <img src="/images/platform-overview.png" alt="Platform Overview" className="rounded-lg w-full h-auto" />
                                        <p className="text-gray-600 text-sm mt-2">Take a free tour of our platform features</p>
                                        <Link to="/demo" className="text-indigo-600 font-medium mt-1">Book a Demo →</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative z-30"
                        onMouseEnter={() => {
                            setRecruitersOpen(true);
                            setAboutOpen(false);
                            setCandidatesOpen(false);
                            setSupportOpen(false);
                        }}
                        onMouseLeave={() => setTimeout(() => setRecruitersOpen(false), 2000)}
                    >

                        <div className="flex items-center text-gray-900 font-medium cursor-pointer">
                            <Link Link to="/Candidate-Pool">Recruiters</Link>
                            <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
                        </div>
                        {recruitersOpen && (
                            <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                                    Features
                                </h3>
                                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                                    <div className="grid grid-cols-2 gap-6 col-span-2">
                                        {RecruitersFeatures.map((item, index) => (
                                            <Link
                                                to={item.link}
                                                key={index}
                                                className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                                                onClick={() => setRecruitersOpen(false)}
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
                                    <div className="flex flex-col items-center">
                                        <img src="/images/platform-overview.png" alt="Platform Overview" className="rounded-lg w-full h-auto" />
                                        <p className="text-gray-600 text-sm mt-2">Take a free tour of our platform features</p>
                                        <Link to="/demo" className="text-indigo-600 font-medium mt-1">Book a Demo →</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative z-30"
                        onMouseEnter={() => {
                            setSupportOpen(true);
                            setAboutOpen(false);
                            setCandidatesOpen(false);
                            setRecruitersOpen(false);
                        }}
                        onMouseLeave={() => setTimeout(() => setSupportOpen(false), 2000)}
                    >

                        <div className="flex items-center text-gray-900 font-medium cursor-pointer">
                            <Link Link to="/Contact">Support</Link> <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" />
                        </div>
                        {supportOpen && (
                            <div className="absolute left-1/2 top-10 z-10 w-[700px] -translate-x-1/2 bg-white shadow-lg rounded-xl p-6">
                                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                                    Features
                                </h3>
                                <div className="mt-3 grid grid-cols-3 gap-6 items-center">
                                    <div className="grid grid-cols-2 gap-6 col-span-2">
                                        {supportFeatures.map((item, index) => (
                                            <Link
                                                to={item.link}
                                                key={index}
                                                className="flex items-start space-x-3 hover:bg-gray-100 p-2 rounded-md"
                                                onClick={() => setSupportOpen(false)}
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
                                    <div className="flex flex-col items-center">
                                        <img src="/images/platform-overview.png" alt="Platform Overview" className="rounded-lg w-full h-auto" />
                                        <p className="text-gray-600 text-sm mt-2">Take a free tour of our platform features</p>
                                        <Link to="/demo" className="text-indigo-600 font-medium mt-1">Book a Demo →</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/pricing" className="text-gray-900 font-medium">
                        Pricing
                    </Link>
                </div>
                <div>
                    <a
                        href="#"
                        className="bg-black text-white px-4 py-2 rounded-full lg:flex hidden font-medium"
                    >
                        Get Started
                    </a>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900">
                        {mobileMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
                    <Link to="/" className="block py-2 text-gray-900 font-medium">Home</Link>

                    {/* About Dropdown */}
                    <div>
                        <button
                            className="flex justify-between w-full py-2 text-gray-900 font-medium"
                            onClick={() => setAboutOpen(!aboutOpen)}
                        >
                            About Us <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        </button>
                        {aboutOpen && (
                            <div className="ml-4 space-y-2">
                                {aboutFeatures.map((item, index) => (
                                    <Link key={index} to={item.link} className="block text-gray-600">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Candidates Dropdown */}
                    <div>
                        <button
                            className="flex justify-between w-full py-2 text-gray-900 font-medium"
                            onClick={() => setCandidatesOpen(!candidatesOpen)}
                        >
                            Candidates <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        </button>
                        {candidatesOpen && (
                            <div className="ml-4 space-y-2">
                                {candidateFeatures.map((item, index) => (
                                    <Link key={index} to={item.link} className="block text-gray-600">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Recruiters Dropdown */}
                    <div>
                        <button
                            className="flex justify-between w-full py-2 text-gray-900 font-medium"
                            onClick={() => setRecruitersOpen(!recruitersOpen)}
                        >
                            Recruiters <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        </button>
                        {recruitersOpen && (
                            <div className="ml-4 space-y-2">
                                {RecruitersFeatures.map((item, index) => (
                                    <Link key={index} to={item.link} className="block text-gray-600">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Support Dropdown */}
                    <div>
                        <button
                            className="flex justify-between w-full py-2 text-gray-900 font-medium"
                            onClick={() => setSupportOpen(!supportOpen)}
                        >
                            Support <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        </button>
                        {supportOpen && (
                            <div className="ml-4 space-y-2">
                                {supportFeatures.map((item, index) => (
                                    <Link key={index} to={item.link} className="block text-gray-600">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/pricing" className="block py-2 text-gray-900 font-medium">Pricing</Link>

                    <div className="mt-4">
                        <a href="#" className="bg-black text-white px-4 py-2 rounded-full font-medium w-full block text-center">
                            Get Started
                        </a>
                    </div>
                </div>
            )}

        </header>
    );
}
