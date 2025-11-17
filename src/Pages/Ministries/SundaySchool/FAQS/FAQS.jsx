import React, { useState } from "react";
import "./FAQS.css";
import { RiCloseLine } from "@remixicon/react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I get involved in Men's Ministry?",
      answer:
        "We encourage you to join us for a gathering at your congregation or attend a retreat! You can directly contact a Men's Ministry representative from your congregation for more information.",
    },
    {
      question: "What can I expect from a men's gathering or a retreat?",
      answer:
        "While each congregation holds gatherings and retreats in a slightly different manner, we hope these spaces serve as a casual, easy pathway to get to know other men in our congregation and be empowered to follow Jesus in your daily life.",
    },
    {
      question:
        "What types of groups do you have for men at Gospel Revival Wave Church?",
      answer:
        "A meaningful way we hope to foster discipleship at Gospel Revival Wave Church is through groups that meet regularly. These groups typically include women and men. You can contact your congregation's Connection Director for next steps on how to get involved with a group at Gospel Revival Wave Church.",
    },
    {
      question: "Is there any additional care that's available for me?",
      answer:
        "Our counseling center provides direct biblical counseling services, as well as groups and classes. They also have resources for walking through substance abuse, infidelity, recovery, and more. We'd also love to get to know you and connect you to pastoral care in your congregation if needed. Contact your congregation's Men's Ministry representative for more information.",
    },
  ];

  return (
    <div className="faq_section section" id="mens_faqs">
      <div className="faq_container container">
        <div className="faq_wrapper">
          <div className="faq_header">
            <h2 className="section_title">Frequently Asked Questions</h2>
          </div>

          <div className="faq_list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq_item ${
                  activeIndex === index ? "faq_item--active" : ""
                }`}
              >
                <button
                  className="faq_question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="faq_question_text">{faq.question}</span>
                  <RiCloseLine
                    size={28}
                    className={`faq_icon ${
                      activeIndex === index ? "faq_icon--active" : ""
                    }`}
                  />
                </button>

                <div
                  className={`faq_answer ${
                    activeIndex === index ? "faq_answer--active" : ""
                  }`}
                >
                  <div className="faq_answer_content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
