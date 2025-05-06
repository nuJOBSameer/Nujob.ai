import React from 'react'

const Market = ({ onExploreClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6 mx-auto max-w-5xl mt-12 mb-12">
    {/* Left Content Section */}
    <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">
            Stay Market-Ready with <span className="text-black">nuJOB.AI</span>
        </h2>
        <p className="text-gray-600 text-sm">
        Your skills are your currency—make sure they’re valued. nuJOB.AI’s Market Linked Scoring evaluates your skills, experience, and certifications against real-time industry demands, giving you a competitive edge with:
        </p>
        <button onClick={onExploreClick} className="bg-black text-white px-5 py-2 rounded-lg flex items-center md:mx-0 mx-auto space-x-2">
            Explore More <span>→</span>
        </button>
    </div>

    {/* Right Image Section */}
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img src='/images/Market.png' alt="Skill Tags" className="w-full h-auto rounded-lg" />
    </div>
</div>

  )
}

export default Market