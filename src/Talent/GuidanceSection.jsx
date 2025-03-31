import React from "react";
import GuidanceImage from "/images/Talent2.png"; // Ensure this image exists in your project folder

const GuidanceSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-10 px-5">
      {/* Left Side - Full Image */}
      <div className="md:w-1/2">
        <img
          src={GuidanceImage}
          alt="Guidance"
          className=""
        />
      </div>

      {/* Right Side - Features List */}
      <div className="md:w-1/2 space-y-6">
        {[
          {
            title: "Personalized Guidance",
            description:
              "Receive advice tailored specifically to your career goals, helping you make informed and confident decisions.",
            color: "border-pink-500 text-blue-600",
          },
          {
            title: "Real-Time Insights",
            description:
              "Stay ahead with constant, AI-powered recommendations that adapt to your progress and career aspirations.",
            color: "border-blue-500 text-blue-600",
          },
          {
            title: "Simplified Job Search",
            description:
              "Save time and effort as the AI curates the best job options based on your unique skills, preferences, and career path.",
            color: "border-purple-500 text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border p-4 rounded-md shadow-md ${item.color} bg-[#F8F2FF]`}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidanceSection;
