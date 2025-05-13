import React, { useState } from "react";

const careerData = [
  {
    title: "Information Technology",
    description: "Find roles in software development, cyber security, data science & more. Explore AI, blockchain & big data.",
    video: "/IT.mp4"
  },
  {
    title: "Accounting",
    description: "Get matched with top accounting jobs & explore AI, blockchain & financial tech innovations.",
    video: "/Accounting.mp4"
  },
  {
    title: "Banking",
    description: "Connect with opportunities in investment banking, risk management & FinTech. Stay ahead in digital banking.",
    video: "/Banking.mp4"
  },
  {
    title: "Healthcare",
    description: "Discover roles in telemedicine, medical robotics & cutting-edge healthcare technologies.",
    video: "/Healthcare.mp4"
  }
];

const Career = () => {
  const [active, setActive] = useState(careerData[0]);

  return (
    <div className="py-14 px-4 lg:px-6 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">Industries</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">AI-Powered</span>
          <br /> Careers In <span className="text-black">Healthcare, Accounting, Banking & IT</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {careerData.map((item, idx) => {
              const isActive = active.title === item.title;
              const bgColor = isActive ? "bg-[#3E57DA]" : "bg-[#F7F8FF]";
              const textColor = isActive ? "text-white" : "text-blue-600";

              return (
                <div
                  key={idx}
                  onClick={() => setActive(item)}
                  className={`transition-all duration-300 cursor-pointer rounded-xl px-4 py-4 shadow-lg ${bgColor} ${textColor}`}
                >
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              src={active.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
