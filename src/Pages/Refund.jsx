import React from 'react'
import { Helmet } from 'react-helmet';

const Refund = () => {
    const sections = [
        {
          title: "1. General Policy",
          content: (
            <>
              All purchases made on or through the nuJOB.AI platform are non-refundable, except in specific circumstances outlined below or where required by applicable law. By purchasing any service or credit from us, you acknowledge and agree to the terms of this policy.
            </>
          ),
        },
        {
          title: "2. Credit System Refunds",
          content: (
            <>
              nuJOB.AI uses a credit-based system for accessing certain services, such as job postings, resume unlocks, AI matching, or other platform features.
              <br /><br />
              <strong>a. Credit Purchase Terms</strong>
              <ul className="list-disc list-inside">
                <li>Credits purchased through the platform are non-transferable and non-refundable once the transaction is complete.</li>
                <li>Credits do not expire unless stated otherwise at the time of purchase.</li>
                <li>Once credits are used (e.g., to post a job or unlock a resume), no refund will be issued for those actions.</li>
              </ul>
              <strong>b. Unused Credits</strong>
              <ul className="list-disc list-inside">
                <li>Refund requests for unused credits may be considered on a case-by-case basis, provided the request is made within 7 days of purchase and no part of the credit bundle has been utilized.</li>
                <li>Any promotional or bonus credits provided as part of a bundle or offer are non-refundable.</li>
              </ul>
              <strong>c. Credit Bundle Issues</strong><br />
              If you experience a technical issue or did not receive credits after payment, please contact us at <a href="mailto:billing@nujob.ai" className="text-blue-600 underline">billing@nujob.ai</a>, and we will resolve the matter or issue a refund where applicable.
            </>
          ),
        },
        {
          title: "3. Subscription Plans",
          content: (
            <>
              We offer recurring subscription plans for enhanced access, tools, or features.
              <br /><br />
              <strong>a. Monthly/Annual Plans</strong>
              <ul className="list-disc list-inside">
                <li>Subscriptions are billed at the beginning of each billing cycle and are non-refundable once billed.</li>
                <li>Cancellation will take effect at the end of the current billing period.</li>
                <li>No partial refunds will be issued for unused time.</li>
              </ul>
              <strong>b. Free Trials</strong>
              <ul className="list-disc list-inside">
                <li>If you cancel before a free trial ends, no charges will apply.</li>
                <li>If not canceled, billing begins automatically, and charges will not be refunded after trial expiration.</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Candidate Services",
          content: (
            <>
              Premium services purchased by job seekers (e.g., AI resume reviews, priority matching, profile highlights) are non-refundable once delivered or accessed.
              <br />
              Refunds may be considered only for unredeemed services, if requested within 3 days of purchase.
            </>
          ),
        },
        {
          title: "5. Job Posting & Employer Services",
          content: (
            <>
              Recruiters or employers purchasing services such as job listings, candidate database access, or employer branding services are not eligible for refunds once:
              <ul className="list-disc list-inside">
                <li>A listing is published</li>
                <li>A profile is accessed</li>
                <li>The service is otherwise activated</li>
              </ul>
              Requests related to accidental purchases must be raised within 48 hours and are subject to review.
            </>
          ),
        },
        {
          title: "6. Duplicate Transactions & Billing Errors",
          content: (
            <>
              If you have been incorrectly billed or charged more than once, contact us at <a href="mailto:billing@nujob.ai" className="text-blue-600 underline">billing@nujob.ai</a> with transaction details. Verified overcharges will be refunded in full within 7–10 business days.
            </>
          ),
        },
        {
          title: "7. How to Request a Refund",
          content: (
            <>
              Please contact us at <a href="mailto:billing@nujob.ai" className="text-blue-600 underline">billing@nujob.ai</a> with:
              <ul className="list-disc list-inside">
                <li>Registered email address</li>
                <li>Order ID or transaction reference</li>
                <li>Date of purchase</li>
                <li>Reason for refund request</li>
                <li>Any relevant screenshots or proof</li>
              </ul>
              Refund requests will be reviewed and responded to within 5 business days.
            </>
          ),
        },
        {
          title: "8. Grounds for Denial",
          content: (
            <>
              Refund requests may be denied if:
              <ul className="list-disc list-inside">
                <li>The request is made after the eligible period</li>
                <li>The service or credit has already been used</li>
                <li>There is evidence of abuse, fraud, or policy violations</li>
              </ul>
            </>
          ),
        },
        {
          title: "9. Changes to This Policy",
          content: (
            <>
              We reserve the right to revise this Refund Policy at any time. Updates will be reflected on this page with a revised “Last Updated” date. Continued use of nuJOB.AI after updates constitutes acceptance.
            </>
          ),
        },
        {
          title: "10. Contact Us",
          content: (
            <>
              For billing, refunds, or account-related inquiries:
              <br />
              <strong>nuJOB.AI</strong><br />
              Email: <a href="mailto:billing@nujob.ai" className="text-blue-600 underline">billing@nujob.ai</a><br />
              Website: <a href="https://nujob.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://nujob.ai</a>
            </>
          ),
        },
      ];
      
      
    return (
        <>
        <Helmet>
        <title>Refund | nuJOB.AI - Tested Skills. Smarter Hires.</title>
      </Helmet>
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
        </>
    )
}

export default Refund