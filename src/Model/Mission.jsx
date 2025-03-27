import React from "react";

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-6xl mx-auto p-6">
      {/* Left Image Section with Overlay */}
      <div className="relative w-full md:w-1/3">
        <img 
          src="/images/Mission.png" 
          alt="Consultants guiding clients" 
          className="w-auto h-96 rounded-lg"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            Mission
          </span>
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          At nuJOB.AI, our mission is to transform the executive search process 
          through the power of AI, fostering a fair, efficient, and insightful 
          recruiting experience. We aim to empower job seekers and organizations 
          alike with unbiased assessments, advanced analytics, and personalized 
          branding tools. By aligning talent with opportunity, we envision a 
          future where individuals and companies can achieve their full potential 
          in an ever-evolving job market.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          nuJOB.AI is more than just a recruitment platform; it's a revolution in 
          how candidates and organizations connect. We provide tools that enable 
          job seekers to brand themselves effectively, helping them not just secure 
          employment but also excel in their careers. Together, we're shaping a 
          fairer, more efficient future for the recruitment industry. Join us in 
          redefining the way talent meets opportunity.
        </p>
      </div>
    </div>
  );
};

export default Mission;
