import React from "react";

const HelpDesk = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex max-w-5xl w-full">
        {/* Left Side - Image with Blue Box as Part of the Image */}
        <div className="w-1/3">
          <img src="/images/helpdesk.png" alt="Help Desk" className="w-full h-auto rounded-lg" />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-2/3 pl-8">
          <h2 className="text-2xl font-bold text-gray-900">Help Desk at nuJOB.AI</h2>
          <p className="text-gray-600 mt-2">
            Our Help Desk is here to resolve any issues you may encounter while using nuJOB.AI. Whether you need technical assistance, troubleshooting, or guidance on how to use specific platform features, we’ve got you covered. Submit a support ticket, track the status of your request, and receive fast resolutions from our dedicated support team.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-900">Core Features</h3>
          <ul className="mt-2 space-y-4 text-blue-600">
            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Submit a Support Ticket</a>
                <p className="text-gray-600 text-xs">Easily report any technical issues or queries by submitting a support ticket. Our team will promptly address your concerns to keep your experience smooth and hassle-free.</p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6"/></span>
              <div>
                <a href="#" className="font-semibold">Track Your Ticket Status</a>
                <p className="text-gray-600 text-xs">Stay updated on the progress of your support requests. View real-time status updates and communicate with our support team until your issue is resolved.</p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="mr-2"><img src="/images/ArrowD.png" alt="" className="h-4 w-6" /></span>
              <div>
                <a href="#" className="font-semibold">Comprehensive Help Resources</a>
                <p className="text-gray-600 text-xs">Access FAQs, tutorials, and guides for common issues and platform features. Save time by finding answers to common questions or learning how to make the most of nuJOB.AI’s tools.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
