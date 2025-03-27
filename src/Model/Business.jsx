import React from "react";

const Business = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Left Content */}
      <div className="w-full md:w-2/3 space-y-4 mt-9">
        <h2 className="text-4xl font-bold text-gray-900">Business model</h2>
        <p className="text-gray-600 text-sm">
          At nuJOB.AI, our mission is to transform the executive search process through the power of AI, fostering a fair, efficient, and insightful recruiting experience. We aim to empower job seekers and organizations alike with unbiased assessments, advanced analytics, and personalized branding tools. By aligning talent with opportunity, we envision a future where individuals and companies can achieve their full potential in an ever-evolving job market.
          nuJOB.AI is more than just a recruitment platform; it’s a revolution in how candidates and organizations connect. We provide tools that enable job seekers to brand themselves effectively, helping them not just secure employment but also excel in their careers. Together, we’re shaping a fairer, more efficient future for the recruitment industry. Join us in redefining the way talent meets opportunity.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0 relative">
        <img 
          src="/images/Business.png" 
          alt="AI Driven Interviews" 
          className="relative z-10 w-full"
        />
      </div>
    </div>
    </>
  );
};

export default Business;
