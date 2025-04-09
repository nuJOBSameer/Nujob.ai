import React from 'react'

const Refund = () => {
    const sections = [
        {
          title: "1. Overview",
          content:
            "We strive to provide excellent services to our users. However, if you are not fully satisfied with our services, you may be eligible for a refund under certain conditions. Please review the details below.",
        },
        {
          title: "2. Eligibility for Refunds",
          content: (
            <>
              Refunds may be granted if:
              <ul className="list-disc list-inside mt-2">
                <li>The service was not delivered as described or experienced technical issues.</li>
                <li>You submitted a refund request within 07 days of purchase.</li>
                <li>No significant usage of the service has occurred (as determined by our team).</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Non-Refundable Items",
          content: (
            <>
              The following are non-refundable:
              <ul className="list-disc list-inside mt-2">
                <li>Services that have been fully utilized or completed.</li>
                <li>Any fees related to setup, consultation, or third-party integrations.</li>
                <li>Discounted or promotional services, unless stated otherwise.</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Requesting a Refund",
          content: (
            <>
              To request a refund, please contact our support team at{" "}
              <a href="mailto:support@nujob.ai" className="text-blue-600 underline">support@nujob.ai</a>. Provide details of your purchase, including:
              <ul className="list-disc list-inside mt-2">
                <li>Order ID or reference number</li>
                <li>Date of purchase</li>
                <li>Reason for the refund request</li>
              </ul>
              Our team will review your request and respond within 7 business days.
            </>
          ),
        },
        {
          title: "5. Refund Process",
          content:
            "If your refund is approved, it will be processed to your original payment method within 20 business days. Please note that your bank or payment provider may have additional processing times.",
        },
        {
          title: "6. Changes to Refund Policy",
          content:
            "We reserve the right to update this Refund Policy at any time. Any changes will be posted on this page, and by continuing to use our services, you agree to be bound by the revised policy.",
        },
      ];
      
    return (
        
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
            {/* FAQ Icon */}
            <img src="/images/refund.png" alt="FAQ Icon" className="mx-auto w-36 h-24 mb-4" />

            {/* FAQs Heading with Underline */}
            <div className="text-center mb-4">
                <div className="relative inline-block">
                    <h2 className="text-6xl font-bold text-gray-900">Refund Policy</h2>
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

export default Refund