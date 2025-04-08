import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:ml-28">
          {/* Left Section */}
          <div className="max-w-sm">
            {/* nuJob Logo */}
            <img src="/images/Logos.png" alt="nuJob Logo" className="mb-4 " />
            <p className="text-sm text-gray-400 leading-relaxed">
              nuJOB is your trusted partner in career advancement, leveraging
              cutting-edge AI technology to help you hunt, refine, and showcase
              your skills with unmatched precision, efficiency, and personalized
              support.
            </p>

            {/* Email Input Field & Yellow Icon */}
            <div className="flex items-center gap-3 mt-6">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full bg-transparent border border-gray-600 rounded-full py-2 px-4 text-white outline-none"
              />
              {/* Yellow Image Icon (Outside Input) */}
              <img
                src="/images/circle-check.png"
                alt="Submit"
                className="w-10 h-10 cursor-pointer"
              />
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-10 mr-32">
            <div>
              <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="/about">
                  <li className="cursor-pointer hover:text-white">About Us</li>
                </Link>
                <li className="cursor-pointer hover:text-white">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-white">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-white">
                  Refund Policy
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <Link to="#">
                  <li className="cursor-pointer hover:text-white">
                    Recruiters
                  </li>
                </Link>
                <Link to="/Candidate-Pool">
                  <li className="cursor-pointer hover:text-white">
                    Candidates
                  </li>
                </Link>
                <Link to="/FAQ">
                  <li className="cursor-pointer hover:text-white">FAQ</li>
                </Link>
                <li className="cursor-pointer hover:text-white">Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Contact</h3>
              <p className="text-gray-400">Email: support@nujob.ai</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <img
            src="/images/Logos.png"
            alt="nuJob Logo"
            className="h-10 w-12 md:ml-32 md:mx-0 mx-auto"
          />
          <p>nuJOB © 2025. All Rights Reserved.</p>
          <div className="flex space-x-5 md:mt-0 mt-4">
            <FaDiscord className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaFacebookF className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaYoutube className="text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
    </footer>
  );
}
