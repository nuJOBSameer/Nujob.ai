import React from "react";

const MeritBadges = () => {
  const badges = [
    { src: "/images/badge1.png", alt: "Badge 1" },
    { src: "/images/badge2.png", alt: "Badge 2" },
    { src: "/images/badge3.png", alt: "Badge 3" },
    { src: "/images/badge4.png", alt: "Badge 4" },
    { src: "/images/badge5.png", alt: "Badge 5" },
  ];

  return (
    <div className="bg-[#F1ECEC36] py-12 px-5 md:px-32 text-center">
      <h2 className="text-2xl font-bold text-blue-700">Merit Badges</h2>
      <p className="text-gray-900 font-medium mt-2 md:px-44">
        Your achievements deserve recognition. Our Merit Badge Management system helps you highlight skills, certifications, and milestones—making your expertise impossible to ignore.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto mt-4">
        Earn & Display – Flaunt your badges to recruiters.
        <br />Stay Updated – AI-driven alerts for expiring certifications.
        <br />Boost Credibility – Let your accomplishments speak for you.
      </p>

      {/** Badge List **/}
      <div className="flex justify-center gap-6 mt-8">
        {badges.map((badge, index) => (
          <div key={index} className="w-24">
            <img src={badge.src} alt={badge.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeritBadges;
