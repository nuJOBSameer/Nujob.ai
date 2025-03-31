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
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">What</span> We Do
          </h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With 35+ years in IT, we’ve seen industries shift—from the first computers to AI-driven hiring. We know getting a job isn’t the goal—building a career is. nuJOB.AI isn’t just a hiring tool; it’s a game-changer. We help professionals brand themselves and companies find top-tier leaders with precision and speed.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            But we go beyond hiring. We believe in true skill validation, not just resume screening. Our platform creates environments where your skills are put to the test through simulated experiences, practical assessments, and hands-on labs. We don’t just help you find a job; we equip you with the market-ready skills to thrive in it.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            We’re here to give you skillsets that make a difference—because a piece of paper shouldn’t define your future. Our platform becomes your living resume, a direct path to success that showcases your skills in action.
          </p>
        </div>

      </div>
    </section>
  );
}
