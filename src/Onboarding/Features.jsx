import React from "react";
import GuidanceImage from "/images/Features.png"; // Ensure this image exists in your project folder

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-10">

      {/* Right Side - Features List */}
      <div className="md:w-1/2 space-y-6 md:ml-14">
      <h className='text-3xl font-bold'>Features</h>
        {[
          {
            title: "Hands-On Simulations",
            description:
              "Real-world job scenarios powered by AI.",
            color: "border-pink-500 text-blue-600",
          },
          {
            title: "Role-Specific Assessments",
            description:
              "Tailored to industries and technologies.",
            color: "border-blue-500 text-blue-600",
          },
          {
            title: "Instant Feedback",
            description:
              "Real-time insights for improvement..",
            color: "border-purple-500 text-blue-600",
          },
          {
            title: "Profile Credibility​",
            description:
              "Boost your attractiveness to recruiters.",
            color: "border-purple-500 text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border p-2 rounded-md shadow-md ${item.color} bg-[#F8F2FF]`}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="md:ml-20 w-80 md:w-1/2">
        <img
          src={GuidanceImage}
          alt="Guidance"
          className="h-96 w-96"
        />
      </div>
    </div>
  );
};

export default Features;
