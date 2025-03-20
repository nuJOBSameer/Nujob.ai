export default function Career() {
    return (
      <div className="relative w-full h-[80vh] flex justify-center items-center bg-white overflow-hidden">
        {/* Cloud Background */}
        <img
          src="/images/Careerbg.png"
          alt="Clouds"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
  
        {/* Main Illustration (Including Text) */}
        <img
          src="/images/Main.png"
          alt="Careers Illustration"
          className="w-3/4 md:w-2/3"
        />
      </div>
    );
  }
  