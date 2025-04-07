import React, { useState } from "react";
import FeaturesSection from "../Price/FeaturesSection";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("candidate");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const currentPlans = activeTab === "candidate" ? candidatePlans : recruiterPlans;

  return (
    <>
      <div className="relative flex flex-col items-center pt-32 px-10">
        {/* Background Image */}
        <div
          className="absolute top-28 left-1/2 transform -translate-x-1/2 w-[90%] h-96 bg-cover bg-no-repeat rounded-xl"
          style={{ backgroundImage: "url('/images/BG.png')" }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 text-center mt-10">
          <img src="/images/Price.png" alt="Price Icon" className="h-28 w-28 mx-auto -mt-11" />
          <h2 className="text-3xl font-bold">Plans & Billing</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            nuJOB.AI offers a variety of membership options and services to support your career growth.
          </p>
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => handleTabChange("candidate")}
              className={`px-5 py-2 rounded-3xl ${activeTab === "candidate" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
                }`}
            >
              For Candidates
            </button>
            <button
              onClick={() => handleTabChange("recruiter")}
              className={`px-5 py-2 rounded-3xl ${activeTab === "recruiter" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
                }`}
            >
              For Recruiters
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-xl shadow-lg ${plan.border} relative flex flex-col items-center`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="my-4 flex flex-col items-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul
                className={`text-sm ${plan.text} border border-gray-300 p-4 rounded-md space-y-2 w-full`}
              >
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center border-b border-gray-300 last:border-none"
                  >
                    <span className="text-purple-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
                {plan.name === "Enterprise" ? "Talk To Us" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <FeaturesSection />
    </>
  );
};

const candidatePlans = [
  {
    name: "Starter",
    price: "$20",
    period: "35 Credits",
    features: [
      "5 Free Interviews",
    ],
    border: "border-blue-400 bg-white",
    text: "text-gray-800",
  },
  {
    name: "Growth",
    price: "$49",
    period: "87 Credits",
    features: [
      "Includes everything in Starter",
      "+52 More Credits",
    ],
    border: "border-gray-500 bg-gray-900 text-white",
    text: "text-white",
  },
  {
    name: "Pro",
    price: "$99",
    period: "177 Credits",
    features: [
      "Includes everything in Growth",
      "+90 More Credits",
    ],
    border: "border-yellow-400 bg-white",
    text: "text-gray-800",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "357 Credits",
    features: [
      "Includes everything in Pro",
      "+180 More Credits",
      "Tailored for high volume hiring"
    ],
    border: "border-purple-400 bg-white",
    text: "text-gray-800",
  },
];


const recruiterPlans = [
  {
    name: "Starter",
    price: "$20",
    period: "35 Credits",
    features: [
      "5 Free Interviews",
    ],
    border: "border-blue-400 bg-white",
    text: "text-gray-800",
  },
  {
    name: "Growth",
    price: "$49",
    period: "87 Credits",
    features: [
      "Includes everything in Starter",
      "+52 More Credits",
    ],
    border: "border-gray-500 bg-gray-900 text-white",
    text: "text-white",
  },
  {
    name: "Pro",
    price: "$99",
    period: "177 Credits",
    features: [
      "Includes everything in Growth",
      "+90 More Credits",
    ],
    border: "border-yellow-400 bg-white",
    text: "text-gray-800",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "357 Credits",
    features: [
      "Includes everything in Pro",
      "+180 More Credits",
      "Tailored for high volume hiring"
    ],
    border: "border-purple-400 bg-white",
    text: "text-gray-800",
  },
];


export default PricingSection;
