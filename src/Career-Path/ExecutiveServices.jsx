import React from "react";

const ExecutiveServices = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-600">
          Executive Services Overview
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
          At nuJOB.AI, we specialize in AI-driven executive search for C-Level
          executives, leader board members, and top-tier candidates. Our
          platform connects your organization with elite talent, ensuring the
          right leadership to drive growth and success.
        </p>

        <div className="flex flex-col md:flex-row items-center mt-5 gap-8">
          {/* Left Side: Features */}
          <div className="flex-1 space-y-4">
            <FeatureBox
              title="High-Impact Leadership"
              description="Secure executives who deliver strategic growth and measurable results."
            />
            <FeatureBox
              title="Technical Data-Driven Hiring"
              description="Informed decision-making with detailed candidate insights."
            />
            <FeatureBox
              title="Faster Hiring"
              description="Accelerated search process for quick, efficient leadership placement."
            />
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative flex justify-center">
            <img
              src="/images/executive-services.png"
              alt="Executive Services"
              className="h-96 w-96"
            />
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Value Proposition</h3>
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <ValueBox
              icon="/images/path1.png"
              title="Personalized Guidance"
              description="Tailored advice for your career growth."
              hasBorder={true}
            />
            <ValueBox
              icon="/images/path2.png"
              title="Real-Time Insights"
              description="AI-powered recommendations keep your profile relevant."
              hasBorder={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ title, description }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-pink-100 to-white border border-pink-300 rounded-lg flex items-start gap-3
                    hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src="/images/Star.png" alt="Star" className="w-5 h-5 mt-1" />
      <div>
        <h4 className="text-indigo-600 font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ValueBox = ({ icon, title, description, hasBorder }) => {
  return (
    <div className={`flex items-start gap-3 ${hasBorder ? "md:border-r" : ""} border-gray-400 pr-3`}>
      <span className="text-2xl pl-3">
        <img src={icon} alt="" />
      </span>
      <div>
        <h4 className="text-black font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExecutiveServices;
