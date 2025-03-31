export default function BenefitsSection() {
    const jobSeekers = [
        { title: "Personal Branding", icon: "/Logo/Logo1.png" },
        { title: "Fair Evaluation", icon: "/Logo/Logo2.png" },
        { title: "Tailored Job Matching", icon: "/Logo/Logo3.png" },
        { title: "Career Guidance", icon: "/Logo/Logo4.png" },
        { title: "Reduced Stress", icon: "/Logo/Logo5.png" },
        { title: "Personal Branding", icon: "/Logo/Logo6.png" }
    ];

    const jobRecruiters = [
        { title: "Streamline Recruitment", icon: "/Logo/Logo7.png" },
        { title: "Unbiased Assessment", icon: "/Logo/Logo8.png" },
        { title: "Market Trend Analysis", icon: "/Logo/Logo9.png" },
        { title: "Improved Candidate Matching", icon: "/Logo/Logo10.png" },
        { title: "Time & Cost Savings", icon: "/Logo/Logo11.png" },
        { title: "Enhanced Decision-Making", icon: "/Logo/Logo12.png" }
    ];

    return (
        <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-10 px-0">
                {/* Left Section - Heading and Description */}
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                            nuJOB.AI
                        </span>{" "}
                        Benefits
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                        Our journey began at the dawn of the computer age, through the rise of networking and
                        the internet, and has now expanded to embrace the transformative potential of
                        artificial intelligence.
                    </p>
                </div>

                {/* Right Section - Illustration */}
                <div className="hidden md:block">
                    <img src="/images/SVG.png" alt="AI Benefits" className="w-52 h-auto transform scale-x-[-1]" />
                </div>
            </div>


            {/* For Job Seekers */}
            <div className=" border-t border-gray-300 md:px-10">
                {/* Section Heading */}
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">For Job Seekers</h3>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    {jobSeekers.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-start pr-6 ${
                                index !== jobSeekers.length - 1 && index !== 2 ? "md:border-r md:border-blue-700" : ""
                            }`}
                        >
                            {/* Left Side: Title & Description */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    nuJOB.AI helps job seekers create a powerful personal brand, with tools for resume building and interview preparation to present their best selves.
                                </p>
                            </div>

                            {/* Right Side: Icon */}
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>



            {/* For Job Recruiters */}
            <div className=" mt-10 border-t border-gray-300 md:px-10">
                {/* Section Heading */}
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">For Job Recruiters</h3>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                    {jobRecruiters.map((benefit, index) => (
                        <div
                        key={index}
                        className={`flex justify-between items-start pr-6 ${
                            index !== jobRecruiters.length - 1 && index !== 2 ? "md:border-r md:border-blue-700" : ""
                        }`}
                    >
                            {/* Left Side: Title & Description */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    nuJOB.AI helps job seekers create a powerful personal brand, with tools for resume building and interview preparation to present their best selves.
                                </p>
                            </div>

                            {/* Right Side: Icon */}
                            <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
