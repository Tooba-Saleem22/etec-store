import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Newsletter from "../sections/Newsletter";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary based on location, but most orders arrive within 5-10 business days.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return items within 45 days of purchase. Please refer to our returns page for details.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally. Shipping fees and times vary based on the destination.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Once your order ships, you will receive a tracking number via email.",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "Sign up for our newsletter to receive exclusive promotions and discounts.",
  },
  {
    question: "How do I cancel or change an order?",
    answer:
      "Orders can be modified within 24 hours of placement. Contact customer support for assistance.",
  },
];

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-white text-black pt-32 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-small">FAQ</h1>
          <p className="text-gray-800 text-lg md:text-xl">
            Shop our curated selection of premium products, designed to elevate
            your everyday experiences.
          </p>

          <h2 className="text-3xl font-small mt-6">Need Help?</h2>
          <p className="text-gray-700 text-sm md:text-base mt-2">
            If you have an issue or question that requires immediate assistance,
            you can click the button below to contact with a Customer Service
            representative.
          </p>
          <p className="text-gray-800 text-small md:text-small mt-2">
            Please allow 06 - 12 business days from the time your package
            arrives back to us for a refund to be issued.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-4 w-full md:w-auto bg-transparent hover:bg-black hover:text-white border border-black rounded-3xl px-6 py-3 hover:scale-105 transition-transform"
          >
            Contact Us
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:mt-44">
          <h2 className="text-4xl font-small mb-4">Shopping Information</h2>
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-small text-gray-800"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-700 text-sm"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </motion.div>
  );
};

export default FAQ;
