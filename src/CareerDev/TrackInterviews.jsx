import React from "react";

const TrackInterviews = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-6 bg-gray-50">
      <img src="/images/FAQ.png" alt="Track Interviews" className="w-28 h-16 mb-4" />
      <h2 className="text-xl font-semibold text-gray-900">Track Your Interviews</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        Stay organized, track progress, and refine your approach. Our system records interview details, feedback, and outcomes—helping you spot patterns, improve performance, and strategize for success.
        <br />Monitor Your Growth – Keep a structured record of your journey.
        <br />Analyze Patterns – Identify strengths and areas for improvement.
        <br />Strategic Prep – Approach each interview with clarity and confidence.
      </p>
    </div>
  );
};

export default TrackInterviews;
