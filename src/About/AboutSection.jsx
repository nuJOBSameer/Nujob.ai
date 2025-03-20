export default function AboutSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Image */}
          <div className="relative">
            <img 
              src="/images/AboutUs.png" 
              alt="Consultant" 
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
  
          {/* Right Side - Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-gray-900">
              <span className="text-pink-600">About</span> Us
            </h2>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              With over 35 years of pioneering experience in the IT sector, AI is built on a profound understanding of the ever-evolving technology landscape. Our journey began at the dawn of the computer age, through the rise of networking and the internet, and has now expanded to embrace the transformative potential of artificial intelligence.
            </p>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Having navigated the complexities of the job market ourselves, we understand the challenges of not just securing a job, but thriving in a career. At nuJOB.AI, we do more than help you find employment – we empower you to build your personal brand and carve out a rewarding path to long-term success.
            </p>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              At nuJOB.AI, we are transforming the executive search process through the power of AI, delivering a fair, efficient, and insightful recruiting experience. Our mission is to empower both job seekers and organizations with unbiased evaluations, advanced analytics, and tailored branding tools.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  