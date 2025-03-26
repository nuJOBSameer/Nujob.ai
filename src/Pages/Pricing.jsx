import React from "react";
import FeaturesSection from "../Price/FeaturesSection";

const PricingSection = () => {
  return (
    <>
    <div className="relative flex flex-col items-center p-10">
      {/* Background Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-96 bg-cover bg-no-repeat rounded-xl" 
           style={{ backgroundImage: "url('/images/BG.png')" }}></div>
      
      {/* Content Section */}
      <div className="relative z-10 text-center mt-10">
        <img src="/images/Price.png" alt="" className="h-28 w-28 ml-64 -mt-11" />
        <h2 className="text-3xl font-bold">Plans & billing</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          nuJOB.AI offers a variety of membership options and services to support your career growth.
        </p>
        <div className="mt-5 flex gap-4 justify-center">
          <button className="bg-purple-600 text-white px-5 py-2 rounded-md">For Candidates</button>
          <button className="bg-gray-200 px-5 py-2 rounded-md">For Recruiters</button>
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border rounded-xl  shadow-lg ${plan.border} relative flex flex-col items-center`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <div className="my-4 flex flex-col items-center">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500">/{plan.period}</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-purple-500 mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
    <FeaturesSection/>
    </>
  );
};

const plans = [
    {
      name: "Platinum",
      price: "$299",
      period: "month",
      features: [
        "Unlimited Job Applications",
        "Priority Job Posting Access",
        "Advanced AI Tools for Resume & Interview",
        "Dedicated Account Manager",
        "Free Unlimited Interviews",
        "Premium Certifications & Consultations",
        "Highest Referral Rewards",
      ],
      border: "border-purple-400 bg-white",
    },
    {
      name: "Gold",
      price: "$189",
      period: "month",
      features: [
        "50 Job Applications per month",
        "Limited Job Posting Access",
        "Premium Certifications",
        "AI Tools for Resume & Interview Coaching",
        "Priority Email & Chat Support",
        "Free Limited Interviews",
        "Free Limited Interviews",
      ],
      border: "border-yellow-400 bg-white",
    },
    {
      name: "Silver",
      price: "$189",
      period: "month",
      features: [
        "25 Job Applications per month",
        "Standard Job Posting Access",
        "Interviews Available for Fee",
        "Basic AI Tools for Resume Editing",
        "Standard Email & Chat Support",
        "Interviews Available for Fee",
        "Standard Referral Rewards",
      ],
      border: "border-gray-500 bg-gray-900 text-white",
    },
    {
      name: "Platinum",
      price: "$299",
      period: "month",
      features: [
        "10 Job Applications per month",
        "Basic Job Posting Access",
        "Entry-Level Certifications",
        "Basic AI Tools for Job Matching",
        "Community-Based Support",
        "Interviews Available for Fee",
        "Basic Referral Rewards",
      ],
      border: "border-blue-400 bg-white",
    },
  ];
  

export default PricingSection;
