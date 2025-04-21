import { Link } from "react-router-dom";
const Bottom = () => {
    return (
      <div className="relative bg-[#2a5fbb] py-20 px-6 text-center text-white overflow-hidden">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: "url('/images/Pattern.png')" }}
        ></div>
  
        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center">
          <img src="/images/Bottom.png" alt="" className="h-12" />
          </div>
          {/* Heading */}
          <h1 className="text-4xl font-semibold">Take the first step toward
          <br />building your dream job.</h1>
  
          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm mt-3 leading-relaxed">
          Start using NuJOB.AI today and connect with top talent
          faster and more efficiently!
          </p>
  
          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-md hover:bg-gray-200">
              <Link to="/contact">Free Consultation</Link> <span className="ml-2"><img src="/images/about-svg.png" alt="" /></span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Bottom;
  
