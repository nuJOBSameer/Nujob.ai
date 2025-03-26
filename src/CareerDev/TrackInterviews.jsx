import React from "react";

const TrackInterviews = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-6 bg-gray-50">
      <img src="/images/FAQ.png" alt="Track Interviews" className="w-28 h-16 mb-4" />
      <h2 className="text-xl font-semibold text-gray-900">Track Your Interviews</h2>
      <p className="text-gray-600 max-w-2xl mt-2">
        Keep a detailed record of past interviews, including feedback, outcomes, and lessons learned.
        Analyze patterns to improve your approach and enhance your performance over time.
      </p>
    </div>
  );
};

export default TrackInterviews;
