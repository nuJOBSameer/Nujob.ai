import React from "react";

const Testimonials = () => {
  return (
    <div className="text-center py-12 bg-gray-100">
      {/** Heading **/}
      <h2 className="text-3xl font-bold text-gray-900">Real Stories, Real Success</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        See how job-seekers like you achieved career success with the support of nuJOB.AI. 
        Our tailored AI-driven solutions have helped countless professionals land their dream jobs.
      </p>

      {/** Full Testimonial Image **/}
      <div className="mt-6 flex justify-center">
        <img 
          src="/images/RealStory.png" 
          alt="Testimonials" 
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Testimonials;
