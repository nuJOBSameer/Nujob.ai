import React, { useState } from "react";

const careerData = [
  {
    title: "Information Technology",
    description: "Find roles in software development, cyber security, data science & more. Explore AI, blockchain & big data.",
    image: "/IT.mp4",
    position: "top-left",
    color: "bg-[#F7F8FF]",
    textColor: "text-blue-600"
  },
  {
    title: "Accounting",
    description: "Get matched with top accounting jobs & explore AI, blockchain & financial tech innovations.",
    image: "/Accounting.mp4",
    position: "top-right",
    color: "bg-[#3E57DA]",
    textColor: "text-white"
  },
  {
    title: "Banking",
    description: "Connect with opportunities in investment banking, risk management & FinTech. Stay ahead in digital banking.",
    image: "/Banking.mp4",
    position: "bottom-left",
    color: "bg-[#3E57DA]",
    textColor: "text-white"
  },
  {
    title: "Healthcare",
    description: "Discover roles in telemedicine, medical robotics & cutting-edge healthcare technologies.",
    image: "/Healthcare.mp4",
    position: "bottom-right",
    color: "bg-[#F7F8FF]",
    textColor: "text-blue-600"
  }
];

const Career = () => {
  const [active, setActive] = useState(careerData[0]);

  return (
    <div className="py-14 px-4 lg:px-16 relative text-center">
      {/* Title */}
      <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">Industries</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-28">
        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">AI-Powered</span>
        <br /> Careers In <span className="text-black">Healthcare, Accounting, Banking & IT</span>
      </h2>

      {/* Main Image with Title */}
      <div className="relative mx-auto mt-16 w-[320px] lg:w-[370px] h-[400px] rounded-xl overflow-hidden shadow-lg">
        <video
          src={active.image}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Floating Cards */}
      <div className="relative w-full max-w-5xl mx-auto mt-12 grid grid-cols-2 gap-4 lg:absolute lg:inset-0 lg:top-40 lg:grid-cols-none text-left">
        {careerData.map((item, idx) => {
          const positionClasses = {
            "top-left": "lg:absolute lg:-left-10 lg:top-48",
            "top-right": "lg:absolute lg:-right-10 lg:top-40",
            "bottom-left": "lg:absolute lg:-left-0 lg:bottom-20",
            "bottom-right": "lg:absolute lg:-right-0 lg:bottom-28"
          };
          return (
            <div
              key={idx}
              onMouseEnter={() => setActive(item)}
              className={`transition-all duration-300 cursor-pointer rounded-xl px-4 py-4 shadow-lg w-full lg:w-96 ${positionClasses[item.position]} ${item.color} ${item.textColor}`}
            >
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
