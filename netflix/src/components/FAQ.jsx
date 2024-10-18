import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of TV shows, movies, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "The price varies depending on your plan, and Netflix offers several pricing tiers for different streaming options.",
    },
    {
      question: "Where can I watch?",
      answer:
        "You can watch Netflix on any device that has the Netflix app or on a browser via Netflix.com.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Cancel your subscription anytime from the Netflix website or app settings.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "You can enjoy TV shows, movies, documentaries, and exclusive Netflix Originals.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "Yes, Netflix offers a Kids profile with content appropriate for children.",
    },
  ];

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      {/* <Header /> */}
      <div className=" bg-black text-white flex justify-center items-center p-6 pt-[5rem]">
        <div className="w-full max-w-[90%] sm:max-w-[65%]">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left text-lg font-medium hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl">{open === index ? "−" : "+"}</span>
                </button>
                {open === index && (
                  <div className="p-5 border-t border-gray-700 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default FAQ;
