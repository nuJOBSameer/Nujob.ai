import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeBuilder() {
  const [openSection, setOpenSection] = useState("editing");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen mb-10 md:mb-0 px-6 md:px-16 bg-white"
    >
      {/* Left Side: Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="/images/SVG.png"
          alt="Resume Illustration"
          className="w-[80%] md:w-[70%]"
        />
      </motion.div>

      <div className="absolute left-20 mt-52 hidden md:flex">
        <img src="/images/Tablet.png" alt="book" className="w-32" />
      </div>

      {/* Right Side: Text and Accordion */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 space-y-4"
      >
        <p className="text-sm text-gray-500">✨ HARNESSING AI FOR SUCCESS</p>
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Resume
          </span>{" "}
          Builder & Editor
        </h1>

        {/* Accordion */}
        {[
          {
            key: "creation",
            title: "Resume Creation & Customization",
            content:
              "Your resume isn’t just a document—it’s your first impression. Craft a standout CV with ease, tailor it to your industry, and ensure it speaks your professional language. No more generic templates; build a resume that feels as unique as your career ambitions.",
          },
          {
            key: "editing",
            title: "Resume Editing & Optimization",
            content:
              "Your resume should evolve as you do. Get AI-powered suggestions to fine-tune content, formatting, and relevance. Our smart system recalibrates your match rate against job descriptions, helping you stay a step ahead in the job hunt. Because a well-optimized resume isn’t just seen—it gets shortlisted.",
          },
          {
            key: "versions",
            title: "Multiple Resume Versions",
            content:
              "One size doesn’t fit all, and neither should your resume. Create different versions tailored to specific roles, industries, or career paths. Whether you’re applying to a startup, a corporate giant, or a creative firm, you’ll always have the perfect resume ready to go.",
          },
        ].map(({ key, title, content }) => (
          <div key={key} className="border-t border-gray-300">
            <button
              className="w-full text-left py-4 text-lg font-semibold flex justify-between"
              onClick={() => toggleSection(key)}
            >
              {title}
              <span>{openSection === key ? "−" : "+"}</span>
            </button>
            <AnimatePresence mode="wait">
              {openSection === key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 px-4 pb-4"
                  >
                    {content}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
