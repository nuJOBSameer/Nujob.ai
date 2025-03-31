import React from "react";
import HelpDesk from "../Contact/HelpDesk";
import CustomerSupport from "../Contact/CustomerSupport";

const Contact = () => {
  return (
    <>
    <div className="flex justify-center items-center py-10">
      {/* Background Section */}
      <div
        className="relative w-[80%] max-w-5xl h-[420px] rounded-lg "
        style={{ background: "url('/images/contact.png') center/cover no-repeat" }}
      >
        {/* Form Container */}
        <div className="absolute top-60 -right-3 md:right-10 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[350px]">
          <form className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First name*"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Work email*"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <textarea
              placeholder="What can we do for you?"
              className="w-full p-2 border rounded"
              rows="3"
            ></textarea>
            <div className="text-sm">
              <label className="flex items-start space-x-2">
                <input type="checkbox" />
                <span>
                  Yes, I'm OK with receiving marketing communications from nuJOB.AI.
                </span>
              </label>
              <label className="flex items-start space-x-2 mt-2">
                <input type="checkbox" />
                <span>
                  By submitting this form I agree that nuJOB.AI is processing my personal data according to their
                  <a href="#" className="text-blue-600"> Privacy Policy.</a>
                </span>
              </label>
            </div>
            <button className="bg-purple-600 text-white w-full py-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <HelpDesk/>
    <CustomerSupport/>
    </>
  );
};

export default Contact;