import React from "react";

const ResumeVersion = () => {
  return (
    <div className="text-center py-6">
      <h2 className="text-3xl text-blue-600 font-bold">Multiple Resume Versions</h2>
      <p className="text-gray-600 text-wrap px-56 mt-2">
      One size doesn’t fit all. Customize your resumes for different industries, roles, or career goals. Our tools let you create multiple versions effortlessly, keeping you prepared for every opportunity.
      </p>
      <div className="flex justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300  shadow-md">
          <img src="/images/Version1.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold ">Save Time with Reusable Templates</h3>
          <p className="text-gray-600 text-sm">Eliminate the hassle of starting from scratch for every application. Our customizable, pre-designed templates allow you to create polished resumes in minutes. Save and reuse your work effortlessly for future applications, ensuring consistency and professionalism while reducing the time spent on formatting and structuring.</p>
        </div>
        {/** Card 2 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300  shadow-md">
          <img src="/images/Version2.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">Tailored for Job Requirements</h3>
          <p className="text-gray-600 text-sm">Stand out by tailoring your resume to fit the specific demands of any job posting. Highlight relevant achievements, skills, and experiences that align with the role, increasing your chances of catching recruiters' attention. With our tools, you can easily adapt your content to target industry-specific needs or meet ATS (Applicant Tracking System) standards.</p>
        </div>
        {/** Card 3 **/}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300  shadow-md">
          <img src="/images/Version3.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">Organize Easily in Your Dashboard</h3>
          <p className="text-gray-600 text-sm">Keep all your resumes neatly arranged and accessible in one intuitive dashboard. Whether you're applying to multiple industries or keeping versions for different career goals, our platform ensures you never lose track. Easily manage, edit, and download your resumes whenever needed, helping you stay efficient and prepared.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeVersion;