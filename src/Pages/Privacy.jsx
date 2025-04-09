import React from 'react'

const Privacy = () => {
    const sections = [
        {
          title: "1. Information We Collect",
          content: (
            <>
              We collect various types of information to provide and improve our services for you, including:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Personal Information:</strong> Information that identifies you as an individual, such as your name, email address, phone number, or other details you provide when creating an account.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information on how you access and interact with our website, including your IP address, browser type, and pages viewed.
                </li>
                <li>
                  <strong>Communication Data:</strong> Information you provide in your interactions with us, such as inquiries, feedback, and support requests.
                </li>
                <li>
                  <strong>Technical Data:</strong> Device information, operating system, and other technical details that help us optimize your experience.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "2. How We Use Your Information",
          content: (
            <>
              We may use your information for various purposes, including to:
              <ul className="list-disc list-inside mt-2">
                <li>Provide and maintain our services.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Communicate with you about updates, new features, and other relevant information.</li>
                <li>Respond to your comments, questions, and support requests.</li>
                <li>Analyze and monitor usage and trends to enhance user experience and site performance.</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Information Sharing and Disclosure",
          content: (
            <>
              We may share your information under the following circumstances:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party service providers to support our operations, including payment processors, analytics providers, and customer support partners.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in good faith when it is necessary to protect our rights, comply with legal obligations, or respond to requests from government authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, we may transfer your information to the relevant parties.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Cookies and Tracking Technologies",
          content:
            "We use cookies and similar tracking technologies to monitor site activity and enhance your experience. You may adjust your browser settings to refuse cookies; however, this may impact your ability to use certain features of our site.",
        },
        {
          title: "5. Data Security",
          content:
            "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
        },
      ];
      
    return(
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        {/* FAQ Icon */}
        <img src="/images/terms.png" alt="FAQ Icon" className="mx-auto w-36 h-24 mb-4" />
    
        {/* FAQs Heading with Underline */}
        <div className="text-center mb-4">
                      <div className="relative inline-block">
                          <h2 className="text-6xl font-bold text-gray-900">Privacy Policy</h2>
                          <img src="/images/FAQBg.png" alt="Underline" className="absolute left-1 bottom-[-10px] w-full h-4 -z-40" />
                      </div>
                  </div>
    
        {/* Description */}
        <p className="text-gray-600 mt-2">
        nuJOB.ai (“we,” “our,” or “us”) is committed to protecting the privacy of its users (“you” or “user”). This Privacy Policy explains our practices regarding the collection, use, and disclosure of information on our website www.nujob.ai (the “Website”) and services.
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

export default Privacy