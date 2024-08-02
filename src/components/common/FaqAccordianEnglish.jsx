import React, { useState } from "react";

const FAQsEnglish = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is it?",
      answer:
        "It is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "How can I use it?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full mx-auto py-8 bg-[#F7FAFC] pl-20 pr-5">
      <h2 className="text-3xl font-bold mb-4 text-gray-700">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="pt-4 bg-white mb-2 rounded">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-700 pl-5 pb-3">
                {faq.question}
              </h3>
              <svg
                className={`w-6 h-6 ${
                  activeIndex === index ? "transform rotate-180" : ""
                } text-gray-700 mr-5`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={activeIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 border py-4 px-4 rounded-b-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsEnglish;
