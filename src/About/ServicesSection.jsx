const ServicesSection = () => {
    return (
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
  
          {/* Description */}
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            nuJOB.AI offers a comprehensive range of services to enhance every stage of the recruitment 
            and career-building process. At nuJOB.AI, we help you connect with job opportunities that 
            align with your unique skills. Our AI-powered platform optimizes your resume to match 
            employer expectations, making your job search more targeted, efficient, and impactful.
          </p>
        </div>
  
        {/* Image Gallery */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <img src="/images/image1.jpg" alt="Service 1" className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover shadow-md" />
          <img src="/images/image2.jpg" alt="Service 2" className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover shadow-lg" />
          <img src="/images/image3.jpg" alt="Service 3" className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-xl" />
          <img src="/images/image4.jpg" alt="Service 4" className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover shadow-lg" />
          <img src="/images/image5.jpg" alt="Service 5" className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover shadow-md" />
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
  