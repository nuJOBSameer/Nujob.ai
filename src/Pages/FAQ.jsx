import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    Clients: [
      {
        question: "How long does it take for my job listing to go live?",
        answer:
          "Job listings typically go through a quick review process to ensure they meet platform guidelines. Approval usually takes 24-48 hours. Once approved, your listing is live and visible to the right candidates. Beyond job postings, we offer expert hiring insights and industry-specific guidance, ensuring you find the best talent—not just fill positions.",
      },
      {
        question: "What are the payment options available for job listings?",
        answer: "We offer multiple payment options, including credit/debit cards, bank transfers, and invoicing for bulk listings. Flexible plans are available to fit your hiring needs.",
      },
    ],
    Candidates: [
      {
        question: "Can I post multiple job listings under one account?",
        answer: "Yes. You can manage multiple job postings from a single account, making it easier to streamline your hiring process.",
      },
      {
        question: "Is there a limit to the number of applicants I can receive for a job posting?",
        answer: "No. There’s no cap on applicants—your job posting remains open to all qualified candidates until you close the listing or set specific application limits",
      },
    ],
    Others: [
      {
        question: "What type of roles do you recruit for?",
        answer: "We recruit across entry-level to executive roles in various industries, focusing on both technical and non-technical positions.",
      },
      {
        question: "Where are you located?",
        answer: "We operate remotely with a global reach, connecting employers and candidates across multiple locations.",
      },
      {
        question: "Why do I need a recruiter?",
        answer: "A recruiter helps you: 1: Cut through unqualified applications with AI-backed screening. 2:Connect with top talent faster through targeted outreach.3:Save time by streamlining the hiring process.",
      },
      {
        question: "Which industries do you recruit for?",
        answer: "We specialize in tech, finance, healthcare, marketing, sales, engineering, and more.",
      },
      {
        question: "What are your values?",
        answer: "We prioritize transparency, efficiency, and innovation in recruitment—ensuring the right fit for both employers and job seekers.",
      },
      {
        question: "How can I search for specific job categories or locations on the site?",
        answer: "Use our smart search filters to refine results by industry, role, experience level, and location—helping you find the right job or candidate faster.",
      },
    ],
  };

  const toggleFAQ = (category, index) => {
    const newIndex = `${category}-${index}`;
    setOpenIndex(openIndex === newIndex ? null : newIndex);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      {/* FAQ Icon */}
      <img src="/images/FAQ.png" alt="FAQ Icon" className="mx-auto w-36 h-24 mb-4" />

      {/* FAQs Heading with Underline */}
      <div className="text-center mb-4">
                    <div className="relative inline-block">
                        <h2 className="text-6xl font-bold text-gray-900">FAQ</h2>
                        <img src="/images/FAQBg.png" alt="Underline" className="absolute left-0 bottom-[-3px] w-full -z-40" />
                    </div>
                </div>

      {/* Description */}
      <p className="text-gray-600 mt-2">
        Have questions? We’ve got the answers. Find out more about nuJOB.AI and how we can help you.
      </p>

      {/* Sections */}
      {Object.keys(faqs).map((category) => (
        <div key={category} className="mt-6 text-left">
          <div className="bg-black text-white py-2 px-4 font-medium">{category}</div>
          <div className="mt-4">
            {faqs[category].map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  className={`flex justify-between w-full text-left font-semibold text-lg ${
                    openIndex === `${category}-${index}` ? "text-blue-600" : "text-black"
                  }`}
                  onClick={() => toggleFAQ(category, index)}
                >
                  {faq.question}
                  {openIndex === `${category}-${index}` ? (
                    <MinusIcon className="w-5 h-5 text-blue-600" />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {openIndex === `${category}-${index}` && <p className="text-gray-600 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ✅ STILL HAVE ANY QUESTIONS SECTION */}
      <div
        className="mt-10 mx-auto max-w-3xl rounded-2xl p-6 text-center"
        style={{
          backgroundImage: "url('/images/ABBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="text-xl font-bold text-blue-700">Still Have Any Questions?</h3>
        <p className="text-gray-800 mt-2">
          Check out our support page or contact us directly for personalized assistance.
        </p>
        <button className="mt-4 px-6 py-2 bg-black text-white font-medium rounded-lg flex items-center mx-auto hover:bg-gray-900">
          Ask Us
          <span className="ml-2"><img src="/images/Arrow.png" alt="Arrow" /></span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
