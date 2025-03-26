import React from "react";

const DashboardEfficiency = () => {
  return (
    <div className="flex items-center justify-center pb-16 ">
      {/** Left Image **/}
      <div className="w-1/2 flex justify-center">
        <img src="/images/Dashboard.png" alt="Dashboard Illustration" className="w-full max-w-md" />
      </div>

      {/** Right Text Content **/}
      <div className="w-1/3 text-left">
        <h2 className="text-3xl font-bold text-[#006BA6]">A Dashboard Designed for Efficiency</h2>
        <p className="text-gray-700 mt-4">
          Our intuitive AI-powered dashboard is crafted for peak efficiency, providing managers with a centralized hub to track skill gaps, visualize team progress, and make data-driven decisions. With real-time metrics and tailored insights, you can seamlessly monitor performance, identify areas for growth, and implement effective learning strategies—all within a user-friendly interface. 
          <br /><br />
          Experience a smarter way to boost productivity and foster continuous skill development.
        </p>
      </div>
    </div>
  );
};

export default DashboardEfficiency;
