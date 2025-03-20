import React from "react";

export default function Business() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white min-h-screen">
            {/* Left Section */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center">
                <img
                    src="/images/Sarah.png"  // Update with the correct path
                    alt="Business Recruitment"
                    className="w-full max-w-md"
                />
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                <p className="text-indigo-600 font-medium uppercase text-sm">The Future of Hiring</p>
                <h2 className="text-4xl font-bold mt-2">
                    Perfect <span className="text-indigo-600">Solutions</span> For <br />
                    <span className="text-black">Business & Recruitment</span>
                </h2>

                <ul className="mt-6">
                    {[
                        "Attract and Source: 1 day with nuJOB.AI (vs. 3 days Traditionally)",
                        "Capture Candidate: 15 mins with nuJOB.AI (vs. 4 hours Traditionally)",
                        "Assess Candidate Skills: 5 hours with nuJOB.AI (vs. 50 hours Traditionally)",
                        "Validate Resume: 1 hour with nuJOB.AI (vs. 10 hours Traditionally)",
                        "Make New Hire: 7 days with nuJOB.AI (vs. 27 days Traditionally)"
                    ].map((item, index, array) => (
                        <li
                            key={index}
                            className="flex items-start space-x-3 py-3 border-b border-gray-300 "
                        >
                            <span className="text-indigo-600">✔</span>
                            <p className="text-gray-700">{item}</p>
                        </li>
                    ))}
                </ul>

                <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
                    Learn More →
                </button>
            </div>

        </div>
    );
}
