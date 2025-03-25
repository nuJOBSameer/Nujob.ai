import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    Clients: [
      {
        question: "How long does it take for my job listing to be approved and go live?",
        answer:
          "Job listings typically go through a review process to ensure they meet the site's guidelines. The approval time can vary but is usually within 24-48 hours. Once approved, your job listing will go live on the site. Our expertise allows us to advise you on the hiring process and the nuances of your industry. We don't just fill jobs - we nurture partnerships. We are here for you for as long as you need us.",
      },
      {
        question: "What are the payment options available for job listings?",
        answer: "",
      },
    ],
    Candidates: [
      {
        question: "Can I post multiple job listings under one account?",
        answer: "",
      },
      {
        question: "Is there a limit to the number of applicants I can receive for a job posting?",
        answer: "",
      },
    ],
    Others: [
      {
        question: "What type of roles do you recruit for?",
        answer: "",
      },
      {
        question: "Where are you located?",
        answer: "",
      },
      {
        question: "What are your values?",
        answer: "",
      },
      {
        question: "Which industries do you recruit for?",
        answer: "",
      },
      {
        question: "Why do I need a recruiter?",
        answer: "",
      },
      {
        question: "How can I search for specific job categories or locations on the site?",
        answer: "",
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
                        <h2 className="text-4xl font-bold text-gray-900">FAQ</h2>
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
