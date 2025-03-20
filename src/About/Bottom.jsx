const Bottom = () => {
    return (
      <div className="relative bg-[#1E1ED4] py-20 px-6 text-center text-white overflow-hidden">
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: "url('/images/Pattern.png')" }}
        ></div>
  
        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center">
          <img src="/images/Logo-grey.png" alt="" className="h-20" />
          </div>
          {/* Heading */}
          <h2 className="text-lg font-semibold">At nuJOB.AI</h2>
  
          {/* Description */}
          <p className="max-w-2xl mx-auto text-sm mt-3 leading-relaxed">
            We believe in the power of a "can-do" mindset and the endless pursuit of learning. 
            We're driven by the passion to tackle challenges head-on, crafting innovative 
            solutions to any problem. If you're ready to grow, learn, and make an impact, 
            we'd love to have you with us.
          </p>
  
          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-md hover:bg-gray-200">
              Free Consultation <span className="ml-2"><img src="/images/about-svg.png" alt="" /></span>
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-md hover:bg-gray-800">
              Explore our services <span className="ml-2"><img src="/images/about-svg1.png" alt="" /></span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Bottom;
  