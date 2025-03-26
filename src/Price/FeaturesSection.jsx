import React from "react";

const features = [
  {
    title: "Personal Branding Fee",
    description:
      "Elevate your professional identity with our branding services. This includes",
    points: [
      "Enhanced profiles tailored to industry standards",
      "Resumes and portfolios optimized to highlight key skills and achievements",
      "Strategic branding to stand out in the competitive market."
    ],
    image: "/images/Price1.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Education Platform",
    description:
      "Gain access to cutting-edge learning resources through our education platform. Features include",
    points: [
      "Courses on the latest trends and best practices in hiring and career advancement",
      "Expert-led sessions on personal development and professional growth.",
      "Certifications to strengthen your profile and improve opportunities."
    ],
    image: "/images/Price2.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Referrals & Benefits",
    description:
      "We believe in rewarding loyalty and collaboration. Our referral and benefits program offers:",
    points: [
      "Discounts on services for introducing others to our platform.",
      "Credits and perks for continued engagement and long-term memberships"
    ],
    image: "/images/Price3.png",
    arrow: "/images/ArrowD.png"
  },
  {
    title: "Single Prices & Custom Packages",
    description:
      "Choose from flexible pricing options tailored to your specific needs",
    points: [
      "Pay-per-service options for targeted solutions.",
      "Bundled packages designed to offer comprehensive services at competitive rates."
    ],
    image: "/images/Price4.png",
    arrow: "/images/ArrowD.png"
  }
];

const FeaturesSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-32 mt-10">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col gap-4">
          <img src={feature.image} alt={feature.title} className="w-20 h-20" />
          <h3 className="text-lg font-bold text-blue-700">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
          <ul className="space-y-2">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <img src={feature.arrow} alt="arrow" className="w-4 h-4 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;