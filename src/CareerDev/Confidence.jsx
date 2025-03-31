import React from "react";

const Confidence = () => {
  return (
    <div className="text-center py-12 relative">
      <h2 className="text-2xl font-bold">Confidence Score</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-centre border-blue-300 bg-[#F8F2FF] shadow-md">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold ">Practice mock interviews with a peer or coach.</h3>
          
        </div>
        {/** Card 2 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-centre border-blue-300 bg-[#F8F2FF] shadow-md">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold">Join a public speaking workshop or club.</h3>
          
        </div>
        {/** Card 3 **/}
        <div className="w-56 h-44 p-3 rounded-lg border text-centre border-blue-300 bg-[#F8F2FF] shadow-md">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold">Record and review your presentations to identify areas of improvement.</h3>
          
        </div>
        <div className="w-56 h-44 p-3 rounded-lg border text-centre border-blue-300 bg-[#F8F2FF] shadow-md">
          <img src="/images/Confidence.png" alt="star" className="w-16 h-14 mb-2 mx-auto" />
          <h3 className="text-black font-semibold">Attend webinars or courses on body language and vocal delivery.</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Confidence;
