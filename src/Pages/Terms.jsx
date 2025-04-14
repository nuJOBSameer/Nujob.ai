import React from 'react'
import { Helmet } from 'react-helmet';

const Terms = () => {
    const sections = [
        {
          title: "1. Eligibility",
          content: (
            <>
              You must be at least 18 years old, legally capable of entering into agreements, and use the Platform in compliance with applicable laws.
            </>
          ),
        },
        {
          title: "2. Services Offered",
          content: (
            <>
              nuJOB.AI offers:
              <ul className="list-disc list-inside">
                <li>AI-powered job matching</li>
                <li>Resume building and optimization</li>
                <li>Job listings and employer profiles</li>
                <li>Career guidance resources</li>
                <li>Practical skill evaluation via virtual labs</li>
              </ul>
              We may modify, suspend, or discontinue services at our discretion.
            </>
          ),
        },
        {
          title: "3. User Accounts",
          content: (
            <>
              Account creation may be required to access certain features. You are responsible for maintaining the accuracy of your information and the security of your login credentials. We may suspend or terminate accounts that violate these Terms.
            </>
          ),
        },
        {
          title: "4. Acceptable Use",
          content: (
            <>
              You agree not to:
              <ul className="list-disc list-inside">
                <li>Engage in unlawful, harmful, or misleading activities</li>
                <li>Impersonate others or misrepresent your identity</li>
                <li>Spread malware or harmful code</li>
                <li>Scrape or extract data without permission</li>
              </ul>
            </>
          ),
        },
        {
          title: "5. Intellectual Property",
          content: (
            <>
              All content, logos, and software are the property of nuJOB.AI or its licensors. Reproduction or redistribution is prohibited without written consent.
            </>
          ),
        },
        {
          title: "6. Payments and Subscriptions",
          content: (
            <>
              Certain features may require payment. By subscribing, you agree to our pricing and cancellation terms. Pricing and features are subject to change with notice.
            </>
          ),
        },
        {
          title: "7. Third-Party Links",
          content: (
            <>
              We may link to third-party sites or services. We are not responsible for their content, policies, or practices.
            </>
          ),
        },
        {
          title: "8. Warranties Disclaimer",
          content: (
            <>
              The Platform is provided “as is.” We do not guarantee the accuracy of job listings, AI-generated content, or specific employment outcomes.
            </>
          ),
        },
        {
          title: "9. Limitation of Liability",
          content: (
            <>
              nuJOB.AI is not liable for indirect, incidental, or consequential damages, including lost data, profits, or job opportunities.
            </>
          ),
        },
        {
          title: "10. Termination",
          content: (
            <>
              We may suspend or terminate access for any reason, with or without notice, including violations of these Terms.
            </>
          ),
        },
        {
          title: "11. Governing Law",
          content: (
            <>
              These Terms are governed by the laws of [Insert Jurisdiction].
            </>
          ),
        },
        {
          title: "12. Updates to Terms",
          content: (
            <>
              We may revise these Terms periodically. Continued use of the Platform after changes indicates acceptance of the updated Terms.
            </>
          ),
        },
        {
          title: "13. Contact Us",
          content: (
            <>
              Email: <a href="mailto:support@nujob.ai" className="text-blue-600 underline">support@nujob.ai</a><br />
              Website: <a href="https://nujob.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://nujob.ai</a>
            </>
          ),
        },
      ];
      
    return(
      <>
      <Helmet>
        <title>Terms & Conditions | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
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
    </>
  )
}

export default Terms