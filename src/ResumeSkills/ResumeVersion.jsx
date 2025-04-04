import React from "react";

const ResumeVersion = () => {
  return (
    <div className="text-center py-6">
      <h2 className="text-3xl text-blue-600 font-bold">Multiple Resume Versions</h2>
      <p className="text-gray-600 text-wrap px-5 md:px-52 mt-2">
        Adapt to different roles without starting from scratch.
      </p>

      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/* Card 1 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version1.png" alt="Template Icon" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Save time with reusable, structured templates.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Eliminate the hassle of starting from scratch for every application. Our customizable, pre-designed templates allow you to create polished resumes in minutes. Save and reuse your work effortlessly for future applications, ensuring consistency and professionalism while reducing the time spent on formatting and structuring.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version2.png" alt="Customization Icon" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Customize each version for specific job requirements.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Stand out by tailoring your resume to fit the specific demands of any job posting. Highlight relevant achievements, skills, and experiences that align with the role, increasing your chances of catching recruiters' attention. With our tools, you can easily adapt your content to target industry-specific needs or meet ATS standards.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-80 p-4 rounded-lg border text-left border-blue-300 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
          <img src="/images/Version3.png" alt="Dashboard Icon" className="w-6 h-6 mb-2" />
          <h3 className="text-black font-semibold">
            Keep everything organized in one place for seamless access.
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Keep all your resumes neatly arranged and accessible in one intuitive dashboard. Whether you're applying to multiple industries or keeping versions for different career goals, our platform ensures you never lose track. Easily manage, edit, and download your resumes whenever needed, helping you stay efficient and prepared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeVersion;
