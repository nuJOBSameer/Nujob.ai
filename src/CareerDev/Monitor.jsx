import React from "react";

const Monitor = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center py-16 ">
      {/** Left Image **/}
      <div className="w-1/2 flex justify-center">
        <img src="/images/Monitor.png" alt="Dashboard Illustration" className="w-full max-w-md" />
      </div>

      {/** Right Text Content **/}
      <div className="md:w-1/3 px-5 text-left ">
        <h2 className="text-3xl font-bold text-blue-500">Monitor Your Interview Journey</h2>
        <p className="text-gray-700 mt-4">
        Effortlessly manage your interview journey with a comprehensive and intuitive tracking system. Record every detail, from dates and company names to feedback, outcomes, and personal reflections. This organized approach enables you to analyze your performance, identify patterns, and pinpoint areas for improvement, giving you a clear roadmap for growth
          <br /><br />
          By centralizing your interview history in one accessible place, you gain valuable insights into your progress and can prepare strategically for future opportunities. With this clarity and structure, you’ll approach every interview with renewed confidence, focus, and the tools to advance your career to the next level.
        </p>
      </div>
    </div>
  );
};

export default Monitor;
