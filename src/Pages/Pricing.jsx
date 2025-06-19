import React, { useState } from "react";
import FeaturesSection from "../Price/FeaturesSection";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContactInfoForm from "../forms/contact-info-form";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const currentPlans =
    activeTab === "candidate"
      ? candidatePlans
      : activeTab === "student"
      ? studentPlans
      : recruiterPlans;

  return (
    <>
      <Helmet>
        <title>nuJOB.AI | Flexible Pricing Plans</title>
        <meta
          name="description"
          content="Choose from a variety of membership options tailored to support your career growth and recruitment needs."
        />
      </Helmet>

      <div className="relative flex flex-col items-center pt-32 px-10">
        {/* Background Image */}
        <div
          className="absolute -z-20 top-28 left-1/2 transform -translate-x-1/2 w-[90%] h-96 bg-cover bg-no-repeat rounded-xl"
          style={{ backgroundImage: "url('/images/BG.png')" }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 text-center mt-10">
          <img
            src="/images/Price.png"
            alt="Price Icon"
            className="h-28 w-28 mx-auto -mt-11"
          />
          <h2 className="text-3xl font-bold">Plans & Billing</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            nuJOB.AI offers a variety of membership options and services to
            support your career growth.
          </p>
          <div className="mt-5 flex justify-center gap-2">
            <button
              onClick={() => handleTabChange("candidate")}
              className={`px-5 py-2 rounded-3xl ${
                activeTab === "candidate"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              For Job-seekers
            </button>
            <button
              onClick={() => handleTabChange("recruiter")}
              className={`px-5 py-2 rounded-3xl ${
                activeTab === "recruiter"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              For Recruiters
            </button>
            <button
              onClick={() => handleTabChange("student")}
              className={`px-5 py-2 rounded-3xl ${
                activeTab === "student"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              For Students
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className={`mt-10 max-w-6xl mx-auto ${
            currentPlans.length < 4
              ? "flex justify-center flex-wrap gap-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          }`}
        >
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-xl shadow-lg ${plan.border} flex flex-col items-center w-full sm:w-[260px]`}
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

              <ContactInfoForm link={plan.link} >
                <button
                  className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600"
                  // onClick={()=>{
                  //   window.location.href=plan.link
                  // }}
                >
                  {plan.name === "Enterprise" ? "Talk To Us" : "Try For 7 Days"}
                </button>
              </ContactInfoForm>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-xl">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

            <form
              action="https://formsubmit.co/fromweb@nuJOB.ai"
              method="POST"
              className="space-y-4 text-sm"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Enterprise Inquiry from nuJOB.ai"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="First name*"
                  className="border w-1/2 px-3 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  className="border w-1/2 px-3 py-2 rounded"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Work email*"
                  className="border w-1/2 px-3 py-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border w-1/2 px-3 py-2 rounded"
                />
              </div>
              <textarea
                placeholder="What can we do for you?"
                className="border w-full px-3 py-2 rounded h-24"
              />

              <div className="text-left space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Yes, I'm OK with receiving marketing communications from
                  nuJOB.AI.
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mr-2 mt-1" />
                  <span>
                    By submitting this form I agree that nuJOB.AI is processing
                    my personal data according to their{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-blue-600 underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <FeaturesSection />
    </>
  );
};

// Plans
const candidatePlans = [
  {
    name: "Starter",
    price: "$20",
    period: "35 Credits",
    features: ["5 Free Interviews"],
    border: "border-blue-400 bg-white",
    text: "text-gray-800",
    link: "https://buy.stripe.com/7sI9AU2A51p1gjC00l",
  },
  {
    name: "Growth",
    price: "$49",
    period: "87 Credits",
    features: ["Includes everything in Starter", "+52 More Credits"],
    border: "border-gray-500 bg-gray-900 text-white",
    text: "text-white",
    link: "https://buy.stripe.com/14k5kEgqV0kX7N69AW",
  },
  {
    name: "Pro",
    price: "$99",
    period: "177 Credits",
    features: ["Includes everything in Growth", "+90 More Credits"],
    border: "border-yellow-400 bg-white",
    text: "text-gray-800",
    link: "https://buy.stripe.com/14kcN61w16Jlffy28v",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Includes everything in Pro",
      "+180 More Credits",
      "Tailored for high volume hiring",
    ],
    border: "border-purple-400 bg-white",
    text: "text-gray-800",
    link: "",
  },
];

const recruiterPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "173 Credits",
    features: ["5 Free Interviews"],
    border: "border-blue-400 bg-white",
    text: "text-gray-800",
    link: "https://buy.stripe.com/fZe9AU5Mh9Vxc3m14s",
  },
  {
    name: "Growth",
    price: "$249",
    period: "442 Credits",
    features: ["Includes everything in Starter", "+269 More Credits"],
    border: "border-gray-500 bg-gray-900 text-white",
    text: "text-white",
    link: "https://buy.stripe.com/fZe14o4IdgjV6J28wV",
  },
  {
    name: "Pro",
    price: "$399",
    period: "713 Credits",
    features: ["Includes everything in Growth", "+271 More Credits"],
    border: "border-yellow-400 bg-white",
    text: "text-gray-800",
    link: "https://buy.stripe.com/eVa7sM0rXc3F7N63cC",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Includes everything in Pro",
      "+180 More Credits",
      "Tailored for high volume hiring",
    ],
    border: "border-purple-400 bg-white",
    text: "text-gray-800",
    link: "",
  },
];
const studentPlans = [
  {
    name: "Student Basic",
    price: "$9.99",
    period: "25 Credits",
    features: ["3 Free Interviews"],
    border: "border-green-400 bg-white",
    text: "text-gray-800",
    link: "https://buy.stripe.com/eVafZi6Ql4Bd8Ra6oI",
  },
];

export default PricingSection;
