const ServicesSection = () => {
    return (
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900">How We Help?</h2>
  
          {/* Description */}
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          nuJOB.AI isn’t just another job platform—it’s a career transformation hub. We provide the training, validation, and tools to help professionals turn their knowledge into practical, market-standard skills that employers seek.
          companies, we eliminate guesswork—delivering pre-validated, high-quality candidates ready to make an impact. AI does the heavy lifting, so you get faster, fairer, and smarter hiring.
          Let’s build careers and businesses that thrive.

          </p>
        </div>
  
        {/* Image Gallery */}
        <div className="flex justify-center items-center gap-0 mt-8">
          <img src="/images/image1.png" alt="Service 1" className="w-24 h-24 md:w-32 md:h-32 md:flex hidden rounded-lg object-cover shadow-md" />
          <img src="/images/image2.png" alt="Service 2" className="w-32 h-32 md:w-40 md:h-40 md:flex hidden rounded-lg object-cover shadow-lg" />
          <img src="/images/image3.png" alt="Service 3" className="w-48 h-48 md:w-56 md:h-56  rounded-lg object-cover shadow-xl" />
          <img src="/images/image4.png" alt="Service 4" className="w-32 h-32 md:w-40 md:h-40 md:flex hidden rounded-lg object-cover shadow-lg" />
          <img src="/images/image5.png" alt="Service 5" className="w-24 h-24 md:w-32 md:h-32 md:flex hidden rounded-lg object-cover shadow-md" />
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
  