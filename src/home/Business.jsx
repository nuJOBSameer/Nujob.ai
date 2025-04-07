import React from "react";
import { Link } from "react-router-dom";

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
                        "Capture candidates in 15 minutes – seamless, swift, and efficient.",
                        "Assess candidate skills in 5 hours – precise evaluations without the waiting game.",
                        "Validate resumes in 1 hour – AI-driven verification that separates facts from fluff.",
                        "Make a new hire in 7 days – speed meets accuracy for a hiring process that works.",
                        "Fill open roles in 4 days – because the right fit shouldn’t be left waiting."
                    ].map((item, index) => {
                        const [boldText, normalText] = item.split(" – ");
                        return (
                            <li
                                key={index}
                                className="flex items-start space-x-3 py-3 border-b border-gray-300"
                            >
                                <span className="text-indigo-600">
                                    <img src="/images/down.png" alt="arrow" className="h-5" />
                                </span>
                                <p className="text-gray-700">
                                    <strong className="font-semibold">{boldText}</strong> – {normalText}
                                </p>
                            </li>
                        );
                    })}
                </ul>


                <button className="mt-6 px-6 py-3 bg-black flex text-white font-medium rounded-lg hover:bg-gray-800 transition">
                    <Link to="/wip/Contact"> Talk To Us </Link><span><img src="/images/Arrow.png" alt="" className="ml-2" /></span>
                </button>
            </div>

        </div>
    );
}
