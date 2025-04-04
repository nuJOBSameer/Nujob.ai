export default function BenefitsSection() {
    const jobSeekers = [
        { title: "Brand Yourself", desc: "AI-powered resumes, cover letters, and interview prep that help you stand out instantly.", icon: "/Logo/Logo1.png" },
        { title: "Fair & Unbiased", desc: "We focus on your skills, not your background, ensuring equal opportunities for everyone.", icon: "/Logo/Logo2.png" },
        { title: "Smart Job Matching", desc: "Get roles that actually fit your expertise and goals, not just random listings.", icon: "/Logo/Logo3.png" },
        { title: "Career Growth", desc: "Gain insights, trends, and strategies that keep you ahead in the job market.", icon: "/Logo/Logo4.png" },
        { title: "True Skill Validation", desc: "No fluff—put your skills to the test with hands-on simulations and industry-standard assessments.", icon: "/Logo/Logo5.png" },
        { title: "Less Stress, More Wins", desc: "Let AI handle the search so you can focus on what matters—your future.", icon: "/Logo/Logo6.png" }
    ];

    const jobRecruiters = [
        { title: "Faster Hiring", desc:"AI automates screening, filters top candidates, and shortens time-to-hire.", icon: "/Logo/Logo7.png" },
        { title: "Bias-Free Selection", desc:"Data-driven assessments ensure hiring based on skills and potential.", icon: "/Logo/Logo8.png" },
        { title: "Industry Insights", desc:"Stay ahead with AI-powered analytics on salary trends and hiring patterns.", icon: "/Logo/Logo9.png" },
        { title: "Better Matches, Less Turnover", desc:"Hire candidates who fit your culture and needs from day one.", icon: "/Logo/Logo10.png" },
        { title: "Proven Talent, Not Just Resumes", desc:"Our platform ensures candidates have validated, job-ready skills before they even apply.", icon: "/Logo/Logo11.png" },
        { title: "Save Time & Costs", desc:"Reduce manual screening and focus on strategic growth.", icon: "/Logo/Logo12.png" }
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
                    <img src="/images/SVG1.png" alt="AI Benefits" className="w-52 h-auto rounded-2xl" />
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
                                    {benefit.desc}
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
                <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-6">For Recruiters</h3>

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
                                    {benefit.desc}
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
