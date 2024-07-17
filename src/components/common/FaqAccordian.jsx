import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "ما هو ؟",
      answer: "هو ببساطة نص عن طباعة وتنسيق النصوص الصناعية.",
    },
    {
      question: "لماذا نستخدمه؟",
      answer:
        "فهو حقيقة مثبتة منذ فترة طويلة أن القارئ سيشتت انتباهه بالمحتوى القابل للقراءة لصفحة عند النظر في تخطيطها.",
    },
    {
      question: "من أين يأتي؟",
      answer:
        "على خلاف الاعتقاد السائد، لا يعود Lorem Ipsum إلى نص عشوائي ببساطة.",
    },
    {
      question: "كيف يمكنني استخدامه؟",
      answer:
        "هناك العديد من الإصدارات المختلفة من المقاطع المتاحة لـ Lorem Ipsum، ولكن الأغلبية قد تعرضت لبعض التعديلات بشكل ما.",
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
    <div className="w-full mx-auto py-8 text-right bg-[#F7FAFC] px-20 py-30">
      <h2 className="text-3xl font-bold mb-4 text-gray-700 px-20">الأسئلة الشائعة</h2>
      <div className="divide-y divide-gray-200 px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="pt-4 bg-white mb-2 rounded">
            <div
              className="flex justify-end items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-700 text-right pb-4">
                {faq.question}
              </h3>
              <svg
                className={`w-6 h-6 ${
                  activeIndex === index ? "transform rotate-180" : ""
                } text-gray-700 mx-4`}
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
              <p className="mt-2 text-gray-700 text-right border py-4 px-4 rounded-b-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
