import React from 'react'

const Privacy = () => {
    const sections = [
        {
          title: "1. Information We Collect",
          content: (
            <>
              We collect the following types of information:
              <br />
              <strong>a) Personal Information</strong><br />
              When you register, apply for a job, or use any interactive features, we may collect:
              <ul className="list-disc list-inside">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Location (city, country)</li>
                <li>Employment history</li>
                <li>Resume or CV</li>
                <li>LinkedIn or other social media profile URLs</li>
              </ul>
              <strong>b) Usage Data</strong><br />
              We automatically collect information about how you use the Platform, such as:
              <ul className="list-disc list-inside">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages viewed</li>
                <li>Date and time of access</li>
                <li>Referring URLs</li>
              </ul>
              <strong>c) Cookies and Tracking Technologies</strong><br />
              We use cookies and similar technologies to improve functionality and user experience. You can manage your cookie preferences via your browser settings.
            </>
          ),
        },
        {
          title: "2. How We Use Your Information",
          content: (
            <>
              We use the information we collect for purposes including but not limited to:
              <ul className="list-disc list-inside">
                <li>Creating and managing your user account</li>
                <li>Matching you with suitable job opportunities using AI algorithms</li>
                <li>Communicating with you about services, updates, and offers</li>
                <li>Providing customer support</li>
                <li>Analyzing usage to improve platform performance</li>
                <li>Ensuring legal and regulatory compliance</li>
                <li>Preventing fraud or unauthorized activity</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Sharing of Information",
          content: (
            <>
              We may share your data in the following cases:
              <strong><br />a) With Employers or Recruiters</strong><br />
              If you choose to apply for a job or set your profile as public, your information may be shared with third-party employers and recruiters.
              <br />
              <strong>b) With Service Providers</strong><br />
              We may share your data with third-party vendors who assist us in operating our services (e.g., cloud hosting, email delivery, analytics).
              <br />
              <strong>c) Legal Obligations</strong><br />
              We may disclose information if required to comply with applicable laws, legal processes, or to protect our rights.
              <br />
              <strong>d) Business Transfers</strong><br />
              If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred as part of that transaction.
            </>
          ),
        },
        {
          title: "4. Your Rights and Choices",
          content: (
            <>
              Depending on your jurisdiction, you may have the following rights:
              <ul className="list-disc list-inside">
                <li>Access: Request a copy of the personal data we hold about you.</li>
                <li>Correction: Update or correct inaccurate information.</li>
                <li>Deletion: Request deletion of your data (“Right to be Forgotten”).</li>
                <li>Objection: Object to the processing of your data for specific purposes.</li>
                <li>Data Portability: Receive your personal data in a structured, commonly used, and machine-readable format.</li>
                <li>Withdraw Consent: Where applicable, withdraw your consent at any time.</li>
              </ul>
              To exercise your rights, please contact us at <a href="mailto:privacy@nujob.ai" className="text-blue-600 underline">privacy@nujob.ai</a>.
            </>
          ),
        },
        {
          title: "5. Data Retention",
          content:
            "We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. You may request deletion of your account and data at any time.",
        },
        {
          title: "6. Security",
          content:
            "We take appropriate technical and organizational measures to protect your data against unauthorized access, loss, misuse, or alteration. However, no internet-based platform is completely secure. Use the Platform at your own risk.",
        },
        {
          title: "7. Children’s Privacy",
          content:
            "nuJOB.AI is not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we discover that we have collected data from a minor, we will take steps to delete such information.",
        },
        {
          title: "8. International Users",
          content:
            "If you are accessing our services from outside [Insert Country], your information may be transferred to and processed in countries with different data protection laws. By using the Platform, you consent to such transfers.",
        },
        {
          title: "9. Changes to This Policy",
          content:
            "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated “Last Updated” date. Your continued use of the Platform constitutes your acceptance of such changes.",
        },
        {
          title: "10. Contact Us",
          content: (
            <>
              If you have any questions, concerns, or requests related to this Privacy Policy, you may contact us at:
              <br />
              <strong>nuJOB.AI</strong><br />
              Email: <a href="mailto:privacy@nujob.ai" className="text-blue-600 underline">privacy@nujob.ai</a><br />
              Website: <a href="https://nujob.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://nujob.ai</a>
            </>
          ),
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