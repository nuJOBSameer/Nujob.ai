import React from 'react'

const Terms = () => {
    const sections = [
        {
          title: "1. Introduction",
          content:
            "Welcome to nuJOB.AI (the “Website”). By accessing or using our Website and services, you agree to abide by these Terms and Conditions. Please read them carefully before proceeding.",
        },
        {
          title: "2. Use of Our Services",
          content: (
            <>
              You must be at least 18 years old to use our Website. By accessing or using our Website, you agree to:
              <ul className="list-disc list-inside mt-2">
                <li>Use the Website only for lawful purposes.</li>
                <li>Provide accurate and complete information when creating an account.</li>
                <li>Not use the Website to transmit harmful or unlawful content.</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Account Responsibilities",
          content:
            "If you create an account, you are responsible for maintaining its confidentiality and all activities under your account. Please notify us immediately of any unauthorized use of your account.",
        },
        {
          title: "4. Intellectual Property",
          content:
            "All content on this Website, including text, graphics, logos, and software, is the property of nuJOB.AI or its licensors. Unauthorized use of any content is prohibited without prior written consent from us.",
        },
        {
          title: "5. Termination of Use",
          content:
            "We reserve the right to terminate or suspend your access to the Website at any time if you breach these Terms and Conditions or engage in prohibited activities.",
        },
        {
          title: "6. Limitation of Liability",
          content:
            "nuJOB.AI is not liable for any indirect, incidental, or consequential damages arising from your use of our Website or services, including but not limited to loss of data or profit.",
        },
        {
          title: "7. Disclaimer",
          content:
            "The information provided on this Website is for general informational purposes only. We do not guarantee the accuracy or completeness of any information on the Website.",
        },
      ];
    return(
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
    {/* FAQ Icon */}
    <img src="/images/terms.png" alt="FAQ Icon" className="mx-auto w-36 h-24 mb-4" />

    {/* FAQs Heading with Underline */}
    <div className="text-center mb-4">
                  <div className="relative inline-block">
                      <h2 className="text-6xl font-bold text-gray-900">Terms & Conditions</h2>
                      <img src="/images/FAQBg.png" alt="Underline" className="absolute left-1 bottom-[-10px] w-full h-4 -z-40" />
                  </div>
              </div>

    {/* Description */}
    <p className="text-gray-600 mt-2">
    Connection in the Modern World: Beyond Digital Interactions
    </p>
    <div className="max-w-4xl mt-10 mx-auto p-6 md:p-12 py-24 bg-white border border-purple-100 rounded-md shadow-sm text-left">
      {sections.map((section, index) => (
        <div key={index} className="mb-6 border-b ">
          <h3 className="text-lg font-semibold text-blue-600 mb-1">{section.title}</h3>
          <p className="text-gray-700 text-sm">{section.content}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Terms