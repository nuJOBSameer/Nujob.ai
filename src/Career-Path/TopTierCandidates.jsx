import React from "react";

const TopTierCandidates = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold">Top Tier Candidates Service</h2>
      <p className="text-gray-600 mt-2 px-6">
        Connecting elite professionals with high-level opportunities, our service ensures access to premium
        roles that match your expertise.
      </p>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6">
        {/** Card 1 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Exclusive Access</h3>
          <p className="text-gray-600 text-sm">Gain visibility in premium job markets</p>
        </div>

        {/** Card 2 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Job Matching</h3>
          <p className="text-gray-600 text-sm">
            AI matches you with top-tier roles that align with your skills and experience
          </p>
        </div>

        {/** Card 3 **/}
        <div className="w-64 p-4 rounded-lg border text-left border-blue-300 bg-gradient-to-br from-white to-pink-100 shadow-md
                        hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <img src="/images/Star.png" alt="star" className="w-6 h-6 mb-2" />
          <h3 className="text-blue-500 font-semibold">Career Advancement</h3>
          <p className="text-gray-600 text-sm">Move up to leadership roles in prestigious companies</p>
        </div>
      </div>
    </div>
  );
};

export default TopTierCandidates;
