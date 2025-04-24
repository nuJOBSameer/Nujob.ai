import React from "react";
import HelpDesk from "../Contact/HelpDesk";
import CustomerSupport from "../Contact/CustomerSupport";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
      <div className="flex justify-center items-center py-32">
        {/* Background Section */}
        <div
          className="relative w-[80%] max-w-5xl h-[420px] rounded-lg"
          style={{ background: "url('/images/contact.png') center/cover no-repeat" }}
        >
          {/* Form Container */}
          <div className="absolute top-60 -right-3 md:right-10 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <form
              action="https://formsubmit.co/fromweb@nuJOB.ai" // ✅ Replace this with the verified FormSubmit email or link
              method="POST"
              className="space-y-4"
            >
              {/* Hidden Settings for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Enterprise Inquiry from nuJOB.ai" />

              <div className="flex space-x-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Work email*"
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <textarea
                name="message"
                placeholder="What can we do for you?"
                className="w-full p-2 border rounded"
                rows="3"
                required
              ></textarea>

              <div className="text-sm">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" name="marketing_opt_in" />
                  <span>Yes, I'm OK with receiving marketing communications from nuJOB.AI.</span>
                </label>
                <label className="flex items-start space-x-2 mt-2">
                  <input type="checkbox" name="privacy_agreement" required />
                  <span>
                    By submitting this form I agree that nuJOB.AI is processing my personal data according to their
                    <a href="/privacy" className="text-blue-600"> Privacy Policy.</a>
                  </span>
                </label>
              </div>

              <button type="submit" className="bg-purple-600 text-white w-full py-2 rounded">
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>

      <HelpDesk />
      <CustomerSupport />
    </>
  );
};

export default Contact;
