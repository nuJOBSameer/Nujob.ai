import React from "react";

const CustomerSupport = () => {
  return (
    <div className="flex justify-center items-center py-10 p-6">
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg md:flex-row flex-col items-center flex max-w-5xl w-full">
        {/* Left Side - Text Content */}
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-bold text-gray-900">Customer Support at nuJOB.AI</h2>
          <p className="text-gray-600 mt-2">
            Our Customer Support team is dedicated to ensuring a smooth experience on nuJOB.AI.
            Whether you have account-related questions, need help with job applications, or face
            technical issues, we’re here to assist you with personalized solutions. Reach out to us
            for reliable help anytime you need it.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Core Features</h3>
          <ul className="mt-2 space-y-4 text-blue-600">
            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Direct Assistance from Our Support Team</a>
                <p className="text-gray-600">
                  Personalized help for technical issues or inquiries tailored to your needs.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Multiple Support Channels</a>
                <p className="text-gray-600">
                  Reach us via email, live chat, or phone. Choose the most convenient method, and we’ll assist you.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Expert Guidance</a>
                <p className="text-gray-600">
                  Get help with job-matching, profile-building, and using specific features on nuJOB.AI from our expert team.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side - Image with Blue Box (should be part of the image) */}
        <div className="w-1/3 hidden md:flex">
          <img src="/images/customersupport-image.png" alt="Customer Support" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
